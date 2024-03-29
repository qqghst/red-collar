/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: deri_99 (https://sketchfab.com/deri_99)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/face-3f5d5c94a7b24c38a7a10473a6f2d11a
Title: Face
*/

import * as THREE from 'three';
import React from 'react';
import { useGLTF, shaderMaterial } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { extend } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';
import useMouseMovement from '@/hooks/useMouseMovement';
import fragment from '@/shaders/face/fragment.glsl';
import vertex from '@/shaders/face/vertex.glsl';
import env1 from '@/public/main/masthead/1.webp';
import env2 from '@/public/main/masthead/2.webp';
import env3 from '@/public/main/masthead/3.webp';
import env4 from '@/public/main/masthead/4.webp';
import env5 from '@/public/main/masthead/5.webp';
import env6 from '@/public/main/masthead/6.webp';
import env7 from '@/public/main/masthead/7.webp';
import env8 from '@/public/main/masthead/8.webp';
import envWhite from '@/public/main/masthead/white.webp';
import useColorShift from '@/hooks/useColorShift';

type GLTFResult = GLTF & {
	nodes: {
		Object_5: THREE.Mesh;
	};
	materials: {
		material: THREE.MeshStandardMaterial;
	};
};

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

export default function FaceModel(props: JSX.IntrinsicElements['group']) {
	const { nodes, materials } = useGLTF('/main/masthead/face.glb') as GLTFResult;

	const mouseMovement = useMouseMovement();
	const colorShiftRef = useColorShift(textures);

	return (
		<>
			<motion.group {...(props as any)} dispose={null} rotation-y={mouseMovement.x} rotation-x={mouseMovement.y}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_5.geometry}
					material={materials.material}
					position={[0.009, -2.4, 0.325]}
					scale={2.4}
				>
					<colorShiftMaterial ref={colorShiftRef} />
				</mesh>
			</motion.group>
		</>
	);
}

useGLTF.preload('/main/masthead/face.glb');
