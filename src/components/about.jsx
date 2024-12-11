import React, { useEffect, useRef } from "react";import * as THREE from "three";

const About = () => {
   const canvasRef = useRef(null);

   useEffect(() => {
      const canvas = canvasRef.current;

      // Scene, Camera, Renderer
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
         50,
         canvas.clientWidth / canvas.clientHeight,
         0.1,
         1000
      );
      camera.position.z = 3;

      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
      renderer.shadowMap.enabled = true; // Enable shadow mapping

      // Sphere Geometry (Earth)
      const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
      const textureLoader = new THREE.TextureLoader();
      const earthTexture = textureLoader.load("/img/earth1.jpg"); // Replace with your texture path
      const sphereMaterial = new THREE.MeshStandardMaterial({
         map: earthTexture,
      });
      const earth = new THREE.Mesh(sphereGeometry, sphereMaterial);
      earth.castShadow = true; // Enable shadows for the Earth
      scene.add(earth);

      // Plane for Shadow Reception
      const planeGeometry = new THREE.PlaneGeometry(5, 5);
      const planeMaterial = new THREE.ShadowMaterial({ opacity: 0.3 });
      const plane = new THREE.Mesh(planeGeometry, planeMaterial);
      plane.rotation.x = -Math.PI / 2;
      plane.position.y = -1.5;
      plane.receiveShadow = true; // Allow plane to receive shadows
      scene.add(plane);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0x404040); // Soft ambient light
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 5, 5);
      directionalLight.castShadow = true; // Enable shadows for the light
      directionalLight.shadow.mapSize.width = 1024; // Shadow quality
      directionalLight.shadow.mapSize.height = 1024;
      scene.add(directionalLight);

      // Animation
      const animate = () => {
         requestAnimationFrame(animate);
         earth.rotation.y += 0.002; // Spin the Earth
         renderer.render(scene, camera);
      };

      animate();

      // Cleanup
      return () => {
         renderer.dispose();
         scene.clear();
      };
   }, []);

   return (
      <div id="about">
         <div className="container">
            <div className="about">
               <div className="welcome">
                  <h1>
                     Добро пожаловать в нашу цифровую лабораторию, где мы
                     превращаем ваши идеи в инновационные IT-продукты!
                  </h1>
                  <a id="cta" href="#">
                     Давайте начнем!
                     <img src="img/arrow-link.png" alt="" />
                  </a>
                  <a id="arrow-down" href="#counters">
                     <img src="img/arrow-down.png" alt="" />
                  </a>
               </div>
               <div className="white-bg">
                  <canvas
                     ref={canvasRef}
                     style={{
                        width: "500px",
                        height: "500px",
                        display: "block",
                        margin: "50px auto",
                        borderRadius: "50%",
                        background: "transparent",
                     }}
                  ></canvas>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
