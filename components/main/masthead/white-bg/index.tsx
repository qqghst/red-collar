import React, { Suspense } from 'react';
import styles from './styles.module.scss';
import { Canvas, useLoader } from '@react-three/fiber';
import { Environment, Bounds, Float } from '@react-three/drei';
// import FaceModel from '@/models/masthead/faceModel';
import dynamic from 'next/dynamic';
// import * as THREE from 'three';

const FaceModel = dynamic(() => import('@/models/masthead/faceModel'), {
	ssr: false,
});

const WhiteBg: React.FC = () => {
	return (
		<div className={styles.whiteBg}>
			<div className={styles.canvasScroll}>
				<div className={styles.canvasContainer}>
					<Canvas shadows>
						<ambientLight intensity={1} />
						<directionalLight />
						<Environment preset='studio' />
						<Float speed={2} rotationIntensity={1} floatIntensity={0} floatingRange={[0, 0]}>
							<Suspense fallback={null}>
								<Bounds fit margin={1}>
									<FaceModel />
								</Bounds>
							</Suspense>
						</Float>
					</Canvas>
				</div>
			</div>
		</div>
	);
};

export default WhiteBg;
