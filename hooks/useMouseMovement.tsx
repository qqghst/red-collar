//хук для движения 3д модели за курсором
import { useEffect } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

const useMouseMovement = () => {
	const options = {
		damping: 50,
	};

	const mouse = {
		x: useSpring(useMotionValue(0), options),
		y: useSpring(useMotionValue(0), options),
	};

	const handleMouseMove = (event: MouseEvent) => {
		const { innerWidth, innerHeight } = window;
		const { clientX, clientY } = event;
		const x = -0.5 + clientX / innerWidth;
		const y = -0.5 + clientY / innerHeight;
		mouse.x.set(x);
		mouse.y.set(y);
	};
	useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	return mouse;
};

export default useMouseMovement;
