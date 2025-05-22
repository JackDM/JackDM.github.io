import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { repos } from "../constants/repos";

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

  return (
    <section className="grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, i) => (
        <ProjectCard key={i} {...p} />
      ))}
    </section>
  );
};

export default Projects;
