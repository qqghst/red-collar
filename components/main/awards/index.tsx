import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Award from './award';

import { data } from './data';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import TitleSection from '@/ui/title-section';

const Awards: React.FC = () => {
	return (
		<>
			<div className='absolute top-[300px] z-[10000]'>
				<TitleSection title='награды' showSpan={false} showDot={false} color='#fafafa' />
			</div>
			<section className={styles.awards}>
				<div className={styles.awards__container}>
					{data.map((item, index) => (
						<Award
							key={index}
							number={item.number}
							image={item.image}
							label={item.label}
						/>
					))}
				</div>
			</section>
		</>
	);
};

export default Awards;
