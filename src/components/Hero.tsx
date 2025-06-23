import React, { useEffect, useRef } from "react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  ArrowDownIcon,
} from "lucide-react";
const ParticlesAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Particle class
    class Particle {
      canvas: HTMLCanvasElement;
      ctx: CanvasRenderingContext2D;
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.reset();
      }

      reset() {
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (
          this.x < 0 ||
          this.x > this.canvas.width ||
          this.y < 0 ||
          this.y > this.canvas.height
        ) {
          this.reset();
        }
      }

      draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(96, 165, 250, ${this.opacity})`;
        this.ctx.fill();
      }
    }

    // Create particles
    const createParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas, ctx));
      }
    };
    createParticles();
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{
        opacity: 0.7,
      }}
    />
  );
};

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-0"></div>
      <ParticlesAnimation />
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 animate-gradient">
            Fernando Araujo
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-400 mb-8 animate-fade-in">
            Backend Developer
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg animate-fade-in">
            I specialize in building robust backend systems using .NET, Python, and modern web technologies. With a
            strong focus on Industry 4.0 and Artificial Intelligence, I also create
            scalable solutions for data analytics, computer vision, and
            automation. I follow Clean Architecture and SOLID principles to
            ensure clean, maintainable, and high-performance code.
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/fernandoofilho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <GithubIcon size={28} />
            </a>
            <a
              href="https://linkedin.com/in/fernandoofilho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={28} />
            </a>
            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <TwitterIcon size={28} />
            </a> */}
          </div>
          <a
            href="#about"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-110"
            aria-label="Scroll to About section"
          >
            Explore my work
            <ArrowDownIcon size={18} className="ml-2 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
