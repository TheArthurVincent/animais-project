const listaDePerguntas = document.querySelectorAll(".js-accordion dt");
export function mostrarResposta() {
  console.log(this.nextElementSibling.classList.toggle("ativo"));
  console.log(this.nextElementSibling.classList.toggle("inativo"));
}

listaDePerguntas.forEach((pergunta) => {
  pergunta.addEventListener("click", mostrarResposta);
});
