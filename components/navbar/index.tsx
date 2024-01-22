'use client';

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import gsap from 'gsap';
import Awards from './awards';
import Logo from './logo';
import Line from './line';
import Menu from './menu';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Navbar: React.FC = () => {
	const tl = useRef<gsap.core.Timeline | null>(null);
	const logoRefs = useRef({
		logoRef: useRef(null),
		labelRef: useRef(null),
	});
	const lineRef = useRef(null);
	const awardsRef = useRef(null);
	const containerRef = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		tl.current = gsap.timeline();

		tl.current.fromTo(
			[logoRefs.current.labelRef.current, lineRef.current, awardsRef.current],
			{ y: 0, opacity: 1 },
			{
				y: -32,
				duration: 3,
				ease: 'power1.out',
				// stagger: 0.2,
				delay: 2,
				opacity: 0,
				scrollTrigger: {
					trigger: lineRef.current,
					start: '64px top',
					end: '128px center',
					// markers: true,
					scrub: 1.5,
				},
			},
		);

		tl.current.fromTo(
			[logoRefs.current.logoRef.current],
			{ x: 0, opacity: 1 },
			{
				x: -64,
				duration: 3,
				ease: 'power3.out',
				stagger: 0.2,
				scrollTrigger: {
					trigger: containerRef.current,
					start: '80px top',
					end: '1000px center',
					// markers: true,
					scrub: 1,
				},
			},
			// '<',
		);
	}, []);

	return (
		<nav className={styles.navbar} ref={containerRef}>
			<div className={styles.navbar__container}>
				<div className={styles.logo}>
					<Logo logoRef={logoRefs.current.logoRef} labelRef={logoRefs.current.labelRef} />
				</div>
				<div ref={lineRef} className={styles.line}>
					<Line />
				</div>
				<div ref={awardsRef} className={styles.awards}>
					<Awards />
				</div>
				<div className={styles.menu}>
					<Menu />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
