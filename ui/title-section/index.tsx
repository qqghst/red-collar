import React from 'react';
import styles from './styles.module.scss';
import { ITitleSectionProps } from './interface';

const TitleSection: React.FC<ITitleSectionProps> = ({
	title,
	topPadding,
	color,
	showDot = false,
	subtitle,
}) => {
	const dynamicStyles = {
		'--top-padding': topPadding,
		color: color,
		'--subtitle-text': `"${subtitle}"`,
	} as React.CSSProperties;

	return (
		<>
			<h3
				className={`${styles.title} ${showDot ? styles.showDot : ''} ${
					subtitle ? styles.showSubtitle : ''
				}`}
				style={dynamicStyles}
			>
				{title}
			</h3>
		</>
	);
};

export default TitleSection;
