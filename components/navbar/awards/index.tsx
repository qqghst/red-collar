import React, { useCallback, useEffect, useRef } from 'react';
import { awardsData } from './data';
import gsap from 'gsap';
import Image from 'next/image';
import styles from './styles.module.scss';

const Awards: React.FC = () => {
	const ulRef = useRef<HTMLUListElement | null>(null);

	const handleMouseEnter = useCallback((e: any) => {
		const item = e.target.closest('li');
		if (!item) return;

		const imgContainer = item.querySelector(`.${styles.iconHover}`);
		const img = imgContainer?.querySelector('img');
		if (!imgContainer || !img) return;

		const initialOffsetX = 160;
		const rect = imgContainer.getBoundingClientRect();
		const offsetX = e.clientX - rect.left - img.height / 2 - initialOffsetX;
		const offsetY = e.clientY - rect.top - img.height / 2;

		gsap.set(img, { x: offsetX, y: offsetY });
		gsap.to(imgContainer, { autoAlpha: 1, duration: 2, ease: 'power4.out' });
	}, []);

	const handleMouseMove = useCallback((e: any) => {
		const item = e.target.closest('li');
		if (!item) return;

		const imgContainer = item.querySelector(`.${styles.iconHover}`);
		const img = imgContainer?.querySelector('img');
		if (!imgContainer || !img) return;

		const rect = imgContainer.getBoundingClientRect();
		const offsetX = e.clientX - rect.left - img.width / 2;
		const offsetY = e.clientY - rect.top - img.height / 2;

		gsap.to(img, { x: offsetX, y: offsetY, duration: 6, ease: 'power4.out' });
	}, []);

	const handleMouseLeave = useCallback((e: any) => {
		const imgContainer = e.target.querySelector(`.${styles.iconHover}`);
		if (imgContainer) {
			gsap.to(imgContainer, { autoAlpha: 0, duration: 2, ease: 'power4.out' });
		}
	}, []);

	useEffect(() => {
		const ulElement = ulRef.current;
		if (ulElement) {
			ulElement.addEventListener('mouseenter', handleMouseEnter, true);
			ulElement.addEventListener('mousemove', handleMouseMove, true);
			ulElement.addEventListener('mouseleave', handleMouseLeave, true);
		}

		return () => {
			if (ulElement) {
				ulElement.removeEventListener('mouseenter', handleMouseEnter, true);
				ulElement.removeEventListener('mousemove', handleMouseMove, true);
				ulElement.removeEventListener('mouseleave', handleMouseLeave, true);
			}
		};
	}, [handleMouseEnter, handleMouseMove, handleMouseLeave]);

	return (
		<div className={styles.awards}>
			<p>эти забавные значки говорят, что мы лидеры по количеству наград в стране</p>
			<ul ref={ulRef}>
				{awardsData.map((item, index) => (
					<li key={index}>
						<div className={styles.iconAndText}>
							<Image src={item.icon} alt={item.alt} width={36 / 2} height={36 / 2} />

							<p>{item.amount}</p>
						</div>
						<div className={styles.iconHover}>
							<Image src={item.hoverIcon} alt={item.alt} width={100} height={100} />
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Awards;
