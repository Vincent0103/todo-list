import MenuDown from "./assets/menu-down.svg";
import PlusIcon from "./assets/plus-circle-outline.svg";

const todoPanel = (() => {
  let currentProjectId = false;

  function addContent(projectId=0) {
    currentProjectId = projectId;
    return getProperPanelDisplay();

  }

  function getProperPanelDisplay() {
    const panelContainer = document.createElement("div");
    panelContainer.classList.add("panel-container");

    if (currentProjectId === 0) {
      const h1 = document.createElement("h1");
      h1.textContent = "Inbox";

      const hr = document.createElement("hr");

      panelContainer.append(h1, hr);
      addTodoContent(panelContainer);
    }

    function addTodoContent(panelContainer) {
      addTodoTemplateContent();

      let inboxProjectTodos = todoLogic.getProjectsTodoListObj()[0];
      panelContainer.appendChild(addTodoFormLink());

      inboxProjectTodos.forEach(todoData => {
        const todoContainer = document.createElement("div");
        todoContainer.classList.add("todo-container");

        const checkMarkContainer = document.createElement("div");
        checkMarkContainer.classList.add("check-mark-container");

        const title = document.createElement("p");
        title.textContent = todoData.title;

        const dueDate = document.createElement("p");
        dueDate.textContent = todoData.dueDate;

        todoContainer.append(checkMarkContainer, title, dueDate);
        todoContainer.innerHTML += MenuDown;

        const desc = document.createElement("p");
        desc.classList.add("todo-desc");
        desc.textContent = todoData.desc;
        todoContainer.appendChild(desc);
        todoLogic.listenTodoContainer(todoContainer, desc);

        panelContainer.appendChild(todoContainer);
      })
    }

    return panelContainer;
  }

  function addTodoFormLink() {
    const todoFormContainer = document.createElement("div");
    todoFormContainer.classList.add("todo-container");
    todoFormContainer.classList.add("todo-form-container");

    const plusCircleSvg = PlusIcon;
    todoFormContainer.innerHTML = plusCircleSvg;

    const p = document.createElement("p");
    p.textContent = "ADD TODO";
    todoFormContainer.appendChild(p);

    return todoFormContainer;
  }

  function addTodoTemplateContent() {
    let currentTodoObj = todoLogic.addTodoObj(
      "Master Plan of Achievements: Today's Tasks",
      "Stay organized and on top of your tasks with this comprehensive to-do list. Whether you're tackling work assignments.",
      "18/09/24");

    todoLogic.addProjectTodoList(0, currentTodoObj);

    currentTodoObj = todoLogic.addTodoObj(
      "TaskTrek: Navigating Your Day's Endeavors",
      "Effortlessly manage tasks, boost productivity, and achieve more with TaskTrek.",
      "28/11/23");

    todoLogic.addProjectTodoList(0, currentTodoObj);

    currentTodoObj = todoLogic.addTodoObj(
      "Spectrum Serenade: Echoes of Imagination",
      "Embark on a vivid journey through diverse realms of creativity in Spectrum Serenade.",
      "13/07/25");

    todoLogic.addProjectTodoList(0, currentTodoObj);

    currentTodoObj = todoLogic.addTodoObj(
      "Whispering Shadows: Secrets Unveiled",
      "Delve into a gripping tale of intrigue and discovery as Whispering Shadows reveals hidden truths.");

    todoLogic.addProjectTodoList(0, currentTodoObj);
  }

  return {addContent};
})();

const todoLogic = (() => {
  let projectsTodoListObj = {};

  function getProjectsTodoListObj() {
    return projectsTodoListObj;
  }

  function addTodoObj(title, desc="", dueDate=null, priority=0, isDone=false) {
    if (desc.length >= 160) {
      throw new Error("Description is longer than 160 characters!");
    } else if (title.length <= 3 || title.length >= 60) {
      throw new Error("title is less than 3 characters or longer than 60 characters!");
    } else if (dueDate !== null && !matchValidDate(dueDate)) {
      throw new Error("Invalid date format!");
    }

    const toStr = () => {
      return `Current todo: \"${this.title}\", desc: \"${this.desc}\", due in ${this.dueDate} of priority ${priority}`;
    }

    return {title, desc, dueDate, priority, isDone, toStr};
  }

  function matchValidDate(str) {
    return (str.match(/^(?:[0][1-9]|[1-2][0-9]|[3][0-1])\/(?:[0][1-9]|[1][0-2])\/(?:[2][3-9]|[3-9][0-9])$/gm))
    ? true : false;
  }

  function addProjectTodoList(projectId, todoObj) {
    projectId = String(projectId);
    if (!(projectId in projectsTodoListObj)) {
      projectsTodoListObj[projectId] = [todoObj];
    } else {
      projectsTodoListObj[projectId].push(todoObj);
    }
  }

  function listenTodoContainer(todoContainer, todoDesc) {
    todoContainer.addEventListener("click", () => {
      if (!todoContainer.classList.contains("expandable")) {
        todoContainer.classList.add("expandable");
        listenTodoDesc(todoContainer, todoDesc);
      } else {
        todoContainer.classList.remove("expandable");

        // removes inline styling from js
        todoContainer.style.gridTemplateRows = null;
      }
    });
  }

  function listenTodoDesc(todoContainer, todoDesc) {
    let descHeight;

    // create an Observer instance
    const resizeObserver = new ResizeObserver(entries => {
      console.log('Body height changed:', entries[0].target.clientHeight);
      descHeight = entries[0].target.clientHeight;

      changeGridTemplateRowHeight();
    });

    // start observing a DOM node
    resizeObserver.observe(todoDesc);

    // makes it so the todoDesc content doesn't overflow in a manner of dynamicity
    function changeGridTemplateRowHeight() {
      if (todoContainer.classList.contains("expandable")) {
        if (descHeight <= 116) {
          todoContainer.style.gridTemplateRows = `auto ${descHeight + 20}px`;
        } else {
          todoContainer.style.gridTemplateRows = `auto ${136}px`;
        }
      }
    }
  }

  return {addTodoObj, addProjectTodoList, getProjectsTodoListObj, listenTodoContainer, listenTodoDesc};
})();

export default todoPanel;