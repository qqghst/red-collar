import React, { useCallback, useState } from 'react';
import styles from './styles.module.scss';
import Slider from './slider';
import { slideData } from './slider/data';
import { reviewSlideAnimation } from '@/utils/animationMenu';
import { AnimatePresence, motion } from 'framer-motion';
import ButtonTwoCircles from '@/ui/buttons-two-circles';
import Counter from './counter';
import TitleSection from '@/ui/title-section';

const Reviews: React.FC = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const totalSlides = slideData.length;

	const nextSlide = useCallback(() => {
		setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
	}, [totalSlides]);

	const prevSlide = useCallback(() => {
		setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
	}, [totalSlides]);

	return (
		<>
			<div className='absolute top-[562.5vw] z-[10000]'>
				<TitleSection title='отзывы' showSpan={false} showDot={false} color='white' />
			</div>
			<section className={styles.reviews}>
				<div className={styles.reviews__container}>
					<div className={styles.sliderContainer}>
						<div className={styles.sliderAndCounter}>
							<AnimatePresence mode='wait'>
								<motion.div
									key={slideData[currentSlide].id}
									variants={reviewSlideAnimation}
									initial='initial'
									animate='enter'
									exit='exit'
								>
									<Slider
										key={slideData[currentSlide].id}
										src={slideData[currentSlide].src}
										name={slideData[currentSlide].name}
										jobTitle={slideData[currentSlide].jobTitle}
										company={slideData[currentSlide].company}
										review={slideData[currentSlide].review}
									/>
								</motion.div>
							</AnimatePresence>

							<Counter currentSlide={currentSlide} totalSlides={totalSlides} />
						</div>
						<div className={styles.button}>
							<ButtonTwoCircles nextSlide={nextSlide} prevSlide={prevSlide} />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Reviews;
