import React from "react";
import { motion } from "framer-motion";

const experience = [
  {
    company: "TechNova",
    role: "Desarrollador Full Stack",
    period: "2023 - Actualidad",
    description: "Desarrollo de aplicaciones web modernas con React, Node.js y despliegue en la nube."
  },
  {
    company: "DataWizards",
    role: "Ingeniero de Datos",
    period: "2021 - 2023",
    description: "Implementación de pipelines de datos y visualización interactiva para grandes volúmenes."
  }
];

const education = [
  {
    institution: "Universidad de la Innovación",
    degree: "Grado en Ingeniería Informática",
    period: "2017 - 2021",
    description: "Especialización en desarrollo web, IA y sistemas distribuidos."
  },
  {
    institution: "Platzi",
    degree: "Certificación en Cloud Computing",
    period: "2022",
    description: "Arquitectura y despliegue de aplicaciones en la nube."
  }
];

const cardVariants = {
  initial: { opacity: 0, y: 40, scale: 0.95 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.2 + i * 0.15, type: "spring", stiffness: 60 }
  })
};

export function ExperienceSection() {
  return (
    <section className="level-section">
      <h2 className="level-title exp-gradient">Experiencia</h2>
      <div className="level-cards">
        {experience.map((exp, i) => (
          <motion.div
            className="level-card"
            key={exp.company}
            custom={i}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div className="level-card-header">
              <span className="level-card-role">{exp.role}</span>
              <span className="level-card-period">{exp.period}</span>
            </div>
            <div className="level-card-company">{exp.company}</div>
            <div className="level-card-desc">{exp.description}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section className="level-section">
      <h2 className="level-title edu-gradient">Formación</h2>
      <div className="level-cards">
        {education.map((edu, i) => (
          <motion.div
            className="level-card"
            key={edu.institution}
            custom={i}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div className="level-card-header">
              <span className="level-card-role">{edu.degree}</span>
              <span className="level-card-period">{edu.period}</span>
            </div>
            <div className="level-card-company">{edu.institution}</div>
            <div className="level-card-desc">{edu.description}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
