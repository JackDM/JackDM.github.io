document.addEventListener("DOMContentLoaded", () => {
  fetch("projects.json")
    .then((res) => res.json())
    .then((projects) => {
      const container = document.getElementById("projects-container");
      projects.forEach((project) => {
        const card = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = `
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <p><strong>Tech:</strong> ${project.tech.join(", ")}</p>
          <a href="${project.github}" target="_blank">Ver en GitHub</a>
        `;
        container.appendChild(card);
      });
    });
});
