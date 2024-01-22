import React from 'react';
import styles from './styles.module.scss';

interface ISocialProps {
	label: string;
	color: string;
	color2: string;
	afterColor: string;
}

const Social: React.FC<ISocialProps> = ({ label, color, color2, afterColor }) => {
	const dynamicStyle = {
		backgroundImage: `linear-gradient(to bottom, ${color}, ${color2}),
        linear-gradient(to bottom, white, white)`,
		'--after-color': afterColor,
	};

	return (
		<h2 className={styles.social} style={dynamicStyle}>
			{label}
		</h2>
	);
};

export default Social;
