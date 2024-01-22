//для слайдера кнопка

import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

interface IButtonTwoCirclesProps {
	nextSlide: any;
	prevSlide: any;
}

const ButtonTwoCircles: React.FC<IButtonTwoCirclesProps> = ({ nextSlide, prevSlide }) => {
	return (
		<div className={styles.circleContainer}>
			<button className={styles.leftButton} onClick={prevSlide}>
				<Image
					src='/main/reviews/arrow-left.svg'
					width={64 / 2}
					height={64 / 2}
					alt='arrow-left'
				/>
			</button>
			<button className={styles.rightButton} onClick={nextSlide}>
				<Image
					src='/main/reviews/arrow-right.svg'
					width={64 / 2}
					height={64 / 2}
					alt='arrow-left'
				/>
			</button>
			<div className={styles.circle} />
		</div>
	);
};

export default ButtonTwoCircles;
