import addHeader from "./header";
import addSidebar from "./sidebar";
import addTodoView from "./todoView";

export default function addPage() {
  const htmlContainer = document.querySelector("#content");
  htmlContainer.appendChild(addHeader.content());
}