import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

//---RENDER, LIGHT, CAMERA ----------------------------------------------------------------
const scene1 = new THREE.Scene();

const renderer1 = new THREE.WebGLRenderer({antialias: true});
renderer1.outputColorSpace = THREE.SRGBColorSpace;
renderer1.setSize(300, 500);
renderer1.setClearColor(0x001d9e);
renderer1.setPixelRatio(1.0);
document.body.appendChild(renderer1.domElement);
const camera1 = new THREE.PerspectiveCamera(45, 300 / 550, 0.1, 1000);
camera1.position.set(5,12,10);
const light2 = new THREE.HemisphereLight(0xffffff , 0x080820, 7);
scene1.add(light2);
//---CONTROL----------------------------------------------------------------
const controls = new OrbitControls( camera1, renderer1.domElement );
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 25;
controls.maxDistance = 70;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 2.0;
controls.autoRotate = false;
controls.target = new THREE.Vector3(0, 11, 4); //CONTROL POSITION
controls.update();

const loader2 = new GLTFLoader().setPath('3d/');
loader2.load('3d.glb', (gltf) => {
    const mesh3 = gltf.scene;
    mesh3.scale.set(0.1, 0.1, 0.1);
    scene1.add(mesh3);
    const mixer = new THREE.AnimationMixer(mesh3);
            gltf.animations.forEach((clip) => {
                mixer.clipAction(clip).play();
                mixer.clipAction(clip).timeScale=1.8;
            });
            const animate = () => {
                requestAnimationFrame(animate);
                mixer.update(0.01); // Update animation
                renderer1.render(scene1, camera1);
            }; animate();
            
    }, (xhr) => {console.log(`loading ${xhr.loaded / xhr.total * 100}%`);}, (error) => {console.error(error);
    });
