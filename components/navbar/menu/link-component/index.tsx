import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import { motion, stagger, useAnimate } from 'framer-motion';
import { linksSlide, hoverLinksAnimation2 } from '@/utils/animationMenu';
import { ILinkComponentProps } from './interface';

const LinkComponent: React.FC<ILinkComponentProps> = ({ id, title, href, index }) => {
	const [scope, animate] = useAnimate();
	const handleLinkHover = hoverLinksAnimation2(animate, stagger);
	const letters = title.split('');

	return (
		<div>
			<motion.div
				className={styles.link}
				custom={index}
				variants={linksSlide}
				initial='initial'
				animate='enter'
				exit='exit'
			>
				<Link href={href}>
					<div ref={scope}>
						<div onMouseEnter={handleLinkHover}>
							<span className={styles.letterContainer} aria-hidden>
								{letters.map((letter, index) => (
									<h2
										data-letter={letter}
										className={`${styles.letter} letter`}
										key={`${letter}-${index}`}
									>
										{letter}
									</h2>
								))}
							</span>
						</div>
					</div>
				</Link>
			</motion.div>
		</div>
	);
};

export default LinkComponent;
