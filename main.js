import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
//---RENDER, LIGHT, CAMERA ----------------------------------------------------------------
const scene1 = new THREE.Scene();

const renderer1 = new THREE.WebGLRenderer({antialias: true});
//const container = document.getElementById('canvas-container');
renderer1.outputColorSpace = THREE.SRGBColorSpace;
renderer1.setSize(350, 350); //(container.clientWidth, container.clientHeight) doesnt work
renderer1.setClearColor(0xff6fff);
renderer1.setPixelRatio(1.0);
document.body.appendChild(renderer1.domElement);
//container.appendChild(renderer1.domElement);
const camera1 = new THREE.PerspectiveCamera(25, 400 / 400, 0.1, 1000);
camera1.position.set(100,60,100);
const light2 = new THREE.AmbientLight(0xffffff, 2);
scene1.add(light2);



//---CONTROL----------------------------------------------------------------
const controls = new OrbitControls( camera1, renderer1.domElement );
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 10;
controls.maxDistance = 70;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 2.5;
controls.autoRotate = false;
controls.target = new THREE.Vector3(0, 10, 5); //change camera view here
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
loader2.load('test.glb', (gltf) => { //cubeAnim1.gltf
    const mesh3 = gltf.scene;
    mesh3.scale.set(0.1, 0.1, 0.1) //used for unreal scale
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
/*window.addEventListener('resize', () => {
    // Update camera aspect ratio
    camera1.aspect = window.innerWidth / window.innerHeight;
    camera1.updateProjectionMatrix();
    
    // Update renderer size
    renderer1.setSize(window.innerWidth, window.innerHeight);
});*/
