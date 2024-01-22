import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Award from './award';
import TitleSection from '@/ui/title-section';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Awards: React.FC = () => {
	const sectionRef = useRef<HTMLDivElement>(null);

	// useEffect(() => {
	// 	gsap.registerPlugin(ScrollTrigger);

	// 	const tl = gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: sectionRef.current,
	// 			start: '+=100px bottom',
	// 			end: 'center center',
	// 			scrub: 1,
	// 			markers: true,
	// 		},
	// 	});

	// 	tl.fromTo(
	// 		sectionRef.current,
	// 		{
	// 			y: 160,
	// 			opacity: 0,
	// 		},
	// 		{
	// 			y: 0,
	// 			opacity: 1,
	// 			duration: 0.4,
	// 			ease: 'power3.out',
	// 		},
	// 	);

	// 	return () => {
	// 		if (tl.scrollTrigger) {
	// 			tl.scrollTrigger.kill();
	// 		}
	// 	};
	// }, []);
	return (
		<>
			<TitleSection title='награды' color='white' topPadding='419.875vw' />
			<section className={styles.awards} ref={sectionRef}>
				<div className={styles.awards__container}>
					<Award number='08' image='/awards/webby-awards.svg' label='Webby Awards' />

					<Award
						number='54'
						image='/awards/css-design-awards.svg'
						label='CSS Design Awards'
					/>

					<Award number='51' image='/awards/awwwards.svg' label='Awwwards' />

					<Award number='13' image='/awards/the-fwa.svg' label='The FWA' />

					<Award
						number='07'
						image='/awards/reddot-design.svg'
						label='Reddot Design Awards'
					/>

					<Award
						number='04'
						image='/awards/european-design.svg'
						label='European Design Awards'
					/>

					<Award number='40' image='/awards/gold-site.svg' label='Золотой сайт' />

					<Award number='51' image='/awards/rating-runeta.svg' label='Рейтинг рунета' />

					<Award number='50' image='/awards/taglain.svg' label='Тэглайн' />
				</div>
			</section>
		</>
	);
};

export default Awards;
