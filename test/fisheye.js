import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

// Create the scene
const scene = new THREE.Scene();

// Set up a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Set up a renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

// Add some basic geometry to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
});

// Fisheye shader
const fisheyeShader = {
    uniforms: {
        'tDiffuse': { value: null },
        'strength': { value: 0.5 }
    },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float strength;
        varying vec2 vUv;

        void main() {
            vec2 uv = vUv;
            vec2 fromCenter = uv - 0.5;
            float dist = length(fromCenter);
            if (dist < 0.5) {
                float percent = 1.0 - (dist / 0.5);
                uv = uv + (fromCenter * percent * strength);
            }
            gl_FragColor = texture2D(tDiffuse, uv);
        }
    `
};

// Set up the EffectComposer and add the fisheye shader pass
const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

const fisheyePass = new ShaderPass(fisheyeShader);
fisheyePass.renderToScreen = true;
composer.addPass(fisheyePass);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    composer.render();
}

animate();
