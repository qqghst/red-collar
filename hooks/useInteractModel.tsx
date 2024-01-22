//хук для движения моделей курсором (используется в navbar, twice-best)

import { useCallback, useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

export function useInteractModel() {
	const interactRef = useRef<THREE.Group>(null);
	const [rotation, setRotation] = useState({ x: 0, y: 0 });
	const rotationSpeed = Math.PI / 4;
	const sensitivity = 3;
	const damping = 0.99;

	const handlePointerMove = useCallback(
		(event: { movementY: number; movementX: number }) => {
			const deltaX = (event.movementY / window.innerHeight) * Math.PI * 3 * sensitivity;
			const deltaY = (event.movementX / window.innerWidth) * Math.PI * 3 * sensitivity;

			setRotation((prevRotation) => ({
				x: prevRotation.x + deltaX,
				y: prevRotation.y + deltaY,
			}));
		},
		[sensitivity],
	);

	useFrame((state, delta) => {
		if (interactRef.current) {
			setRotation((prevRotation) => ({
				x: prevRotation.x * damping,
				y: prevRotation.y * damping,
			}));
			interactRef.current.rotation.x += (rotation.x + rotationSpeed) * delta;
			interactRef.current.rotation.y += (rotation.y + rotationSpeed) * delta;
		}
	});

	return { interactRef, handlePointerMove };
}
