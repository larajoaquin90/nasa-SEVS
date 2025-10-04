// AX FUNCIONTS --> CLEANER CODE
 
function createMaterial(color) {
    return new THREE.MeshStandardMaterial({ color: color });
}

function createLight(type, color, intensity, position) {
    let light;
    if (type === 'ambient') {
        light = new THREE.AmbientLight(color, intensity);
    } else if (type === 'directional') {
        light = new THREE.DirectionalLight(color, intensity);
        light.position.set(position.x, position.y, position.z);
    }
    return light;
}

function createBoxGeometry(width, height, depth) {
    return new THREE.BoxGeometry(width, height, depth);
}