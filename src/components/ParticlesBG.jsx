import { useEffect } from "react";

export default function ParticlesBG() {
  useEffect(() => {
    // Crear el canvas si no existe
    let canvas = document.getElementById("particles-bg");
    if (!canvas) {
      canvas = document.createElement("canvas");
      canvas.id = "particles-bg";
      document.body.prepend(canvas);
    }
    const ctx = canvas.getContext("2d");
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    let gradStep = 0;
    let particles = Array.from({ length: 150 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
      alpha: Math.random() * 0.5 + 0.5
    }));
    function draw() {
      gradStep += 0.002;
      // Gradiente animado
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, `hsl(${200 + Math.sin(gradStep) * 40}, 80%, 18%)`);
      grad.addColorStop(1, `hsl(${260 + Math.cos(gradStep) * 40}, 80%, 22%)`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      // Partículas
      for (const p of particles) {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = '#fff';
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      }
      requestAnimationFrame(draw);
    }
    draw();
    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      // Limpieza opcional: eliminar el canvas si se desmonta el componente
      // canvas.remove();
    };
  }, []);
  return null;
}
