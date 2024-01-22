import React from 'react';
import styles from './styles.module.scss';
import { ICounterProps } from './interface';

const Counter: React.FC<ICounterProps> = ({ currentSlide, totalSlides }) => {
	return (
		<div className={styles.counter}>
			<span>{currentSlide + 1}</span>
			<hr />
			<span>{totalSlides}</span>
		</div>
	);
};

export default Counter;
