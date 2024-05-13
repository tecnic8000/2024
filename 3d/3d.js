import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
//---RENDER, LIGHT, CAMERA ----------------------------------------------------------------
const scene1 = new THREE.Scene();

const renderer1 = new THREE.WebGLRenderer({antialias: true});
renderer1.outputColorSpace = THREE.SRGBColorSpace;
renderer1.setSize(450, 450);
renderer1.setClearColor(0xffffff);
renderer1.setPixelRatio(1.0);
document.body.appendChild(renderer1.domElement);
const camera1 = new THREE.PerspectiveCamera(25, 400 / 400, 0.1, 1000);
camera1.position.set(24,45,90);
camera1.lookAt(0,60,0);
/*const light1 = new THREE.SpotLight(0xffffff, 90, 0, Math.PI/2, 0); 
light1.position.set(0,25,0);
scene1.add(light1);*/
const light2 = new THREE.HemisphereLight(0xffffbb, 0x080820, 4);
scene1.add(light2);



//---CONTROL----------------------------------------------------------------
const controls = new OrbitControls( camera1, renderer1.domElement );
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 10;
controls.maxDistance = 90;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 2.5;
controls.autoRotate = false;
controls.target = new THREE.Vector3(0, 1, 0);
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
const loader2 = new GLTFLoader().setPath('../3d/');
loader2.load('cubeAnim1.gltf', (gltf) => {
    const mesh3 = gltf.scene;
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
    });
//console.log(mesh3); //didnt work
/*function animate(){
    requestAnimationFrame(animate);
    
    //mesh3.rotation.x += 0.01;
    //mesh3.rotation.y += 0.01;
    //mesh3.rotation.z += 0.01;
    renderer1.render(scene1, camera1);
}*/
//animate();