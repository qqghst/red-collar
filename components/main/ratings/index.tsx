import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Rating from './rating';

import { data } from './data';
import TitleSection from '@/ui/title-section';

const Ratings = () => {
	return (
		<>
			<div className='absolute top-[460.625vw] z-[10000]'>
				<TitleSection title='рейтинг' showSpan={false} showDot={false} color='#fafafa' />
			</div>

			<section className={styles.ratings}>
				<div className={styles.ratings__container}>
					<p className={styles.pp}>
						Берем сложные премии в веб-разработке, открыто подтверждаем экспертизу и
						занимаем верхние строчки рейтингов
					</p>
					<div className={styles.gridСontainer}>
						{data.map((item, index) => (
							<Rating
								key={item.id}
								number={item.number.toString()}
								image={item.image}
								label={item.label}
								description={item.description}
								width={item.width}
							/>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Ratings;
