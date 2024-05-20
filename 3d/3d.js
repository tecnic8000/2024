import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
//---RENDER, LIGHT, CAMERA ----------------------------------------------------------------
const scene1 = new THREE.Scene();

const renderer1 = new THREE.WebGLRenderer({antialias: true});
renderer1.outputColorSpace = THREE.SRGBColorSpace;
renderer1.setSize(420, 420);
renderer1.setClearColor(0xffffff);
renderer1.setPixelRatio(1.0);
document.body.appendChild(renderer1.domElement);
const camera1 = new THREE.PerspectiveCamera(25, 400 / 400, 0.1, 1000);
camera1.position.set(100,40,100);
const light2 = new THREE.HemisphereLight(0xffffbb, 0x080820, 5);
scene1.add(light2);
//---CONTROL----------------------------------------------------------------
const controls = new OrbitControls( camera1, renderer1.domElement );
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 70;
controls.maxDistance = 70;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 2.5;
controls.autoRotate = false;
controls.target = new THREE.Vector3(0, 10, 5);
controls.update();
//---MESH LOCAL----------------------------------------------------------------
/*const meshData1 = new THREE.PlaneGeometry(25, 25, 32, 32); meshData1.rotateX(-Math.PI / 2);
const material1 = new THREE.MeshStandardMaterial({color:0xFC5600,side: THREE.DoubleSide});
const mesh1 = new THREE.Mesh(meshData1, material1);
scene1.add(mesh1);*/
//---MESH LOAD----------------------------------------------------------------
/*const loader = new GLTFLoader().setPath('test/');
loader.load('test.gltf', (gltf) => {
    const mesh = gltf.scene;
    mesh.position.set(0, 10, -1);
    scene1.add(mesh);
    //document.getElementById('progress-container').style.display = 'block';
  }, (xhr) => {console.log(`loading ${xhr.loaded / xhr.total * 100}%`);}, (error) => {console.error(error);
  });*/
const loader2 = new GLTFLoader().setPath('3d/');
loader2.load('cube3.glb', (gltf) => {
    const mesh3 = gltf.scene;
    mesh3.scale.set(0.1, 0.1, 0.1);
    scene1.add(mesh3);
    const mixer = new THREE.AnimationMixer(mesh3);
            gltf.animations.forEach((clip) => {
                mixer.clipAction(clip).play();
            });
            const animate = () => {
                requestAnimationFrame(animate);
                mixer.update(0.01); // Update animation
                renderer1.render(scene1, camera1);
            }; animate();
    }, (xhr) => {console.log(`loading ${xhr.loaded / xhr.total * 100}%`);}, (error) => {console.error(error);
    });

    