import * as THREE from 'three';
import { Ref } from 'react';
import { shaderMaterial } from '@react-three/drei';

declare module 'react-slick';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			colorShiftMaterial: shaderMaterial &
				JSX.IntrinsicElements['shaderMaterial'] & {
					ref?: Ref<shaderMaterial>;
					args?: ConstructorParameters<typeof THREE.ShaderMaterial>;
					attach?: string;
				};
		}
	}
}
