import MenuDown from "./assets/menu-down.svg";
import PlusIcon from "./assets/plus-circle-outline.svg";
import formPanel from "./formView";

const panel = (() => {
  let currentProjectId = false;

  function addContent(projectId=0) {
    currentProjectId = projectId;
    return getProperPanelDisplay();

    function getProperPanelDisplay() {
      const panelContainer = document.createElement("div");
      panelContainer.classList.add("panel-container");

      if (currentProjectId === 0) {
        const h1 = document.createElement("h1");
        h1.textContent = "Inbox";

        const hr = document.createElement("hr");

        panelContainer.append(h1, hr);
        todo.addTodoContent(panelContainer);
      }


      return panelContainer;
    }
  }

  const todo = (() => {
    function addTodoContent(panelContainer) {
      addTodoTemplateContent();

      let inboxProjectTodos = todoLogic.objects.getProjectsTodoListObj()[0];
      panelContainer.appendChild(addTodoFormBtnLink());

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
        todoLogic.listeners.listenTodoContainer(todoContainer, desc);

        panelContainer.appendChild(todoContainer);
      })
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
        "18/09/24");

      todoLogic.objects.addProjectTodoList(0, currentTodoObj);

      currentTodoObj = todoLogic.objects.addTodoObj(
        "TaskTrek: Navigating Your Day's Endeavors",
        "Effortlessly manage tasks, boost productivity, and achieve more with TaskTrek.",
        "28/11/23");

      todoLogic.objects.addProjectTodoList(0, currentTodoObj);

      currentTodoObj = todoLogic.objects.addTodoObj(
        "Spectrum Serenade: Echoes of Imagination",
        "Embark on a vivid journey through diverse realms of creativity in Spectrum Serenade.",
        "13/07/25");

      todoLogic.objects.addProjectTodoList(0, currentTodoObj);

      currentTodoObj = todoLogic.objects.addTodoObj(
        "Whispering Shadows: Secrets Unveiled",
        "Delve into a gripping tale of intrigue and discovery as Whispering Shadows reveals hidden truths.");

      todoLogic.objects.addProjectTodoList(0, currentTodoObj);
    }

    return {addTodoContent, addTodoFormBtnLink, addTodoTemplateContent};
  })()

  return {addContent, todo};
})();

const todoLogic = (() => {
  let projectsTodoListObj = {};

  const objects = (() => {
    function getProjectsTodoListObj() {
      return projectsTodoListObj;
    }

    function addProjectTodoList(projectId, todoObj) {
      projectId = String(projectId);
      if (!(projectId in projectsTodoListObj)) {
        projectsTodoListObj[projectId] = [todoObj];
      } else {
        projectsTodoListObj[projectId].push(todoObj);
      }
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

    return {getProjectsTodoListObj, addProjectTodoList, addTodoObj};
  })();

  const listeners = (() => {
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
    }

    function listenTodoBtnFormContainer(todoFormBtnContainer) {
      todoFormBtnContainer.addEventListener("click", () => {
        document.body.appendChild(formPanel.displayFormContainer());
      })
    }

    return {listenTodoContainer, listenTodoBtnFormContainer};
  })();

  function matchValidDate(str) {
    return (str.match(/^(?:[0][1-9]|[1-2][0-9]|[3][0-1])\/(?:[0][1-9]|[1][0-2])\/(?:[2][3-9]|[3-9][0-9])$/gm))
    ? true : false;
  }

  return {objects, listeners};
})();

export default panel;