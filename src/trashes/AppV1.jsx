import styles from "./App.module.css";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const App = () => {
  const camera = new THREE.PerspectiveCamera(
    10,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 13;

  const scene = new THREE.Scene();
  let owl;
  const loader = new GLTFLoader();
  loader.load(
    "./assets/day_20_-_snowy_owl.glb",
    function (gltf) {
      owl = gltf.scene;
      owl.position.y = -1;
      owl.rotation.y = 1.5;
      scene.add(owl);

      mixer = new THREE.AnimationMixer(owl);
      mixer.clipAction(gltf.animations[0]).play();
      console.log(gltf.animations);
    },
    function (xhr) {},
    function (error) {}
  );
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.querySelector(".container3d").appendChild(renderer.domElement);

  // Light
  const ambientLight = new THREE.ambientLight(0xfff, 1.3);
  scene.add(ambientLight);

  const topLight = new THREE.DirectionalLight(0xfff, 1);
  topLight.position.set(500, 500, 500);
  scene.add(topLight);

  const reRender3d = () => {
    requestAnimationFrame();
    renderer.render(scene, camera);
    mixer.update(0, 2);
  };
  reRender3d();

  return <div className={styles.container3d}>App</div>;
};

export default App;
