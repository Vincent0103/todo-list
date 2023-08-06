import MenuIcon from "./assets/menu.svg";
import { slideSidebarContainer } from "./sidebar";

const header = (() => {
  let menuSvg;

  function addContent() {
    const headerContainer = document.createElement("div");
    headerContainer.classList.add("header-container");
    headerContainer.innerHTML += MenuIcon;

    headerContainer.appendChild(addSlogan());

    return headerContainer;
  }

  function addSlogan() {
    const h2 = document.createElement("h2");
    h2.textContent = "todowht";

    return h2;
  }

  function listenMenuSvg(headerContainer, sidebarContainer) {
    menuSvg = headerContainer.querySelector("svg");
    menuSvg.addEventListener("click", () => {
      slideSidebarContainer(sidebarContainer);
    });
  }

  return {addContent, listenMenuSvg};
})();


export default header;