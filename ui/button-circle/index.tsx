import React from 'react';
import styles from './styles.module.scss';
import { IButtonCircleProps } from './interface';

const ButtonCircle: React.FC<IButtonCircleProps> = ({
	label,
	onMouseEnter,
	onMouseLeave,
	topColor,
	bottomColor,
	showCircle = true,
}) => {
	const dynamicStyles: React.CSSProperties = {
		'--top-color': topColor,
		'--bottom-color': bottomColor,
	} as React.CSSProperties;

	return (
		<div className={styles.buttonContainer}>
			<div
				className={showCircle ? styles.circle : `${styles.circle} ${styles.circleHidden}`}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			></div>
			<h2 className={styles.label} style={dynamicStyles}>
				{label}
			</h2>
		</div>
	);
};

export default ButtonCircle;
