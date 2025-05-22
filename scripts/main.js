const repos = [
  "etl-pipeline-spark"
  // Añade más repos aquí
];

const githubUser = "JackDM"

const container = document.getElementById("projects-container");

repos.forEach(repo => {
  const url = `https://raw.githubusercontent.com/${githubUser}/${repo}/main/metadata.json`;

  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`No se encontró metadata en ${repo}`);
      return res.json();
    })
    .then(data => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.description}</p>
        <p><strong>Tecnologías:</strong> ${data.tech.join(", ")}</p>
        <a href="${data.github}" target="_blank">🔗 Ver en GitHub</a>
      `;
      container.appendChild(card);
    })
    .catch(err => console.warn(`⚠️ ${err.message}`));
});
