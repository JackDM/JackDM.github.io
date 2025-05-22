import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { repos } from "../constants/repos";

const cardVariants = {
  initial: { opacity: 0, y: 40, scale: 0.95 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.2 + i * 0.12, type: "spring", stiffness: 60 }
  })
};

const ProjectLevel = ({ title, description, tech, github, demoUrl, i }) => (
  <motion.div
    className="project-level-card"
    custom={i}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    variants={cardVariants}
    whileHover={{ x: 20 }}
    transition={{
      type: "spring",
      stiffness: 120,
      damping: 8,
      duration: 0.4,
      repeat: Infinity,
      repeatType: "reverse"
    }}
    style={{ cursor: 'pointer' }}
  >
    <h3 className="level-title" style={{textAlign: 'center'}}>{title}</h3>
    <p className="level-desc" style={{textAlign: 'center'}}>{description}</p>
    {tech && tech.length > 0 && (
      <div className="project-tech-chips" style={{justifyContent: 'center'}}>
        {tech.map((t, idx) => (
          <span className="project-chip" key={idx}>{t}</span>
        ))}
      </div>
    )}
    <div className="level-links" style={{justifyContent: 'center'}}>
      <a href={github} target="_blank" rel="noopener noreferrer">Repositorio</a>
      {demoUrl && <a href={demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>}
    </div>
  </motion.div>
);

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const results = await Promise.all(
        repos.map(async (repo) => {
          const url = `https://raw.githubusercontent.com/${repo}/main/metadata.json`;
          try {
            const res = await fetch(url);
            if (!res.ok) return null;
            return await res.json();
          } catch {
            return null;
          }
        })
      );
      setProjects(results.filter(Boolean));
    };
    fetchAll();
  }, []);

  return (
    <section className="levels-section">
      <h2 className="modern-title rainbow-gradient projects-title">Proyectos</h2>
      <div className="levels-grid">
        {repos.map((_, i) =>
          projects[i] ? <ProjectLevel key={i} i={i} {...projects[i]} /> : (
            <div className="project-level-card" key={i} style={{textAlign: 'center', opacity: 0.7}}>
              No se pudo cargar el proyecto.
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
