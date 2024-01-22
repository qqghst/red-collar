import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { ISlideProps } from './interface';

const Slider: React.FC<ISlideProps> = ({ src, name, jobTitle, company, review }) => {
	return (
		<div className={styles.slider}>
			<div className={styles.person}>
				<Image
					src={src}
					width={168 / 2}
					height={168 / 2}
					alt='photo'
					className='rounded-full'
				/>
				<div>
					<span>{name}</span>
					<p>{jobTitle}</p>
					<span>{company}</span>
				</div>
			</div>
			<div className={styles.review}>
				<p>{review}</p>
			</div>
		</div>
	);
};

export default Slider;
