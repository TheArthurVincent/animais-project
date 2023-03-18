export default function initFetchAnimais() {}
console.log("s");

async function fetchAnimais(url) {
  const animaisResponse = await fetch(url);
  const animaisJSON = await animaisResponse.json();
  const numerosGrid = document.querySelector(".todos");

  animaisJSON.forEach((animal) => {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  });

  animaisJSON.forEach((animal) => {
    const divAnimal = createAnimal(animal);
    console.log(divAnimal);
  });
}
function createAnimal(animal) {
  const div = document.createElement("div");
  div.classList.add("numeros-grid");

  div.innerHTML = `<h3>${animal.especie}</h3>      <span data-numero>${animal.total}</span>`;
  return div;
}
fetchAnimais("./animaisapi.json");
