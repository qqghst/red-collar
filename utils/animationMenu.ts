//анимация для открытия меню
export const menuSlide = {
	initial: { x: 'calc(100% + 100px)' },
	enter: { x: '0', transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
	exit: { x: 'calc(100% + 100px)', transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
};

//анимация для появляние линков при открытии меню
export const linksSlide = {
	initial: { x: 160, opacity: 0, rotateX: 45 },
	enter: (i: number) => ({
		x: 0,
		opacity: 1,
		rotateX: 0,
		transition: {
			duration: 0.4,
			ease: [0.61, 1, 0.88, 1],
			delay: 0.01 + i * 0.1,
			opacity: { duration: 0.3, delay: 0.3 + i * 0.1 },
		},
	}),
	exit: (i: number) => ({
		x: 160,
		opacity: 0,
		rotateX: 45,
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
	}),
};

//анимация при хавере на линки
export const hoverLinksAnimation2 = (animate: any, stagger: any) => {
	return () => {
		animate([
			['.letter', { y: -100 }, { duration: 0.3, delay: stagger(0.03) }],
			['.letter', { y: 0 }, { duration: 0.00001, at: 0.5 }],
		]);
	};
};

//анимация для смены слайдов в секции review
export const reviewSlideAnimation = {
	initial: { x: 300, opacity: 0 },
	enter: { x: 0, opacity: 1, transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
	exit: { x: -300, opacity: 0, transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
};
