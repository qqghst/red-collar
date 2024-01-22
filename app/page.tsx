'use client';
import React, { useState } from 'react';
import styles from './styles.module.scss';
// import Masthead from '@/components/main/masthead';
import dynamic from 'next/dynamic';
import { Leva } from 'leva';
import Clients from '@/components/main/clients';
import Reviews from '@/components/main/reviews';
import Socials from '@/components/main/socials';
import Projects from '@/components/main/projects';
import Services from '@/components/main/services';
import TwiceBest from '@/components/main/twice-best';
import Awards from '@/components/main/awards';
import Ratings from '@/components/main/ratings';
import ButtonCircle from '@/ui/button-circle';

const Home: React.FC = () => {
	const Masthead = dynamic(() => import('@/components/main/masthead'), {
		ssr: false,
		loading: () => <img src='main/masthead/placeholder.png'></img>,
	});

	return (
		<main className={styles.main}>
			<Leva />
			<Masthead />
			<Projects />
			<Services />
			<TwiceBest />
			<Awards />
			<Ratings />
			<Clients />
			<Reviews />
			<Socials />
		</main>
	);
};

export default Home;
