import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { data } from './data';
import TitleSection from '@/ui/title-section';

const Clients: React.FC = () => {
	return (
		<>
			<TitleSection title='клиенты' topPadding='3200px' />
			<section className={styles.marquee}>
				<div className={styles.marquee__container}>
					<Marquee direction='right' speed={55}>
						{data.map((item, index) => (
							<div className={styles.imgWrapper} key={index}>
								<Image src={item.src} width={260 / 2} height={100} alt={item.alt} />
							</div>
						))}
					</Marquee>
					<Marquee direction='left' speed={60}>
						{data.map((item, index) => (
							<div className={styles.imgWrapper} key={index}>
								<Image src={item.src} width={260 / 2} height={100} alt={item.alt} />
							</div>
						))}
					</Marquee>
					<Marquee direction='right' speed={50}>
						{data.map((item, index) => (
							<div className={styles.imgWrapper} key={index}>
								<Image src={item.src} width={260 / 2} height={100} alt={item.alt} />
							</div>
						))}
					</Marquee>
				</div>
			</section>
		</>
	);
};

export default Clients;
