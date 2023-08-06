import MenuIcon from "./assets/menu.svg";


const header = (() => {
  function addContent() {
    const headerContainer = document.createElement("div");
    headerContainer.classList.add("header-container");
    headerContainer.innerHTML += MenuIcon
    headerContainer.appendChild(addSlogan());

    return headerContainer;
  }

  function addSlogan() {
    const h2 = document.createElement("h2");
    h2.textContent = "todowht";

    return h2;
  }

  return {addContent};
})();


export default header;