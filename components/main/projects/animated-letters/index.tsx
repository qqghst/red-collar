import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import { motion, stagger, useAnimate } from 'framer-motion';
import { linksSlide, hoverLinksAnimation2 } from '@/utils/animationMenu';

interface IAnimatedLettersProps {
	letters: string;
	onMouseEnter: () => void;
	onMouseLeave: () => void;
}

const AnimatedLetters: React.FC<IAnimatedLettersProps> = ({
	letters,
	onMouseEnter,
	onMouseLeave,
}) => {
	const [scope, animate] = useAnimate();
	const handleLinkHover = hoverLinksAnimation2(animate, stagger);
	const word = letters.split('');

	return (
		<div ref={scope} className='pb-[64px]'>
			<button
				onMouseEnter={() => {
					onMouseEnter();
					handleLinkHover();
				}}
				onMouseLeave={onMouseLeave}
			>
				<div className={styles.container}>
					<span className='sr-only'>Motion</span>
					<span className={styles.letterContainer} aria-hidden>
						{word.map((item, index) => (
							<h1
								data-letter={item}
								className={`${styles.letter} letter`}
								key={`${item}-${index}`}
							>
								{item}
							</h1>
						))}
					</span>
				</div>
			</button>
		</div>
	);
};

export default AnimatedLetters;
