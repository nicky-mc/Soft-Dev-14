const searchInput = document.getElementById("search");
const charactersContainer = document.getElementById("characters-container");

function fetchCharacters(query = "") {
  fetch(`https://rickandmortyapi.com/api/character?name=${query}`)
    .then((response) => response.json())
    .then((data) => {
      charactersContainer.innerHTML = "";
      data.results.forEach((character) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <img src="${character.image}" alt="${character.name}" class="character-image">
          <p class="character-detail"><span class="attribute">Name:</span> ${character.name}</p>
          <p class="character-detail"><span class="attribute">Status:</span> ${character.status}</p>
          <p class="character-detail"><span class="attribute">Species:</span> ${character.species}</p>
        `;
        charactersContainer.appendChild(card);
      });
    });
}

searchInput.addEventListener("input", (event) => {
  const query = event.target.value;
  fetchCharacters(query);
});
