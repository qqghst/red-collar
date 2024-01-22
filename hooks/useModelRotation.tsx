import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';

const useModelRotation = (isAnimating: boolean, onAnimationComplete?: () => void) => {
	const ref = useRef<THREE.Mesh>(null);
	const initialRotationY = useRef(0);
	const animationProgress = useRef(0);
	const targetRotationY = Math.PI;

	useEffect(() => {
		if (isAnimating && ref.current) {
			initialRotationY.current = ref.current.rotation.y;
			animationProgress.current = 0;
		}
	}, [isAnimating]);

	useFrame((state, delta) => {
		if (isAnimating && ref.current) {
			animationProgress.current += delta;
			const lerpFactor = Math.min(animationProgress.current / 0.4, 1);
			ref.current.rotation.y = MathUtils.lerp(
				initialRotationY.current,
				initialRotationY.current + targetRotationY,
				lerpFactor,
			);

			if (lerpFactor >= 1 && onAnimationComplete) {
				onAnimationComplete();
			}
		}
	});

	return ref;
};

export default useModelRotation;
