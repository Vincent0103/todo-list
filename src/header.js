import MenuIcon from "./assets/menu.svg";

function addSlogan() {
  const h2 = document.createElement("h2");
  h2.textContent = "todowht";

  return h2;
}

const addHeader = (() => {
  function content() {
    const headerContainer = document.createElement("div");
    headerContainer.classList.add("header-container");
    headerContainer.innerHTML += MenuIcon
    headerContainer.appendChild(addSlogan());

    return headerContainer;
  }
  return {content};
})();


export default addHeader;