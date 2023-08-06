import header from "./header";
import sidebar from "./sidebar";
import addTodoView from "./todoView";

export default function addPage() {
  const htmlContainer = document.querySelector("#content");
  htmlContainer.append(header.addContent(), sidebar.addContent());
}