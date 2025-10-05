// filepath: /nasa-marte-escenario/nasa-marte-escenario/src/second.js
import * as THREE from 'https://unpkg.com/three@0.164.1/build/three.module.js';

// CREACIÓN DE ESCENA
const scene = new THREE.Scene();
scene.background = new THREE.Color("#white");

// CREACIÓN DE CÁMARA
const camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(28, 12, 0);
camera.lookAt(0, 0, 0);

// CREACIÓN DE RENDERIZADOR
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// CREACIÓN DE LUCES
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

// CREACIÓN DEL CRÁTER
const craterGeometry = new THREE.CircleGeometry(2, 32);
const craterMaterial = new THREE.MeshStandardMaterial({
  color: "#8b0000",
  side: THREE.DoubleSide,
  depthWrite: false
});
const crater = new THREE.Mesh(craterGeometry, craterMaterial);
crater.rotation.x = -Math.PI / 2;
scene.add(crater);

// CREACIÓN DE DIFERENCIAS DE COLOR EN EL CRÁTER
const craterDepthMaterial = new THREE.MeshStandardMaterial({
  color: "#5c0000",
  side: THREE.DoubleSide,
  depthWrite: false
});
const craterDepth = new THREE.Mesh(new THREE.CircleGeometry(1.5, 32), craterDepthMaterial);
craterDepth.rotation.x = -Math.PI / 2;
scene.add(craterDepth);

// CREACIÓN DE ROCAS
const rockGeometry = new THREE.SphereGeometry(0.1, 8, 8);
const rockMaterial = new THREE.MeshStandardMaterial({ color: "#7f4c4c" });

for (let i = 0; i < 20; i++) {
  const rock = new THREE.Mesh(rockGeometry, rockMaterial);
  rock.position.set(
    (Math.random() - 0.5) * 5,
    0.1,
    (Math.random() - 0.5) * 5
  );
  scene.add(rock);
}

// Crear el suelo
const geometrySuelo = new THREE.PlaneGeometry(10, 10);
const materialSuelo = new THREE.MeshStandardMaterial({ color: "white" });
const suelo = new THREE.Mesh(geometrySuelo, materialSuelo);
suelo.rotation.x = -Math.PI / 2;
scene.add(suelo);



// CREACIÓN DE MONTAÑAS
const mountainGeometry = new THREE.ConeGeometry(0.5, 1, 4);
const mountainMaterial = new THREE.MeshStandardMaterial({ color: "#4c2f2f" });

for (let i = 0; i < 5; i++) {
  const mountain = new THREE.Mesh(mountainGeometry, mountainMaterial);
  mountain.position.set(
    (Math.random() - 0.5) * 5,
    0.5,
    (Math.random() - 0.5) * 5
  );
  mountain.rotation.y = Math.random() * Math.PI;
  scene.add(mountain);
}

// ANIMACIÓN/RENDER LOOP
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// AJUSTAR EL TAMAÑO AL CAMBIAR LA VENTANA
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});