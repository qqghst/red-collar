//хук для изменения цвета модели при ховере

import { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import { useUnit } from 'effector-react';
import { $hoverStore } from '@/store';
import { useFrame } from '@react-three/fiber';

const useColorShift = (textures: string | any[]) => {
	const isHovering = useUnit($hoverStore);
	const materialRef = useRef<THREE.ShaderMaterial>();
	const [textureIndex, setTextureIndex] = useState(-1);

	useEffect(() => {
		if (isHovering) {
			setTextureIndex((prevIndex) => (prevIndex + 1) % textures.length);
		}
	}, [isHovering, textures.length]);

	useEffect(() => {
		if (materialRef.current) {
			materialRef.current.uniforms.textureIndex.value = textureIndex;
		}
	}, [textureIndex]);

	useFrame((state, delta) => {
		if (materialRef.current && materialRef.current.uniforms) {
			if (isHovering) {
				materialRef.current.uniforms.time.value += delta;
			}
			const targetProgress = isHovering ? 1.6 : -2.0;
			materialRef.current.uniforms.progress.value = THREE.MathUtils.lerp(
				materialRef.current.uniforms.progress.value,
				targetProgress,
				delta * 4,
			);
		}
	});

	return materialRef;
};

export default useColorShift;
