import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const ProjectCard = ({ title, description, tech, image, github }) => {
  // Motion values para el parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Rotaciones más notorias y modernas
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [18, -18]), {
    stiffness: 140,
    damping: 18
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-18, 18]), {
    stiffness: 140,
    damping: 18
  });

  function onMouseMove(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale: 1,
        boxShadow: "0 6px 32px 0 rgba(0,0,0,0.16)",
        perspective: 900,
        transformStyle: "preserve-3d",
        willChange: "transform"
      }}
      whileHover={{
        scale: 1.08,
        boxShadow: "0 24px 64px 0 rgba(66,230,149,0.18), 0 8px 40px 0 rgba(0,0,0,0.32)"
      }}
      transition={{ type: "spring", stiffness: 160, damping: 18 }}
      className="bg-gradient-to-br from-purple-800 to-green-600 p-4 rounded-2xl shadow-lg transition-all"
    >
      <img src={image} alt={title} className="rounded-xl mb-4 h-48 object-cover w-full" />
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm text-gray-200">{description}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {tech.map((t, i) => (
          <span key={i} className="bg-black bg-opacity-30 px-2 py-1 rounded text-xs">{t}</span>
        ))}
      </div>
      <a href={github} className="block mt-4 text-sm underline text-white" target="_blank">Ver en GitHub</a>
    </motion.div>
  );
};

export default ProjectCard;
