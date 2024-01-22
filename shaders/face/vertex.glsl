uniform float time; // Passed in from JavaScript, read-only in the shader
varying vec2 vUv; // Used to pass the UV coordinates to the fragment shader
varying vec3 vPosition; // Used to pass the vertex position to the fragment shader
varying vec3 vNormal; // Used to pass the vertex normal to the fragment shader
varying vec3 vView;
varying vec2 pixels;

void main() {
    vec4 transformed = modelViewMatrix * vec4(position, 1.0);
    vView = -normalize(-transformed.xyz);

    vUv = uv; 
    vNormal = normal;
    vPosition = position;

    gl_Position = projectionMatrix * transformed;
}
