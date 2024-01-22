import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { ILogoProps } from './interface';

const Logo = React.forwardRef<HTMLDivElement, ILogoProps>(({ logoRef, labelRef }, ref) => {
	return (
		<div className={styles.logo} ref={ref}>
			<Image
				src='/navbar/logo/logo.svg'
				alt='logo'
				width={60 / 2}
				height={28 / 2}
				ref={logoRef}
			/>
			<span ref={labelRef}>red collar</span>
		</div>
	);
});

Logo.displayName = 'Logo';

export default Logo;
