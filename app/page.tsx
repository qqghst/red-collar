'use client';
import React from 'react';
import styles from './styles.module.scss';
import Masthead from '@/components/main/masthead';
import dynamic from 'next/dynamic';
import Clients from '@/components/main/clients';
import Reviews from '@/components/main/reviews';
import Socials from '@/components/main/socials';
import Projects from '@/components/main/projects';
import Services from '@/components/main/services';
import TwiceBest from '@/components/main/twice-best';
import Awards from '@/components/main/awards';
import Ratings from '@/components/main/ratings';

const Home: React.FC = () => {
	// const Masthead = dynamic(() => import('@/components/main/masthead'), {
	// 	ssr: false,
	// 	loading: () => <img className='placeholder-masthead' src='/main/masthead/placeholder2.png'></img>,
	// });

	return (
		<main className={styles.main}>
			{/* ГОТОВО */}
			<Masthead />

			<Projects />

			{/* ГОТОВО */}
			<Services />

			{/* ГОТОВО */}
			<TwiceBest />

			{/* ГОТОВО */}
			<Awards />

			{/* ГОТОВО */}
			<Ratings />

			{/* ГОТОВО */}
			<Clients />

			{/* ГОТОВО */}
			<Reviews />

			{/* ГОТОВО */}
			<Socials />
		</main>
	);
};

export default Home;
