//для слайдера кнопка

import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

interface IButtonSCircleTransformProps {
	nextSlide: any;
	prevSlide: any;
}

const ButtonSCircleTransform: React.FC<IButtonSCircleTransformProps> = ({ nextSlide, prevSlide }) => {
	return (
		<div className={styles.circleContainer}>
			<button className={styles.leftButton} onClick={prevSlide}>
				<Image
					src='/reviews/arrow-left.svg'
					width={64 / 2}
					height={64 / 2}
					alt='arrow-left'
				/>
			</button>
			<button className={styles.rightButton} onClick={nextSlide}>
				<Image
					src='/reviews/arrow-right.svg'
					width={64 / 2}
					height={64 / 2}
					alt='arrow-left'
				/>
			</button>
			<div className={styles.circle} />
		</div>
	);
};

export default ButtonSCircleTransform;
