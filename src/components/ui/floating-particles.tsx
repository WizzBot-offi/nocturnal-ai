"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

interface FloatingParticlesProps {
  particleCount?: number;
  particleColor1?: string;
  particleColor2?: string;
  cameraDistance?: number;
  rotationSpeed?: number;
  particleSize?: number;
  antigravityForce?: number;
  activationRate?: number;
  className?: string;
}

export function FloatingParticles({
  particleCount = 10000,
  particleColor1 = "#ffff50",
  particleColor2 = "#99ffcc",
  cameraDistance = 1000,
  rotationSpeed = 0.1,
  particleSize = 30,
  antigravityForce = 30,
  activationRate = 50,
  className = "",
}: FloatingParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    renderer?: THREE.WebGLRenderer;
    scene?: THREE.Scene;
    camera?: THREE.PerspectiveCamera;
    animationId?: number;
  }>({});

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const getRandomInt = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min)) + min;
    const getRadian = (d: number) => (d * Math.PI) / 180;
    const getSpherical = (r1: number, r2: number, r: number) => {
      const x = Math.cos(r1) * Math.cos(r2) * r;
      const z = Math.cos(r1) * Math.sin(r2) * r;
      const y = Math.sin(r1) * r;
      return [x, y, z];
    };

    class Mover {
      position = new THREE.Vector3();
      velocity = new THREE.Vector3();
      acceleration = new THREE.Vector3();
      anchor = new THREE.Vector3();
      mass = 1;
      is_active = false;
      init(v: THREE.Vector3) {
        this.position = v.clone();
        this.velocity = v.clone();
        this.anchor = v.clone();
        this.acceleration.set(0, 0, 0);
        this.is_active = false;
      }
      updatePosition() {
        this.position.copy(this.velocity);
      }
      updateVelocity() {
        this.acceleration.divideScalar(this.mass);
        this.velocity.add(this.acceleration);
      }
      applyForce(v: THREE.Vector3) {
        this.acceleration.add(v);
      }
      activate() {
        this.is_active = true;
        const force = this.anchor
          .clone()
          .sub(this.position)
          .normalize()
          .multiplyScalar(antigravityForce);
        this.applyForce(force);
      }
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.set(0, 0, cameraDistance);
    camera.lookAt(scene.position);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Soft circular sprite texture
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d")!;
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, "rgba(255,255,255,1)");
    grad.addColorStop(0.4, "rgba(255,255,255,0.6)");
    grad.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    const texture = new THREE.CanvasTexture(canvas);

    const movers: Mover[] = [];
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const c1 = new THREE.Color(particleColor1);
    const c2 = new THREE.Color(particleColor2);

    for (let i = 0; i < particleCount; i++) {
      const r1 = getRadian(getRandomInt(-90, 90));
      const r2 = getRadian(getRandomInt(0, 360));
      const radius = getRandomInt(200, 450);
      const [x, y, z] = getSpherical(r1, r2, radius);
      const m = new Mover();
      m.init(new THREE.Vector3(x, y, z));
      movers.push(m);
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      const mix = Math.random();
      const c = c1.clone().lerp(c2, mix);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geom.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: particleSize,
      map: texture,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geom, mat);
    scene.add(points);

    let lastActivate = performance.now();
    const activate = () => {
      for (let k = 0; k < activationRate; k++) {
        const idx = getRandomInt(0, movers.length);
        const m = movers[idx];
        if (!m.is_active) m.activate();
      }
    };

    const animate = () => {
      const now = performance.now();
      points.rotation.y += getRadian(rotationSpeed);
      const posAttr = geom.getAttribute("position") as THREE.BufferAttribute;
      for (let i = 0; i < movers.length; i++) {
        const m = movers[i];
        if (m.is_active) {
          m.updateVelocity();
          m.updatePosition();
          m.acceleration.set(0, 0, 0);
          // damp back
          const toAnchor = m.anchor.clone().sub(m.position).multiplyScalar(0.02);
          m.velocity.add(toAnchor);
          m.velocity.multiplyScalar(0.96);
          if (m.position.distanceTo(m.anchor) < 0.5) m.is_active = false;
        }
        posAttr.setXYZ(i, m.position.x, m.position.y, m.position.z);
      }
      posAttr.needsUpdate = true;
      renderer.render(scene, camera);
      if (now - lastActivate > 10) {
        activate();
        lastActivate = now;
      }
      sceneRef.current.animationId = requestAnimationFrame(animate);
    };

    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    sceneRef.current = { renderer, scene, camera };
    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      if (sceneRef.current.animationId) cancelAnimationFrame(sceneRef.current.animationId);
      if (renderer.domElement.parentNode === container) container.removeChild(renderer.domElement);
      renderer.dispose();
      geom.dispose();
      mat.dispose();
      texture.dispose();
    };
  }, [
    particleCount,
    particleColor1,
    particleColor2,
    cameraDistance,
    rotationSpeed,
    particleSize,
    antigravityForce,
    activationRate,
  ]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full ${className}`}
      style={{ position: "relative", overflow: "hidden" }}
    />
  );
}
