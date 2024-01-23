import React, { Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import { hoverMannequin, resetHoverMannequin, hoverProjectModel, resetHoverProjectModel } from '@/store';
import Project from '../projects/project';
import { hoverProject, unhoverProject, $ExpandedStore, $BackgroundColorStore } from '@/store';
import { useUnit } from 'effector-react';
import styles from './styles.module.scss';
import ButtonTest from '@/ui/button-test';
import dynamic from 'next/dynamic';

const TorusKnot = dynamic(() => import('@/models/projects/torusknot'), {
	ssr: false,
});
const Torus = dynamic(() => import('@/models/projects/torus'), {
	ssr: false,
});
const Icosahedron = dynamic(() => import('@/models/projects/icosahedron'), {
	ssr: false,
});
const Tetrahedron = dynamic(() => import('@/models/projects/tetrahedron'), {
	ssr: false,
});

const Projects: React.FC = () => {
	type ModelName = 'TorusKnot' | 'Torus' | 'Icosahedron' | 'Tetrahedron';

	const expandedStore = useUnit($ExpandedStore);
	const backgroundColorStore = useUnit($BackgroundColorStore);

	const torusKnotRef = useRef<HTMLDivElement>(null);
	const torusRef = useRef<HTMLDivElement>(null);
	const icosahedronRef = useRef<HTMLDivElement>(null);
	const tetrahedronRef = useRef<HTMLDivElement>(null);

	const [visibleModel, setVisibleModel] = useState<ModelName | null>('TorusKnot');
	const [startAnimatingModel, setStartAnimatingModel] = useState<ModelName | null>(null);
	const [isHovered, setIsHovered] = useState(false);
	const [hoveredModel, setHoveredModel] = useState<ModelName | null>(null);

	const changeModel = useCallback(
		(newModel: ModelName) => {
			if (visibleModel !== newModel) {
				setStartAnimatingModel(visibleModel);
				setTimeout(() => {
					setVisibleModel(newModel);
					setStartAnimatingModel(null);
				}, 400);
			}
		},
		[visibleModel],
	);

	const checkVisibility = useCallback(() => {
		const torusKnotPos = torusKnotRef.current?.getBoundingClientRect().top ?? 0;
		const torusPos = torusRef.current?.getBoundingClientRect().top ?? 0;
		const icosahedronPos = icosahedronRef.current?.getBoundingClientRect().top ?? 0;
		const tetrahedronPos = tetrahedronRef.current?.getBoundingClientRect().top ?? 0;

		if (isHovered) {
			if (hoveredModel === 'TorusKnot' && torusKnotPos < window.innerHeight / 2 && torusKnotPos >= 0) {
				changeModel('TorusKnot');
				setIsHovered(false);
				setHoveredModel(null);
			} else if (hoveredModel === 'Torus' && torusPos < window.innerHeight / 2 && torusPos >= 0) {
				changeModel('Torus');
				setIsHovered(false);
				setHoveredModel(null);
			} else if (hoveredModel === 'Icosahedron' && icosahedronPos < window.innerHeight / 2 && icosahedronPos >= 0) {
				changeModel('Icosahedron');
				setIsHovered(false);
				setHoveredModel(null);
			} else if (hoveredModel === 'Tetrahedron' && tetrahedronPos < window.innerHeight / 2 && tetrahedronPos >= 0) {
				changeModel('Tetrahedron');
				setIsHovered(false);
				setHoveredModel(null);
			}
		} else {
			if (torusKnotPos < window.innerHeight / 2 && torusKnotPos >= 0 && visibleModel !== 'TorusKnot') {
				changeModel('TorusKnot');
			} else if (torusPos < window.innerHeight / 2 && torusPos >= 0 && visibleModel !== 'Torus') {
				changeModel('Torus');
			} else if (icosahedronPos < window.innerHeight / 2 && icosahedronPos >= 0 && visibleModel !== 'Icosahedron') {
				changeModel('Icosahedron');
			} else if (tetrahedronPos < window.innerHeight / 2 && tetrahedronPos >= 0 && visibleModel !== 'Tetrahedron') {
				changeModel('Tetrahedron');
			}
		}
	}, [torusKnotRef, torusRef, icosahedronRef, tetrahedronRef, isHovered, hoveredModel, visibleModel, changeModel]);

	useEffect(() => {
		window.addEventListener('scroll', checkVisibility);
		return () => {
			window.removeEventListener('scroll', checkVisibility);
		};
	}, [checkVisibility]);

	const changeBackgroundColor = useCallback((color: any) => {
		hoverProject(color);
	}, []);

	const resetBackgroundColor = useCallback(() => {
		unhoverProject();
	}, []);

	const handleMouseEnter = useCallback(
		(model: ModelName) => {
			if (visibleModel !== model) {
				changeModel(model);
				setIsHovered(true);
				setHoveredModel(model);
			}
		},
		[changeModel],
	);

	const onMouseEnter = useCallback(
		(backgroundColor: string, model: ModelName) => {
			changeBackgroundColor(backgroundColor);
			handleMouseEnter(model);
			hoverMannequin();
		},
		[changeBackgroundColor, changeModel],
	);

	const onMouseLeave = useCallback(() => {
		resetHoverMannequin();
		resetBackgroundColor();
	}, [resetBackgroundColor]);

	const dynamicStyle = useMemo(
		() => ({
			backgroundColor: backgroundColorStore,
			'--dynamic-background-color': backgroundColorStore,
		}),
		[backgroundColorStore],
	);

	return (
		<div className={styles.projects}>
			<div className={` ${styles.projects__container} ${expandedStore ? styles.expanded : ''}`} style={dynamicStyle}>
				<div className='z-[1010101]' ref={torusKnotRef}>
					<Project
						letters='тамо • ос'
						subtitle='логистика'
						description='О разработке высоконагруженного сервиса для таможенного оформления'
						onMouseEnter={() => onMouseEnter('#FFFFFF', 'TorusKnot')}
						onMouseLeave={onMouseLeave}
					/>
				</div>
				<div className='z-[1010101]' ref={torusRef}>
					<Project
						letters='туктук'
						subtitle='добыча сырья'
						description='Разработка и сопровождение B2B-сервиса для рынка нерудных материалов'
						onMouseEnter={() => onMouseEnter('#EFE8E4', 'Torus')}
						onMouseLeave={onMouseLeave}
					/>
				</div>
				<div className='z-[1010101]' ref={icosahedronRef}>
					<Project
						letters='humans.uz'
						subtitle='финтех'
						description='Разработка, дизайн-поддержка сайта и 3D-объекты для финансового мультипродукта'
						onMouseEnter={() => onMouseEnter('#FAF7EE', 'Icosahedron')}
						onMouseLeave={onMouseLeave}
					/>
				</div>
				<div className='z-[1010101]' ref={tetrahedronRef}>
					<Project
						letters='yota support'
						subtitle='финтех'
						description='Дизайн,маркетинг и разработка для существующих и новых продуктов компании'
						onMouseEnter={() => onMouseEnter('#EDF5F7', 'Tetrahedron')}
						onMouseLeave={onMouseLeave}
					/>
				</div>

				<div className='h-[280vh] absolute top-0 m-auto ml-auto mr-auto left-0 right-0 z-[0]'>
					<div className='h-screen w-full top-0 sticky'>
						<Canvas>
							<ambientLight />
							<Environment preset='studio' />
							<Float floatIntensity={2}>
								<Suspense fallback={null}>
									<TorusKnot
										visible={visibleModel === 'TorusKnot'}
										isAnimating={startAnimatingModel === 'TorusKnot'}
									/>
									<Torus visible={visibleModel === 'Torus'} isAnimating={startAnimatingModel === 'Torus'} />
									<Icosahedron
										visible={visibleModel === 'Icosahedron'}
										isAnimating={startAnimatingModel === 'Icosahedron'}
									/>
									<Tetrahedron
										visible={visibleModel === 'Tetrahedron'}
										isAnimating={startAnimatingModel === 'Tetrahedron'}
									/>
								</Suspense>
							</Float>
						</Canvas>
					</div>
				</div>
			</div>
			<div className={styles.buttonTest}>
				<ButtonTest
					label='смотреть работы'
					onMouseEnter={() => null}
					onMouseLeave={() => null}
					topColor='#0d0c0c'
					bottomColor='#f51b1b'
				/>
			</div>
		</div>
	);
};

export default React.memo(Projects);
