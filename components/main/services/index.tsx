import React from 'react';
import styles from './styles.module.scss';
import Service from './service';
import { data } from './data';
import TitleSection from '@/ui/title-section';

const Services: React.FC = () => {
	return (
		<>
			<TitleSection title='услуги' topPadding='4vw' />
			<section className={styles.services}>
				<div className={styles.services__container}>
					<h2>
						От аналитики и дизайна до разработки и поддержки с вниманием к каждой детали
					</h2>
					<div className={styles.gridСontainer}>
						{data.map((item, index) => (
							<Service key={index} span={item.span} items={item.items} />
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Services;
