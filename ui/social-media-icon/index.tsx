import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { ISocialMediaProps } from './interface';

const SocialMediaIcon: React.FC<ISocialMediaProps> = ({ src, alt, filter }) => {
	const dynamicStyles = {
		filter: filter,
	};

	return (
		<div className={styles.imageContainer}>
			<Image src={src} width={32 / 2} height={32 / 2} alt={alt} style={dynamicStyles} />
		</div>
	);
};

export default SocialMediaIcon;


