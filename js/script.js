import initNavTab from "./modulos/init-nav-tab.js";
initNavTab();
import initAnima from "./modulos/init-anima-numeros.js";
import initFetchAnimais from "./modulos/fechanimais.js";
initNavTab();
initAnima();
initFetchAnimais();

const listaDePerguntas = document.querySelectorAll(".js-accordion dt");
function mostrarResposta() {
  console.log(this.nextElementSibling.classList.toggle("ativo"));
  console.log(this.nextElementSibling.classList.toggle("inativo"));
}

listaDePerguntas.forEach((pergunta) => {
  pergunta.addEventListener("click", mostrarResposta);
});
