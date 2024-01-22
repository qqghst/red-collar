import React from 'react';
import styles from './styles.module.scss';
import { ITitleSectionProps } from './interface';

const TitleSection: React.FC<ITitleSectionProps> = ({ title, topPadding }) => {
	const dynamicStyles = {
		'--top-padding': topPadding,
	} as React.CSSProperties;
    
	return (
		<>
			<h3 className={styles.title} style={dynamicStyles}>
				{title}
			</h3>
		</>
	);
};

export default TitleSection;
