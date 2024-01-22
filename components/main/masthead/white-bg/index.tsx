import React, { Suspense } from 'react';
import styles from './styles.module.scss';
import { Canvas } from '@react-three/fiber';
import { Environment, Bounds, Float } from '@react-three/drei';
import { FaceModel } from '@/models/masthead/faceModel';

const WhiteBg: React.FC = () => {
	return (
		<div className={styles.whiteBg}>
			<div className={styles.canvasScroll}>
				<div className={styles.canvasContainer}>
					<Canvas shadows>
						<ambientLight intensity={1} />
						<Environment preset='studio' />
						<Bounds fit clip>
							<Float
								speed={2}
								rotationIntensity={1}
								floatIntensity={0}
								floatingRange={[0, 0]}
							>
								<Suspense fallback={null}>
									<FaceModel />
								</Suspense>
							</Float>
						</Bounds>
					</Canvas>
				</div>
			</div>
		</div>
	);
};

export default WhiteBg;
