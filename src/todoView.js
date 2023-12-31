import MenuDown from "./assets/menu-down.svg";
import PlusIcon from "./assets/plus-circle-outline.svg";
import formPanel from "./formView";
import { removeToStorageFunc, removeProjectObjFromStorageFunc } from "./storageHandler";

const panel = (() => {
  let currentProjectId;
  let idIncrementor;
  let panelContainer;

  function addContent(projectName, projectId) {
    currentProjectId = Number.parseInt(projectId);
    idIncrementor = 0;
    return getProperPanelDisplay();

    function getProperPanelDisplay() {
      panelContainer = document.createElement("div");
      panelContainer.classList.add("panel-container");

      const h1 = document.createElement("h1");
      h1.textContent = projectName;

      const hr = document.createElement("hr");

      panelContainer.append(h1, hr);
      todo.addTodoContent(panelContainer, currentProjectId);


      return panelContainer;
    }
  }

  function getCurrentProjectId() {
    return currentProjectId;
  }

  function getIdIncrementor() {
    return idIncrementor;
  }

  const todo = (() => {
    function addTodoContent(panelContainer, projectId) {

      let inboxProjectTodos = todoLogic.objects.getProjectsTodoListObj()[projectId];
      panelContainer.appendChild(addTodoFormBtnLink());

      if (typeof inboxProjectTodos === "object") {
        inboxProjectTodos.forEach(todo => {
          addTodoContainer(todo);
        })
      }
    }

    function changeTodoContainerStyle(todoContainer, color) {
      const checkMarkContainer = todoContainer.querySelector(".check-mark-container");
      const currentStylingBundle = todoLogic.objects.getPriorityStyling(color);

      checkMarkContainer.style.backgroundColor = currentStylingBundle.bgc;
      todoContainer.style.borderColor = currentStylingBundle.borderContainerColor;
      checkMarkContainer.style.borderColor = currentStylingBundle.borderColor;

      checkMarkContainer.addEventListener("mouseenter", () => {
        checkMarkContainer.style.backgroundColor = currentStylingBundle.hoverBgc;
      })
      checkMarkContainer.addEventListener("mouseleave", () => {
        checkMarkContainer.style.backgroundColor = currentStylingBundle.bgc;
      })
    }

    function addTodoContainer(currentTodoObj) {
      const panelContainer = getPanelContainer();

      const todoContainer = document.createElement("div");
      todoContainer.classList.add("todo-container");
      todoContainer.setAttribute("data-id", idIncrementor);

      const checkMarkContainer = document.createElement("div");
      checkMarkContainer.classList.add("check-mark-container");

      const title = document.createElement("p");
      title.textContent = currentTodoObj.title;

      const dueDate = getDueDate(currentTodoObj.dueDate);

      todoContainer.append(checkMarkContainer, title, dueDate);
      todoContainer.innerHTML += MenuDown;

      const desc = document.createElement("p");
      desc.classList.add("todo-desc");
      desc.textContent = currentTodoObj.desc;
      todoContainer.appendChild(desc);
      todoLogic.listeners.listenTodoContainer(todoContainer, desc);
      insertBeforeDiv();

      changeTodoContainerStyle(todoContainer, currentTodoObj.priority);
      idIncrementor++;

      function insertBeforeDiv() {
        const insertBeforeDiv = panelContainer.querySelector(".todo-container:nth-child(4)");
        panelContainer.insertBefore(todoContainer, insertBeforeDiv);
      }

    }

    function removeTodoContainer(todoContainer) {
      const todoObjId = todoContainer.getAttribute("data-id");
      removeToStorageFunc(todoObjId, currentProjectId);
      todoLogic.objects.removeTodoObj(todoObjId, currentProjectId);
      handleTodoContainerRemoveAnimation();

      function handleTodoContainerRemoveAnimation() {
        if (todoContainer.classList.contains("expandable")) {
          todoContainer.classList.remove("expandable");
          todoContainer.style.gridTemplateRows = `auto 0px`;
        }
        todoContainer.style.zIndex = "-1";
        formPanel.addAnimation(todoContainer, "slideUp", .5);
        setTimeout(() => todoContainer.remove(), 480);
      }
    }

    function addTodoFormBtnLink() {
      const todoFormBtnContainer = document.createElement("div");
      todoFormBtnContainer.classList.add("todo-container");
      todoFormBtnContainer.classList.add("todo-form-btn-container");

      const plusCircleSvg = PlusIcon;
      todoFormBtnContainer.innerHTML = plusCircleSvg;

      const p = document.createElement("p");
      p.textContent = "ADD TODO";
      todoFormBtnContainer.appendChild(p);
      todoLogic.listeners.listenTodoBtnFormContainer(todoFormBtnContainer);

      return todoFormBtnContainer;
    }

    function getPanelContainer() {
      return panelContainer;
    }

    function containsDesc(todoContainer, desc) {
      if (desc.textContent.length <= 0) {
        todoContainer.removeChild(todoContainer.querySelector("svg"));
        todoContainer.style.cursor = "default";
        return false;
      }
      return true;
    }

    function getDueDate(formDueDate) {
      let dueDate = document.createElement("p");

      const containsDueDate = element => {
        element = (formDueDate)
        ? element.innerHTML = `<span>to: </span>${todoLogic.convertDate(formDueDate)}`
        : element.innerHTML = "";

        return dueDate;
      }
      dueDate = containsDueDate(dueDate);

      dueDate.classList.add("todo-due-date");

      return dueDate;
    }

    function handleExpandableClass(todoContainer, todoDesc) {
      if (!todoContainer.classList.contains("expandable")) {
        todoContainer.classList.add("expandable");
        todoLogic.listeners.listenTodoDesc(todoContainer, todoDesc);
      } else {
        todoContainer.classList.remove("expandable");

        // removes inline styling from js
        todoContainer.style.gridTemplateRows = null;
      }
    }

    return {addTodoContent, removeTodoContainer, addTodoContainer, containsDesc, handleExpandableClass};
  })()

  return {addContent, getIdIncrementor, getCurrentProjectId, todo};
})();

const todoLogic = (() => {
  let projectsTodoListObj = {};

  const objects = (() => {
    function getProjectsTodoListObj() {
      return projectsTodoListObj;
    }

    function getPriorityStyling(forColor) {
      let borderColor;
      let bgc;
      let hoverBgc;
      let borderContainerColor;

      if (forColor === "red") {
        borderColor = "#ef233c";
        borderContainerColor = "#ff9aa7";
        bgc = "#f6dad8";
        hoverBgc = "#f7c1be";
      } else if (forColor === "orange") {
        borderColor = "#ed9f11";
        borderContainerColor = "#ffcb6d";
        bgc = "#fff1de";
        hoverBgc = "#ffdfb5";
      } else if (forColor === "blue") {
        borderColor = "#2079ff";
        borderContainerColor = "#afafff";
        bgc = "#e1edff";
        hoverBgc = "#bbd6ff";
      } else if (forColor === "gray") {
        borderColor = "#696969";
        borderContainerColor = "#c8c8c8";
        bgc = "#ebebeb";
        hoverBgc = "#d9d9d9";
      }

      return {borderColor, bgc, hoverBgc, borderContainerColor};
    }

    function addProjectTodoList(projectId, todoObj) {
      projectId = String(projectId);
      if (!(projectId in projectsTodoListObj) && !todoObj) {
        projectsTodoListObj[projectId] = [];

      } else if (!(projectId in projectsTodoListObj) && todoObj) {
          projectsTodoListObj[projectId] = [todoObj];

      } else {
        projectsTodoListObj[projectId].push(todoObj);
      }
    }

    function removeProjectTodoList(projectId) {
      delete projectsTodoListObj[projectId];
      console.log(removeProjectObjFromStorageFunc(projectId));
    }

    function addTodoObj(title, desc="", dueDate="", priority="gray", isDone=false) {
      if (desc.length >= 160) {
        throw new Error(`Description is longer than 160 characters! \n${desc}`);
      } else if (title.length < 3 || title.length >= 60) {
        throw new Error(`title is less than 3 characters or longer than 60 characters! \n${title}`);
      } else if (dueDate !== "" && !matchValidDate(dueDate)) {
        throw new Error(`Invalid date format! \n${dueDate}`);
      }

      const toStr = () => {
        return `Current todo: \"${title}\", desc: \"${desc}\", due in ${dueDate} of priority ${priority}`;
      }


      return {title, desc, dueDate, priority, isDone, toStr};
    }

    function removeTodoObj(todoObjId, projectId) {
      getProjectsTodoListObj()[projectId].splice(todoObjId, 1);
    }

    return {getProjectsTodoListObj, getPriorityStyling, addProjectTodoList,
      addTodoObj, removeTodoObj, removeProjectTodoList};
  })();

  const listeners = (() => {
    function listenTodoContainer(todoContainer, todoDesc) {
      if (panel.todo.containsDesc(todoContainer, todoDesc)) {
        todoContainer.addEventListener("click", e => {
          if (e.target.className === "check-mark-container") {
            listenCheckMarkContainer(e.target.parentElement);
          } else {
            panel.todo.handleExpandableClass(todoContainer, todoDesc);
          }

        });
      } else {
        todoContainer.addEventListener("click", e => {
          if (e.target.className === "check-mark-container") {
            listenCheckMarkContainer(e.target.parentElement);
          }
        });
      }

      function listenCheckMarkContainer(todoContainer) {
        panel.todo.removeTodoContainer(todoContainer);
      }
    }

    function listenTodoBtnFormContainer(todoFormBtnContainer) {
      todoFormBtnContainer.addEventListener("click", () => {
        document.body.appendChild(formPanel.displayFormContainer());
      })
    }

    function listenTodoDesc(todoContainer, todoDesc) {
      let descHeight;
      let hasExecutedOnce = false;

      // create an Observer instance
      const resizeObserver = new ResizeObserver(entries => {
        descHeight = entries[0].target.clientHeight;

        if (!hasExecutedOnce) {
          changeGridTemplateRowHeight();
        }
      });

      // start observing a DOM node
      resizeObserver.observe(todoDesc);

      // makes it so the todoDesc content doesn't overflow in a manner of dynamicity
      function changeGridTemplateRowHeight() {
        hasExecutedOnce = true;
        if (descHeight <= 116) {
          todoContainer.style.gridTemplateRows = `auto ${descHeight + 20}px`;
        } else {
          todoContainer.style.gridTemplateRows = `auto ${136}px`;
        }
      }
    }

    return {listenTodoContainer, listenTodoBtnFormContainer, listenTodoDesc};
  })();

  function matchValidDate(str) {
    return (str.match(/^[2][0](?:[2][3-9]|[3-9][0-9])-(?:[0][1-9]|[1][0-2])-(?:[0][1-9]|[1-2][0-9]|[3][0-1])T(?:[0-1][[0-9]|[2][0-3]):(?:[0-5][0-9])$/gm))
    ? true : false;
  }

  function convertDate(str) {
    return (str === "")
    ? ""
    : str.substring(0, str.indexOf("T"))
     + " at " +
     str.substring(str.indexOf("T") + 1, str.length);
  }

  return {objects, listeners, convertDate};
})();

export default panel;
export const addTodoContainer = panel.todo.addTodoContainer;
export const getCurrentProjectId = panel.getCurrentProjectId;
export const todoLogicModule = todoLogic;