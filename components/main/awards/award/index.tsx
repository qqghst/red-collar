import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { IAwardsProps } from './interface';
import TitleSection from '@/ui/title-section';

const Award: React.FC<IAwardsProps> = ({ number, image, label }) => {
	return (
		<div className={styles.award}>
			<div className={styles.number}>
				<h2>{number}</h2>
				<Image src={image} width={28 / 2} height={52 / 2} alt='123' />
			</div>
			<span>{label}</span>
		</div>
	);
};

export default Award;
