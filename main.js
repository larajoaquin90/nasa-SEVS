import * as THREE from 'https://unpkg.com/three@0.164.1/build/three.module.js';

// CREACIÓN DE ESCENA
const scene = new THREE.Scene();
scene.background = new THREE.Color("white");

// CREACIÓN DE CAMARA
const camera = new THREE.PerspectiveCamera(
  95, window.innerWidth / window.innerHeight, 0.1, 1000
);
camera.position.set(6, 6, 8);
camera.lookAt(0, 1, 0);

// CREACIÓN DE RENDERIZADOR
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Agregar luz ambiental y direccional
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

// Creacion de Domo
const geometryDomo = new THREE.SphereGeometry(2, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2);
const materialDomo = new THREE.MeshStandardMaterial({ color: "grey", side: THREE.DoubleSide });
const Domo = new THREE.Mesh(geometryDomo, materialDomo);
scene.add(Domo);
Domo.position.y = 1;
Domo.rotation.y = 0;

// Crear el techo (pirámide)
const geometryTecho = new THREE.ConeGeometry(1.4, 1, 4);
const materialTecho = new THREE.MeshStandardMaterial({ color: 0x8b0000 });
const techo = new THREE.Mesh(geometryTecho, materialTecho);
techo.position.y = 1.75;
techo.rotation.y = Math.PI / 4;
scene.add(techo);

// Crear la puerta (rectángulo)
const geometryPuerta = new THREE.BoxGeometry(0.4, 0.7, 0.05);
const materialPuerta = new THREE.MeshStandardMaterial({ color: 0x654321 });
const puerta = new THREE.Mesh(geometryPuerta, materialPuerta);
puerta.position.set(0, 0.35, 1.025);
scene.add(puerta);

// Crear el suelo
const geometrySuelo = new THREE.PlaneGeometry(15, 15);
const materialSuelo = new THREE.MeshStandardMaterial({ color: "#8b0000" });
const suelo = new THREE.Mesh(geometrySuelo, materialSuelo);
suelo.rotation.x = -Math.PI / 2;
scene.add(suelo);

// Animación/render loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// Ajustar el tamaño al cambiar la ventana
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});