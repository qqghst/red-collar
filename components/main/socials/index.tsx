import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import Social from './social';
import SwiperComponent from './swiper';
import TitleSection from '@/ui/title-section';
import { dataSocial } from './social/data';

const Socials: React.FC = () => {
	return (
		<>
			<TitleSection title='соцсети' color='white' topPadding='608.75vw' />
			<section className={styles.follow}>
				<div className={styles.follow__container}>
					<div className={styles.socials}>
						{dataSocial.map((item, index) => (
							<Social
								key={index}
								label={item.label}
								color={item.color}
								color2={item.color}
								afterColor={item.color}
							/>
						))}
					</div>
					<div className={styles.swiper}>
						<SwiperComponent />
					</div>
				</div>
			</section>
		</>
	);
};

export default Socials;
