import React, { useEffect, useRef } from 'react';

const HackerAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();

    const particles = [];

    const createParticle = () => {
      const particle = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
      };
      particles.push(particle);
    };

    for (let i = 0; i < 100; i++) {
      createParticle();
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(0, 0, 0, 0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = '#334753';
        ctx.fill();
      });
    };

    const drawLines = () => {
      particles.forEach((particle, index) => {
        for (let i = index + 1; i < particles.length; i++) {
          const otherParticle = particles[i];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(238, 238, 238, ${1 - distance / 150})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
    };

    const draw = () => {
      drawParticles();
      drawLines();
      requestAnimationFrame(draw);
    };

    draw();
    
    const handleResize = () => {
      updateCanvasSize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-[-1] overflow-hidden"></canvas>;
};

export default HackerAnimation;
