import header from "./header";
import sidebar from "./sidebar";
import addTodoView from "./todoView";

export default function addPage() {
  const htmlContainer = document.querySelector("#content");
  const sidebarPanelContainer = document.createElement("div");
  sidebarPanelContainer.classList.add("sidebar-panel-container");

  const headerContainer = header.addContent();
  const sidebarContainer = sidebar.addContent();
  const panelContainer = addTodoView.addContent();
  header.listenMenuSvg(headerContainer, sidebarContainer);
  htmlContainer.append(headerContainer, sidebarPanelContainer);
  sidebarPanelContainer.append(sidebarContainer, panelContainer);
}