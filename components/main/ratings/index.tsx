import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Rating from './rating';
import TitleSection from '@/ui/title-section';

const Ratings = () => {
	return (
		<>
			<TitleSection title='рейтинги' color='white' topPadding='460.5vw' />
			<section className={styles.ratings}>
				<div className={styles.ratings__container}>
					<p className={styles.pp}>
						Берем сложные премии в веб-разработке, открыто подтверждаем экспертизу и
						занимаем верхние строчки рейтингов
					</p>
					<div className={styles.gridСontainer}>
						<Rating
							number='1'
							image='/ratings/thumb-up.svg'
							label='Рейтинг рунета'
							description='UX-дизайн для крупнейших компаний'
							width={42 / 2}
						/>
						<Rating
							number='2'
							image='/ratings/thumb-up.svg'
							label='Рейтинг рунета'
							description='digital-продукты для IT и телекома в России'
							width={42 / 2}
						/>
						<Rating
							number='3'
							image='/ratings/thumb-up.svg'
							label='Рейтинг рунета'
							description='место среди разработчиков проектов для финтеха'
							width={42 / 2}
						/>
						<Rating
							number='4'
							image='/ratings/zametka.svg'
							// label='Рейтинг рунета'
							description='место в рейтинге дизайн-студий в digital'
							width={300 / 2}
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Ratings;
