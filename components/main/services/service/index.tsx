import React from 'react';
import styles from './styles.module.scss';
import { IServiceProps } from './interface';

const Service: React.FC<IServiceProps> = ({ span, items }) => {
	return (
		<div className={styles.service}>
			<h6>{span}</h6>
			<ul>
				{items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default Service;
