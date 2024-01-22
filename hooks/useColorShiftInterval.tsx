//хук для изменения текстуры модели каждые 4 секунды (используется в twice-best и navbar)

import { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const useColorShiftInterval = (textures: string | any[]) => {
	const materialRef = useRef<THREE.ShaderMaterial>();
	const [textureIndex, setTextureIndex] = useState(0);
	const [progress, setProgress] = useState(-2.0); //вместо isHovering

	useEffect(() => {
		const interval = setInterval(() => {
			setTextureIndex((prevIndex) => (prevIndex + 1) % textures.length);
			setProgress(-2.0);
		}, 4000);

		return () => clearInterval(interval);
	}, [textures.length]);

	useEffect(() => {
		if (materialRef.current) {
			materialRef.current.uniforms.textureIndex.value = textureIndex;
		}
	}, [textureIndex]);

	useFrame((state, delta) => {
		if (materialRef.current && materialRef.current.uniforms) {
			materialRef.current.uniforms.time.value += delta;
			const targetProgress = 1.6;
			if (progress < targetProgress) {
				setProgress((prevProgress) => prevProgress + delta * 4);
			}
			materialRef.current.uniforms.progress.value = progress;
		}
	});

	return materialRef;
};

export default useColorShiftInterval;
