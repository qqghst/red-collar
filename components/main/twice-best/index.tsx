import React, { Suspense } from 'react';
import styles from './styles.module.scss';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { Coin } from '@/models/coin';

const TwiceBest: React.FC = () => {
	return (
		<div className={styles.twiceBest}>
			<div className={styles.twiceBest__container}>
				<h1>
					Дважды лучшее <br /> агенство в мире <br /> 2017 и 2019
				</h1>
				<div className={styles.canvasContainer}>
					<Canvas>
						<ambientLight />
						<Environment preset='studio' />
						<Suspense fallback={null}>
							<Coin />
						</Suspense>
					</Canvas>
				</div>
			</div>
		</div>
	);
};

export default TwiceBest;
