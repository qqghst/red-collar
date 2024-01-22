import React from 'react';
import styles from './styles.module.scss';
import { IButtonCircleProps } from './interface';

const ButtonTest: React.FC<IButtonCircleProps> = ({
	label,
	onMouseEnter,
	onMouseLeave,
	topColor,
	bottomColor,
}) => {
	const dynamicStyles: React.CSSProperties = {
		'--top-color': topColor,
		'--bottom-color': bottomColor,
	} as React.CSSProperties;

	return (
		<div
			className={styles.buttonContainer}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<h2 className={styles.label} style={dynamicStyles}>
				{label}
			</h2>
		</div>
	);
};

export default ButtonTest;
