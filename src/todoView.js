import MenuDown from "./assets/menu-down.svg";
import PlusIcon from "./assets/plus-circle-outline.svg";
import formPanel from "./formView";

const panel = (() => {
  let currentProjectId = false;
  let panelContainer;

  function addContent(projectId=0) {
    currentProjectId = projectId;
    return getProperPanelDisplay();

    function getProperPanelDisplay() {
      panelContainer = document.createElement("div");
      panelContainer.classList.add("panel-container");

      if (currentProjectId === 0) {
        const h1 = document.createElement("h1");
        h1.textContent = "Inbox";

        const hr = document.createElement("hr");

        panelContainer.append(h1, hr);
        todo.addTodoContent(panelContainer, currentProjectId);
      }


      return panelContainer;
    }
  }

  const todo = (() => {
    function addTodoContent(panelContainer, projectId) {
      addTodoTemplateContent();

      let inboxProjectTodos = todoLogic.objects.getProjectsTodoListObj()[projectId];
      console.log(inboxProjectTodos);
      panelContainer.appendChild(addTodoFormBtnLink());

      inboxProjectTodos.forEach(todo => {
        addTodoContainer(todo)
      })
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

    function addTodoContainer(currentTodoObj, priorityColor="gray") {
      const panelContainer = getPanelContainer();

      const todoContainer = document.createElement("div");
      todoContainer.classList.add("todo-container");

      const checkMarkContainer = document.createElement("div");
      checkMarkContainer.classList.add("check-mark-container");

      const title = document.createElement("p");
      title.textContent = currentTodoObj.title;

      const dueDate = document.createElement("p");
      dueDate.textContent = todoLogic.convertDate(currentTodoObj.dueDate);
      todoContainer.append(checkMarkContainer, title, dueDate);
      todoContainer.innerHTML += MenuDown;

      const desc = document.createElement("p");
      desc.classList.add("todo-desc");
      desc.textContent = currentTodoObj.desc;
      todoContainer.appendChild(desc);
      todoLogic.listeners.listenTodoContainer(todoContainer, desc);
      insertBeforeDiv();

      changeTodoContainerStyle(todoContainer, priorityColor);

      function insertBeforeDiv() {
        const insertBeforeDiv = panelContainer.querySelector(".todo-container:nth-child(4)");
        panelContainer.insertBefore(todoContainer, insertBeforeDiv);
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

    function addTodoTemplateContent() {
      let currentTodoObj = todoLogic.objects.addTodoObj(
        "Master Plan of Achievements: Today's Tasks",
        "Stay organized and on top of your tasks with this comprehensive to-do list. Whether you're tackling work assignments.",
        "2023-09-24T12:17");

      todoLogic.objects.addProjectTodoList(0, currentTodoObj);

      currentTodoObj = todoLogic.objects.addTodoObj(
        "TaskTrek: Navigating Your Day's Endeavors",
        "Effortlessly manage tasks, boost productivity, and achieve more with TaskTrek.",
        "2028-11-23T18:21");

      todoLogic.objects.addProjectTodoList(0, currentTodoObj);

      currentTodoObj = todoLogic.objects.addTodoObj(
        "Spectrum Serenade: Echoes of Imagination",
        "Embark on a vivid journey through diverse realms of creativity in Spectrum Serenade.",
        "2043-07-25T03:43");

      todoLogic.objects.addProjectTodoList(0, currentTodoObj);

      currentTodoObj = todoLogic.objects.addTodoObj(
        "Whispering Shadows: Secrets Unveiled",
        "");

      todoLogic.objects.addProjectTodoList(0, currentTodoObj);
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

    return {addTodoContent, addTodoContainer, containsDesc};
  })()

  return {addContent, todo};
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
      if (!(projectId in projectsTodoListObj)) {
        projectsTodoListObj[projectId] = [todoObj];
      } else {
        projectsTodoListObj[projectId].unshift(todoObj);
      }
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

    return {getProjectsTodoListObj, getPriorityStyling, addProjectTodoList, addTodoObj};
  })();

  const listeners = (() => {
    function listenTodoContainer(todoContainer, todoDesc) {
      if (panel.todo.containsDesc(todoContainer, todoDesc)) {
        todoContainer.addEventListener("click", () => {
          if (!todoContainer.classList.contains("expandable")) {
            todoContainer.classList.add("expandable");
            listenTodoDesc(todoContainer, todoDesc);
          } else {
            todoContainer.classList.remove("expandable");

            // removes inline styling from js
            todoContainer.style.gridTemplateRows = null;
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
        });
      }
    }

    function listenTodoBtnFormContainer(todoFormBtnContainer) {
      todoFormBtnContainer.addEventListener("click", () => {
        document.body.appendChild(formPanel.displayFormContainer());
      })
    }

    return {listenTodoContainer, listenTodoBtnFormContainer};
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
export const todoLogicModule = todoLogic;