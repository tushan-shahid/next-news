import Navbar from "@/components/Navbar";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import * as THREE from "three";
import Footer from "@/components/Footer";

export default function Home() {
  const canvasRef = useRef(null);

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current || undefined,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load("/globe.jpg"),
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);
    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return (
    <div className="bg-gray-300 min-h-screen relative">
      <Navbar />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-center">Next News Home</h1>
        <p className="text-lg text-center">
          Welcome to the home page of our news website. Browse through the
          following categories to find the latest news:
        </p>
        <div className="flex flex-wrap justify-center mt-8">
          <motion.div
            className="mx-4 my-4 p-2 border-blue-900 border-4 rounded-xl text-blue-800 hover:bg-blue-800 hover:text-white"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="/technews" className="p-2">
              Technology
            </Link>
          </motion.div>
          <motion.div
            className="mx-4 my-4 p-2 border-blue-900 border-4 rounded-xl text-blue-800 hover:bg-blue-800 hover:text-white"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/businessnews" className="p-2">
              Business
            </Link>
          </motion.div>
          <motion.div
            className="mx-4 my-4 p-2 border-blue-900 border-4 rounded-xl text-blue-800 hover:bg-blue-800 hover:text-white"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/sportsnews" className="p-2">
              Sports
            </Link>
          </motion.div>
          <motion.div
            className="mx-4 my-4 p-2 border-blue-900 border-4 rounded-xl text-blue-800 hover:bg-blue-800 hover:text-white"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/memes" className="p-2">
              Memes
            </Link>
          </motion.div>
        </div>

        <div className="flex justify-center mt-8">
          <canvas ref={canvasRef} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
