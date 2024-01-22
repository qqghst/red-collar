import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { data } from './data';
import TitleSection from '@/ui/title-section';

const Clients: React.FC = () => {
	return (
		<>
			<div className='absolute top-[513.75vw] z-[10000]'>
				<TitleSection title='клиенты' showSpan={false} showDot={false} color='#fafafa' />
			</div>
			<section className={styles.clients}>
				<div className={styles.clients__container}>
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
