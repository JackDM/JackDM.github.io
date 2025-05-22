import React from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";

const experience = [
	{
		company: "TechNova",
		role: "Desarrollador Full Stack",
		period: "2023 - Actualidad",
		description:
			"Desarrollo de aplicaciones web modernas con React, Node.js y despliegue en la nube.",
	},
	{
		company: "DataWizards",
		role: "Ingeniero de Datos",
		period: "2021 - 2023",
		description:
			"Implementación de pipelines de datos y visualización interactiva para grandes volúmenes.",
	},
];

const education = [
	{
		institution: "Universidad de la Innovación",
		degree: "Grado en Ingeniería Informática",
		period: "2017 - 2021",
		description:
			"Especialización en desarrollo web, IA y sistemas distribuidos.",
	},
	{
		institution: "Platzi",
		degree: "Certificación en Cloud Computing",
		period: "2022",
		description:
			"Arquitectura y despliegue de aplicaciones en la nube.",
	},
];

const cardVariants = {
	initial: { opacity: 0, y: 40, scale: 0.95 },
	animate: (i) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { delay: 0.2 + i * 0.15, type: "spring", stiffness: 60 },
	}),
};

function LevelsSection() {
	const [modal, setModal] = React.useState(null); // {type: 'exp'|'edu', index: number}

	return (
		<>
			<section className="level-section" style={{ marginTop: 0, position: 'relative', background: 'none', boxShadow: 'none', borderRadius: 0, padding: 0 }}>
				{/* Experiencia */}
				<h2 className="projects-title" style={{ margin: '4rem 0 2.5rem 0' }}>Experiencia</h2>
				<div className="level-cards" style={{ marginBottom: '4rem' }}>
					{experience.map((exp, i) => (
						<div
							className="level-card-hover-wrapper"
							key={exp.company}
							onClick={() => setModal({ type: 'exp', index: i })}
							style={{ position: 'relative', cursor: 'pointer' }}
						>
							<motion.div
								className="level-card"
								custom={i}
								initial="initial"
								whileInView="animate"
								viewport={{ once: true }}
								variants={cardVariants}
							>
								<div className="level-card-header">
									<span className="level-card-role exp-gradient" style={{whiteSpace: "nowrap", fontSize: "1.05rem"}}>{exp.role}</span>
								</div>
								<div className="level-card-company exp-gradient" style={{whiteSpace: "nowrap", fontSize: "1.15rem"}}>{exp.company}</div>
								<div className="level-card-period exp-gradient" style={{margin: "0.2rem 0 0.7rem 0", fontSize: "1.05rem"}}>{exp.period}</div>
								<div className="level-card-desc" style={{whiteSpace: "normal", fontSize: "1rem"}}>{exp.description}</div>
							</motion.div>
						</div>
					))}
				</div>
				{/* Formación */}
				<h2 className="projects-title" style={{ margin: '2.5rem 0 2.5rem 0' }}>Formación</h2>
				<div className="level-cards">
					{education.map((edu, i) => (
						<div
							className="level-card-hover-wrapper"
							key={edu.institution}
							onClick={() => setModal({ type: 'edu', index: i })}
							style={{ position: 'relative', cursor: 'pointer' }}
						>
							<motion.div
								className="level-card"
								custom={i}
								initial="initial"
								whileInView="animate"
								viewport={{ once: true }}
								variants={cardVariants}
							>
								<div className="level-card-header">
									<span className="level-card-role edu-gradient" style={{whiteSpace: "nowrap", fontSize: "1.05rem"}}>{edu.degree}</span>
								</div>
								<div className="level-card-company edu-gradient" style={{whiteSpace: "nowrap", fontSize: "1.15rem"}}>{edu.institution}</div>
								<div className="level-card-period edu-gradient" style={{margin: "0.2rem 0 0.7rem 0", fontSize: "1.05rem"}}>{edu.period}</div>
								<div className="level-card-desc" style={{whiteSpace: "normal", fontSize: "1rem"}}>{edu.description}</div>
							</motion.div>
						</div>
					))}
				</div>
			</section>
			{/* Modal único para ambos bloques, fuera del section para overlay global */}
			{modal && modal.type === 'exp' && (
				<ModalDetails onClose={() => setModal(null)}>
					<h4 className="panel-title">Más detalles</h4>
					<p className="panel-desc">{experience[modal.index].company} — <span className="exp-gradient">{experience[modal.index].role}</span><br/><span className="level-card-period exp-gradient">{experience[modal.index].period}</span></p>
					<p className="panel-extra">{experience[modal.index].description}<br/><span style={{color:'#43e97b'}}>Contacto: contacto@{experience[modal.index].company.toLowerCase().replace(/\s/g,'')}.com</span></p>
				</ModalDetails>
			)}
			{modal && modal.type === 'edu' && (
				<ModalDetails onClose={() => setModal(null)}>
					<h4 className="panel-title">Más detalles</h4>
					<p className="panel-desc">{education[modal.index].institution} — <span className="edu-gradient">{education[modal.index].degree}</span><br/><span className="level-card-period edu-gradient">{education[modal.index].period}</span></p>
					<p className="panel-extra">{education[modal.index].description}<br/><span style={{color:'#21d4fd'}}>Web: www.{education[modal.index].institution.toLowerCase().replace(/\s/g,'')}.edu</span></p>
				</ModalDetails>
			)}
		</>
	);
}

function ModalDetails({ children, onClose }) {
	React.useEffect(() => {
		const onKey = (e) => { if (e.key === 'Escape') onClose(); };
		document.addEventListener('keydown', onKey);
		return () => document.removeEventListener('keydown', onKey);
	}, [onClose]);

	const modalContent = (
		<motion.div
			className="level-card-panel-modal-bg"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(20, 20, 40, 0.75)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
			onClick={onClose}
		>
			<motion.div
				className="level-card-panel-modal"
				initial={{ scale: 0.92, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 0.92, opacity: 0 }}
				transition={{ type: 'spring', stiffness: 220, damping: 22 }}
				style={{ position: 'relative', minWidth: 320, maxWidth: 400, background: 'rgba(30, 30, 60, 0.98)', borderRadius: '1.2rem', boxShadow: '0 8px 32px 0 #43e97b33, 0 1.5px 8px 0 #0008', padding: '2rem 2rem 1.5rem 2rem', color: '#fff', fontSize: '1.08rem', lineHeight: 1.6, zIndex: 10000, border: '2px solid #43e97b', textAlign: 'center' }}
				onClick={e => e.stopPropagation()}
			>
				<button onClick={onClose} style={{position:'absolute',top:12,right:16,background:'none',border:'none',color:'#43e97b',fontSize:'1.6rem',cursor:'pointer',fontWeight:700,lineHeight:1}} aria-label="Cerrar">×</button>
				{children}
			</motion.div>
		</motion.div>
	);
	return createPortal(modalContent, document.body);
}

export default LevelsSection;
