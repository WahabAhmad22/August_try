import './styles/style.css'
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// Texture
const textureLoader = new THREE.TextureLoader()
const texture = textureLoader.load("src/ducky/DuckCM.png")


// Canvas
const canvas = document.querySelector("canvas")

// GLTFLoader
const glTFLoader = new GLTFLoader()
console.log(glTFLoader)

glTFLoader.load(
    "src/ducky/ducck.gltf",
    (gltf) => { 
        const duck = gltf.scene
        // duck.position.set(0, 1.05, -1)
        scene.add(duck)
    }
)


// Scene
const scene = new THREE.Scene()
// scene.background = new THREE.Color(0xffffff)

// Size
const size = {
    width: window.innerWidth,
    height: window.innerHeight
}

// resize
window.addEventListener("resize" , () => {
    size.width = window.innerWidth
    size.height = window.innerHeight

    renderer.setSize(size.width , size.height)
    camera.updateProjectionMatrix()
    camera.aspect = size.width / size.height
    renderer.render(scene , camera)
})


// BOX
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({map: texture})
const box = new THREE.Mesh(geometry, material)
// scene.add(box)


//Light
const light = new THREE.DirectionalLight(0xffffff , 1)
light.position.set(2, 2, 5)
scene.add(light)

// Camera
const camera = new THREE.PerspectiveCamera(75, size.width / size.height)
camera.position.z = 5
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.autoRotate = true

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(size.width , size.height)
renderer.render(scene , camera)

// Animate
function animate(){
    requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene , camera)
}
animate()


