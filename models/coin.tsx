/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: rukitu (https://sketchfab.com/rukitu)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/coin-d41feb2c10ed4c06ad4b8134ccaba516
Title: Coin
*/

import React, { useCallback, useRef, useState } from 'react';
import * as THREE from 'three';
import { useGLTF, shaderMaterial } from '@react-three/drei';
import { useFrame, useLoader, extend } from '@react-three/fiber';
import { GLTF } from 'three-stdlib';
import fragment from '@/shaders/coin/fragment.glsl';
import vertex from '@/shaders/coin/vertex.glsl';
import env1 from '@/public/main/masthead/1.webp';
import env2 from '@/public/main/masthead/2.webp';
import env3 from '@/public/main/masthead/3.webp';
import env4 from '@/public/main/masthead/4.webp';
import env5 from '@/public/main/masthead/5.webp';
import env6 from '@/public/main/masthead/6.webp';
import env7 from '@/public/main/masthead/7.webp';
import env8 from '@/public/main/masthead/8.webp';
import envWhite from '@/public/main/masthead/white.webp';
import envBlack from '@/public/main/masthead/black.webp';
import useColorShiftInterval from '@/hooks/useColorShiftInterval';
import { useInteractModel } from '@/hooks/useInteractModel';

type GLTFResult = GLTF & {
	nodes: {
		Cylinder015_Gold_0: THREE.Mesh;
	};
	materials: {
		Gold: THREE.MeshStandardMaterial;
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
		matcapBlack: new THREE.TextureLoader().load(envBlack.src),
	},
	vertex,
	fragment,
);

extend({ ColorShiftMaterial });

export function Coin(props: JSX.IntrinsicElements['group']) {
	const { nodes, materials } = useGLTF('/main/twice-best/coin.glb') as GLTFResult;
	const colorShiftRef = useColorShiftInterval(textures);
	const { interactRef, handlePointerMove } = useInteractModel();

	return (
		<group {...props} dispose={null} ref={interactRef} onPointerMove={handlePointerMove}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cylinder015_Gold_0.geometry}
				material={materials.Gold}
				position={[0, -0.004, -0.004]}
				rotation={[0, 0, -0.037]}
				scale={10}
			>
				<colorShiftMaterial ref={colorShiftRef} />
			</mesh>
		</group>
	);
}

useGLTF.preload('/main/twice-best/coin.glb');
