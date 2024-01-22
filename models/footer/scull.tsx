/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: martinjario (https://sketchfab.com/martinjario)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/skull-downloadable-1a9db900738d44298b0bc59f68123393
Title: Skull downloadable
*/

import * as THREE from 'three';
import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, shaderMaterial } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { extend, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';
import { useUnit } from 'effector-react';
import { $hoverStore } from '@/store';
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
		Object_2: THREE.Mesh;
	};
	materials: {
		defaultMat: THREE.MeshStandardMaterial;
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

export function SkullFooter({
	visible,
	...props
}: { visible: boolean } & JSX.IntrinsicElements['group']) {
	const { nodes, materials } = useGLTF('/footer/skull.glb') as GLTFResult;
	const colorShiftRef = useColorShift(textures);
	const mouse = useMouseMovement();

	return (
		<motion.group {...(props as any)} dispose={null} rotation-y={mouse.x} rotation-x={mouse.y}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_2.geometry}
				material={materials.defaultMat}
				rotation={[-Math.PI / 2, 0, 0]}
				visible={visible}
				scale={2.4}
				position={[0, 0.6, 0]}
			>
				<colorShiftMaterial ref={colorShiftRef} />
			</mesh>
		</motion.group>
	);
}

useGLTF.preload('/footer/skull.glb');
