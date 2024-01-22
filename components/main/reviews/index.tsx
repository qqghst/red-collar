import React, { useState } from 'react';
import styles from './styles.module.scss';
import Slider from './slider';
import { slideData } from './slider/data';
import { reviewSlideAnimation } from '@/utils/animationMenu';
import { AnimatePresence, motion } from 'framer-motion';
import ButtonsCircleTransform from '@/ui/buttons-circle-transform';
import TitleSection from '@/ui/title-section';
import Counter from './counter';

const Reviews: React.FC = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const totalSlides = slideData.length;

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
	};

	return (
		<section className={styles.reviews}>
			<TitleSection title='отзывы' topPadding='4000px' />
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
						<ButtonsCircleTransform nextSlide={nextSlide} prevSlide={prevSlide} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Reviews;
