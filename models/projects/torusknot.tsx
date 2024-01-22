import React from 'react';
import useModelRotation from '@/hooks/useModelRotation';
import useColorShift from '@/hooks/useColorShift';
import fragment from '@/shaders/face/fragment.glsl';
import vertex from '@/shaders/face/vertex.glsl';
import env1 from '@/public/main/projects/1.webp';
import env2 from '@/public/main/projects/2.webp';
import env3 from '@/public/main/projects/3.webp';
import env4 from '@/public/main/projects/4.webp';
import env5 from '@/public/main/projects/5.webp';
import env6 from '@/public/main/projects/6.webp';
import env7 from '@/public/main/projects/7.webp';
import env8 from '@/public/main/projects/8.webp';
import envWhite from '@/public/main/projects/white.webp';
import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';

const textures = [env1, env2, env3, env4, env5, env6, env7, env8];

const ColorShiftMaterial = shaderMaterial(
	{
		time: 1,
		progress: -2.0,
		resolution: new THREE.Vector4(),
		uvRate1: new THREE.Vector2(1, 1),
		textureIndex: 0,
		matcap: new THREE.TextureLoader().load(textures[0].src),
		matcap1: new THREE.TextureLoader().load(env1.src),
		matcap2: new THREE.TextureLoader().load(env2.src),
		matcap3: new THREE.TextureLoader().load(env3.src),
		matcap4: new THREE.TextureLoader().load(env4.src),
		matcap5: new THREE.TextureLoader().load(env5.src),
		matcap6: new THREE.TextureLoader().load(env6.src),
		matcap7: new THREE.TextureLoader().load(env7.src),
		matcap8: new THREE.TextureLoader().load(env8.src),
		matcapWhite: new THREE.TextureLoader().load(envWhite.src),
	},
	vertex,
	fragment,
);

extend({ ColorShiftMaterial });

const TorusKnot: React.FC<ProjectModelTypes> = ({ visible, isAnimating }) => {
	const modelRotationRef = useModelRotation(isAnimating);
	const colorShiftRef = useColorShift(textures);

	return (
		<mesh visible={visible || isAnimating} ref={modelRotationRef}>
			<torusKnotGeometry args={[1, 0.4, 100, 16]} />
			<colorShiftMaterial ref={colorShiftRef} />
		</mesh>
	);
};

export default TorusKnot;
