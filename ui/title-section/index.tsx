import React from 'react';
import styles from './styles.module.scss';
import { ITitleSection } from './interface';

const TitleSection: React.FC<ITitleSection> = ({ title, showSpan, showDot, color }) => {
	const dynamicStyle = {
		color: color,
	};
	return (
		<div className={styles.container}>
			<h3 className={`${showDot ? styles.showDot : ''}`} style={dynamicStyle}>
				{title}
			</h3>
			{showSpan && <span className='text-white'>2021</span>}
		</div>
	);
};

export default TitleSection;
