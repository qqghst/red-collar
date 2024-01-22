'use client';

import React, { Suspense, useState } from 'react';
import styles from './styles.module.scss';
import BigText from './big-text';
import Contacts from '@/ui/contacts';
import SocialMediaIcon from '@/ui/social-media-icon';
import { hoverMannequin, resetHoverMannequin } from '@/store';
import { links } from '../navbar/menu/menu-content/data';
import { SkullFooter } from '@/models/footer/scull';
import { HeadFooter } from '@/models/footer/head';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import TitleSection from '@/ui/title-section';

const Footer: React.FC = () => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
		hoverMannequin();
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
		resetHoverMannequin();
	};

	return (
		<>
			<TitleSection title='контакты' color='black' topPadding='10970px' />
			<footer className={styles.footer}>
				<div className={styles.footer__container}>
					<div className={styles.bigText}>
						<BigText
							handleMouseEnter={handleMouseEnter}
							handleMouseLeave={handleMouseLeave}
						/>
					</div>
					<div className={styles.contacts}>
						<div className='pr-[20vw]'>
							<Contacts color='#0d0c0c' />
						</div>

						{links.map((icon, index) => (
							<SocialMediaIcon
								key={index}
								src={icon.svg}
								alt={icon.alt}
								filter='invert(100%) sepia(42%) saturate(2%) hue-rotate(240deg) brightness(107%) contrast(101%)'
							/>
						))}
					</div>
					<div className={styles.canvasContainer}>
						<Canvas>
							<ambientLight />
							<Environment preset='studio' />
							<Suspense fallback={null}>
								<HeadFooter visible={!isHovered} />
								<SkullFooter visible={isHovered} />
							</Suspense>
						</Canvas>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
