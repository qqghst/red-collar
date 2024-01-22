import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import { dataSwiper } from './data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, FreeMode } from 'swiper/modules';

const SwiperComponent: React.FC = () => {
	const swiperRef = useRef<any>(null);

	const [currentAngle, setCurrentAngle] = useState(0);
	const [isDragging, setIsDragging] = useState(false);
	const moveTimeout = useRef(null);

	const handleTouchMove = useCallback((swiper: { touches: { diff: number } }) => {
		const angle = swiper.touches.diff / 64;
		setCurrentAngle(angle);
		setIsDragging(true);

		if (moveTimeout.current) {
			clearTimeout(moveTimeout.current);
		}

		moveTimeout.current = setTimeout(() => {
			setCurrentAngle(0);
			setIsDragging(false);
		}, 150) as any;
	}, []);

	const handleTouchEnd = useCallback((swiper: any) => {
		setCurrentAngle(0);
		setIsDragging(false);
	}, []);

	useEffect(() => {
		const swiperInstance = swiperRef.current.swiper;

		if (swiperInstance) {
			swiperInstance.on('touchMove', handleTouchMove);
			swiperInstance.on('touchEnd', handleTouchEnd);

			return () => {
				swiperInstance.off('touchMove', handleTouchMove);
				swiperInstance.off('touchEnd', handleTouchEnd);
				if (moveTimeout.current) {
					clearTimeout(moveTimeout.current);
				}
			};
		}
	}, [handleTouchMove, handleTouchEnd]);

	return (
		<Swiper
			ref={swiperRef}
			spaceBetween={48}
			slidesPerView={4.2}
			centeredSlides={false}
			freeMode={true}
			speed={1200}
			parallax={true}
			modules={[EffectCoverflow, FreeMode]}
			effect={'coverflow'}
			coverflowEffect={{
				rotate: 0,
				stretch: 0,
				depth: 0,
				modifier: 0,
				slideShadows: false,
			}}
		>
			{dataSwiper.map((item, index) => (
				<SwiperSlide key={item.id}>
					<Image
						src={item.image}
						alt={item.text}
						width={300}
						height={570}
						style={{
							cursor: 'grab',
							transform: `rotateY(${currentAngle}deg) scale(${
								isDragging ? 0.95 : 1
							})`,
							transition: 'transform 0.4s ease-out',
						}}
					/>
					<p>{item.text}</p>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default SwiperComponent;
