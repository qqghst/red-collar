'use client';
import React from 'react';
import styles from './styles.module.scss';
import WhiteBg from './white-bg';
import BlackBg from './black-bg';
import Title from './title';

const Masthead: React.FC = () => {
	return (
		<section className={styles.masthead}>
			<div className={styles.masthead__container}>
				<Title />
				<WhiteBg />
				<BlackBg />
			</div>
		</section>
	);
};

export default Masthead;
