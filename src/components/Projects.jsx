import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { repos } from "../constants/repos";

const levelColors = [
  "#43e97b", "#38f9d7", "#fa8bff", "#2bd2ff", "#2bff88", "#a18cd1"
];

const ProjectLevel = ({ level, title, description, repoUrl, demoUrl, unlocked }) => (
  <div className={`project-level-card ${unlocked ? "unlocked" : "locked"}`}
    style={{
      border: `2px solid ${levelColors[level % levelColors.length]}`,
      boxShadow: unlocked ? `0 0 24px 0 ${levelColors[level % levelColors.length]}55` : "none"
    }}
  >
    <div className="level-badge" style={{ background: levelColors[level % levelColors.length] }}>
      Nivel {level + 1}
    </div>
    <h3 className="level-title">{title}</h3>
    <p className="level-desc">{description}</p>
    <div className="level-links">
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">Repositorio</a>
      {demoUrl && <a href={demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>}
    </div>
    {!unlocked && <div className="level-locked">🔒 Bloqueado</div>}
  </div>
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

  // Ejemplo de estructura de niveles (puedes conectar esto a tu fetch real)
  const levels = [
    {
      title: "ETL Pipeline con Spark",
      description: "Automatiza y transforma datos a gran escala usando Apache Spark.",
      repoUrl: "https://github.com/JackDM/etl-pipeline-spark",
      demoUrl: "",
      unlocked: true
    },
    {
      title: "Juego de plataformas JS",
      description: "Un juego retro hecho en JavaScript puro.",
      repoUrl: "https://github.com/JackDM/platformer-js",
      demoUrl: "https://jackdm.github.io/platformer-js/",
      unlocked: false
    },
    {
      title: "Portfolio 3D",
      description: "Mi portfolio interactivo en 3D con Three.js.",
      repoUrl: "https://github.com/JackDM/portfolio-3d",
      demoUrl: "https://jackdm.github.io/portfolio-3d/",
      unlocked: false
    }
  ];

  return (
    <section className="levels-section">
      <div className="levels-grid">
        {levels.map((lvl, i) => (
          <ProjectLevel key={i} level={i} {...lvl} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
