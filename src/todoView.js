

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

      panelContainer.appendChild(h1);
    }

    return panelContainer;
  }

  return {addContent};
})();

const todoLogic = (() => {
  let projectTodoListObj = {};
  function addTodoObj(title, desc, dueDate, priority) {
    const toStr = () => {
      return `Current todo: \"${this.title}\", desc: \"${this.desc}\", due in ${this.dueDate} of priority ${priority}`;
    }

    return {title, desc, dueDate, priority, toStr};
  }

  function addProjectTodoList(projectId, todoObj) {
    if (!projectId in projectTodoListObj) {
      projectTodoListObj[projectId] = [todoObj];
    } else {
      projectTodoListObj[projectId].push(todoObj);
    }
  }

  return {addTodoObj};
})();

export default todoPanel;