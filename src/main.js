import './styles/style.css'
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
console.log(OrbitControls)

const canvas = document.querySelector("canvas");
// Scene
const scene = new THREE.Scene()

// Box
const geometry = new THREE.BoxGeometry(1, 1, 1)
const materials = new THREE.MeshBasicMaterial({color: "yellow"});
const box = new THREE.Mesh(geometry, materials)
scene.add(box)

// Sizes
const size = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {

    size.width = window.innerWidth
    size.height = window.innerHeight

    camera.aspect = size.width / size.height
    camera.updateProjectionMatrix()
    renderer.setSize(size.width, size.height)
    renderer.render(scene, camera )

})

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight)
camera.position.z = 5
scene.add(camera)

// Orbit Control
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
})

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.render(scene, camera )

