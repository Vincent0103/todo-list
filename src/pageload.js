import header from "./header";
import sidebar from "./sidebar";
import addTodoView from "./todoView";

export default function addPage() {
  const htmlContainer = document.querySelector("#content");
  const sidebarContainer = sidebar.addContent();
  const headerContainer = header.addContent();
  header.listenMenuSvg(headerContainer, sidebarContainer);
  htmlContainer.append(headerContainer, sidebarContainer);
}