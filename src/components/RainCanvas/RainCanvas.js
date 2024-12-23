"use client";
import { useEffect, useRef } from "react";
import CanvasCursor from "../CanvasCursor/CanvasCursor";

const RainCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const raindrops = [];
    const particles = [];
    const gravity = 0.1;

    class Raindrop {
      constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.radius = Math.random() * 2 + 1;
      }

      fall() {
        this.y += this.speed;
        this.speed += gravity * 0.01; // Simulate acceleration due to gravity
        if (this.y > canvas.height) {
          this.splash();
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(173, 216, 230, 0.7)";
        ctx.fill();
        ctx.closePath();
      }

      splash() {
        for (let i = 0; i < 3; i++) {
          particles.push(
            new Particle(
              this.x,
              canvas.height - 10,
              Math.random() * 2 - 1,
              -Math.random() * 2
            )
          );
        }
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.speed = Math.random() * 3 + 2;
      }
    }

    class Particle {
      constructor(x, y, dx, dy) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.life = 50;
      }

      move() {
        this.x += this.dx;
        this.y += this.dy;
        this.dy += gravity * 0.02; // Simulate gravity
        this.life--;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.life / 50})`;
        ctx.fill();
        ctx.closePath();
      }
    }

    // Initialize raindrops
    for (let i = 0; i < 30; i++) {
      raindrops.push(
        new Raindrop(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 3 + 2
        )
      );
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update raindrops
      raindrops.forEach((drop) => {
        drop.fall();
        drop.draw();
      });

      // Draw and update particles
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].move();
        particles[i].draw();
        if (particles[i].life <= 0) {
          particles.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    };

    // Handle window resizing
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    animate();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full bg-black"
      />
      <CanvasCursor />
    </>
  );
};

export default RainCanvas;
