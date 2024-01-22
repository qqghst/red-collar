import React, { Suspense } from 'react';
import styles from './styles.module.scss';
import LinkComponent from '../link-component';
import SocialMediaIcon from '@/ui/social-media-icon';
import Contacts from '@/ui/contacts';
import { data, links } from './data';
import { menuSlide } from '@/utils/animationMenu';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { Coin } from '@/models/navbar/menu/coin';

const MenuContent: React.FC = () => {
	return (
		<motion.div
			className={styles.menu}
			variants={menuSlide}
			initial='initial'
			animate='enter'
			exit='exit'
		>
			<div className={styles.body}>
				<div className={styles.nav}>
					<div className={styles.left}>
						<div className={styles.canvasContainer}>
							<Canvas>
								<ambientLight />
								<Environment preset='studio' />
								<Suspense fallback={null}>
									<Coin />
								</Suspense>
							</Canvas>
						</div>
						<div className={styles.contactsContainer}>
							<Contacts color='#fafafa' />
						</div>
					</div>
					<div className={styles.right}>
						<div className={styles.linkComponent}>
							{data.map((item, index) => (
								<LinkComponent
									key={index}
									id={item.id}
									title={item.title}
									href={item.href}
									index={index}
								/>
							))}
						</div>
						<div className={styles.socialComponent}>
							{links.map((icon, index) => (
								<SocialMediaIcon
									key={index}
									src={icon.svg}
									alt={icon.alt}
									filter='invert(0%) sepia(0%) saturate(7489%) hue-rotate(297deg) brightness(96%) contrast(104%)'
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default MenuContent;
