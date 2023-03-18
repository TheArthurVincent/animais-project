export default function initAnima() {}
const numeros = document.querySelectorAll("[data-numero]");
console.log(numeros);
numeros.forEach((num) => {
  // o + é pra transformar string em número

  const onumero = +num.innerText;
  let start = 0;
  const incremento = Math.floor(onumero / 100);
  // const incremento = onumero / 100;
  const timer = setInterval(() => {
    start = start + incremento;
    num.innerText = start;
    // console.log(start);
    if (start >= onumero) clearInterval(timer);
    // if ((incremento = onumero)) clearInterval(timer);
  }, 100);
  console.log(onumero);
});
