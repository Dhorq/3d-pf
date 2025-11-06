import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import styles from "./App.module.css";

const ThreeDBird = () => {
  const containerRef = useRef(null);
  const owlRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 5, 15); // kamera agak ke atas untuk lihat bird di bawah

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 1.3));
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(500, 500, 500);
    scene.add(directionalLight);

    // Controls (optional)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Load GLTF
    const loader = new GLTFLoader();
    let mixer;
    loader.load(
      "day_20_-_snowy_owl.glb", // pastikan file ada di public/
      (gltf) => {
        const owl = gltf.scene;
        owl.position.set(0, -5, 0); // posisi bawah layar
        owl.rotation.y = 0;
        scene.add(owl);
        owlRef.current = owl;

        if (gltf.animations.length) {
          mixer = new THREE.AnimationMixer(owl);
          mixer.clipAction(gltf.animations[0]).play();
        }
      },
      undefined,
      (error) => console.error(error)
    );

    // Scroll tracking
    let scrollY = 0;
    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll);

    // Animate
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);

      if (owlRef.current) {
        const amplitude = 15; // jarak horizontal maksimal
        owlRef.current.position.x = Math.sin(scrollY * 5) * amplitude;
      }

      if (mixer) mixer.update(clock.getDelta());
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", onScroll);
      if (container && renderer.domElement)
        container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div>
      <div
        className={styles.container3d}
        ref={containerRef}
        style={{ position: "fixed", top: 0, left: 0 }}
      />

      <div style={{ height: "5000px" }} />
    </div>
  );
};

export default ThreeDBird;
