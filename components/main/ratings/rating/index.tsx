import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { IRatingProps } from './interface';

const Rating: React.FC<IRatingProps> = ({ number, image, label, description, width }) => {
	return (
		<div className={styles.rating}>
			<h1>{number}</h1>
			<div className={styles.container}>
				<div className={styles.imgSpan}>
					<Image src={image} alt='123' width={width} height={62 / 2} />
					<span>{label}</span>
				</div>
				<p className={styles.p}>{description}</p>
			</div>
		</div>
	);
};

export default Rating;
