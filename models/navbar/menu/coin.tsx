import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useFrame } from '@react-three/fiber';

type GLTFResult = GLTF & {
	nodes: {
		Cylinder015_Gold_0: THREE.Mesh;
	};
	materials: {
		Gold: THREE.MeshStandardMaterial;
	};
};

export function Coin(props: JSX.IntrinsicElements['group']) {
	const { nodes, materials } = useGLTF('/navbar/menu/coin.glb') as GLTFResult;
	const ref = useRef<THREE.Group>(null);
	const defaultRotationSpeed = Math.PI / 4;
	const sensitivity = 3;
	const [rotation, setRotation] = useState({ x: 0, y: 0 });

	const handlePointerMove = (event: { movementY: number; movementX: number; }) => {
		const deltaX = (event.movementY / window.innerHeight) * Math.PI * 2 * sensitivity;
		const deltaY = (event.movementX / window.innerWidth) * Math.PI * 2 * sensitivity;

		setRotation((prevRotation) => ({
			x: prevRotation.x + deltaX,
			y: prevRotation.y + deltaY,
		}));
	};

	useFrame((state, delta) => {
		if (ref.current) {
			ref.current.rotation.x += (rotation.x + defaultRotationSpeed) * delta;
			ref.current.rotation.y += (rotation.y + defaultRotationSpeed) * delta;
		}
	});

	return (
		<group {...props} dispose={null} ref={ref} onPointerMove={handlePointerMove}>
			<group position={[0, -0.004, -0.004]} rotation={[0, 0, -0.037]}>
				<group rotation={[Math.PI / 2, 0, 0]} scale={0.10}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cylinder015_Gold_0.geometry}
						material={materials.Gold}
						rotation={[-Math.PI / 2, 0, 0]}
						scale={100}>
								<meshStandardMaterial color='black'/>
						</mesh>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload('/navbar/menu/coin.glb');
