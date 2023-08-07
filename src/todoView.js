import MenuDown from "./assets/menu-down.svg";

const todoPanel = (() => {
  let currentProjectId = false;

  function addContent(projectId=false) {
    currentProjectId = projectId;
    return getProperPanelDisplay();

  }

  function getProperPanelDisplay() {
    const panelContainer = document.createElement("div");
    panelContainer.classList.add("panel-container");

    if (!currentProjectId) {
      console.log("in inboxTab");
      const h1 = document.createElement("h1");
      h1.textContent = "Inbox";

      const hr = document.createElement("hr");

      panelContainer.append(h1, hr, addTodoContent());
    }

    function addTodoContent() {
      const todoContainer = document.createElement("div");
      todoContainer.classList.add("todo-container");

      const checkMarkContainer = document.createElement("div");
      checkMarkContainer.classList.add("check-mark-container");

      const title = document.createElement("p");
      title.textContent = "Sed consectetur";

      const dueDate = document.createElement("p");
      dueDate.textContent = "12/08/23";

      todoContainer.append(checkMarkContainer, title, dueDate);
      todoContainer.innerHTML += MenuDown;

      const desc = document.createElement("p");
      desc.classList.add("todo-desc");
      desc.textContent = "Phasellus sodales mollis dictum. Etiam a luctus urna, eu varius ante. Integer sit amet lorem sit amet nibh finibus scelerisque eget a justo. Aliquam vulputate, quam nec aliquam semper, augue quam aliquam velit, in dapibus est leo at nulla. Ut pulvinar leo vitae ullamcorper porttitor.";
      todoContainer.appendChild(desc);
      todoLogic.listenTodoContainer(todoContainer);

      return todoContainer;
    }

    return panelContainer;
  }

  return {addContent};
})();

const todoLogic = (() => {
  let projectTodoListObj = {};
  function addTodoObj(title, desc="", dueDate, priority, isDone=false) {
    const toStr = () => {
      return `Current todo: \"${this.title}\", desc: \"${this.desc}\", due in ${this.dueDate} of priority ${priority}`;
    }

    return {title, desc, dueDate, priority, isDone, toStr};
  }

  function addProjectTodoList(projectId, todoObj) {
    if (!projectId in projectTodoListObj) {
      projectTodoListObj[projectId] = [todoObj];
    } else {
      projectTodoListObj[projectId].push(todoObj);
    }
  }

  function listenTodoContainer(todoContainer) {
    console.log(todoContainer);
    todoContainer.addEventlistener("click", () => {
      if (!todoContainer.classList.contains("expandable")) {
        todoContainer.classList.add("expandable");
      } else {
        todoContainer.classList.remove("expandable");
      }
    });
  }

  return {addTodoObj, listenTodoContainer};
})();

export default todoPanel;