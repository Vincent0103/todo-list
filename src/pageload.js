import header from "./header";
import sidebar from "./sidebar";
import addTodoView from "./todoView";

const addPage = (() => {
  let sidebarPanelContainer;
  function addContent() {
    const htmlContainer = document.querySelector("#content");
    sidebarPanelContainer = document.createElement("div");
    sidebarPanelContainer.classList.add("sidebar-panel-container");

    const headerContainer = header.addContent();
    const sidebarContainer = sidebar.addContent();
    const panelContainer = addTodoView.addContent("Inbox", 0);
    header.listenMenuSvg(headerContainer, sidebarContainer);
    htmlContainer.append(headerContainer, sidebarPanelContainer);
    sidebarPanelContainer.append(sidebarContainer, panelContainer);
  }

  function getSidebarPanelContainer() {
    return sidebarPanelContainer;
  }

  return {addContent, getSidebarPanelContainer};
})();

export default addPage;