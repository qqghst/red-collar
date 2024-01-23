import React, { useState } from 'react';
import styles from './styles.module.scss';
import { motion, stagger, useAnimate } from 'framer-motion';
import { hoverLinksAnimation2 } from '@/utils/animationMenu';
import AnimatedLetters from '../animated-letters';

interface IProjectProps {
	description: string;
	subtitle: string;
	letters: string;
	onMouseEnter: () => void;
	onMouseLeave: () => void;
}

const Project: React.FC<IProjectProps> = ({ description, subtitle, letters, onMouseEnter, onMouseLeave }) => {
	return (
		<motion.div className={styles.project}>
			<div className={styles.project__container}>
				<span className=''>{subtitle}</span>
				<div className=''>
					<AnimatedLetters letters={letters} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
					<hr />
				</div>
				<span>{description}</span>
			</div>
		</motion.div>
	);
};

export default React.memo(Project);
