export default function initNavTab() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  tabContent[0].classList.replace("inativo", "ativo");

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.replace("ativo", "inativo");
    });
    tabContent[index].classList.replace("inativo", "ativo");
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add(direcao);
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeTab(index);
    });
  });
}

console.log("a");
