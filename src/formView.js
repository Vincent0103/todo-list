import CloseIcon from "./assets/close-thick.svg";
import CheckIcon from "./assets/check-bold.svg";
import { addTodoContainer } from "./todoView";
import { getCurrentProjectId } from "./todoView";
import { todoLogicModule } from "./todoView";

const formPanel = (() => {
  let darkenBodyDiv;

  function displayFormContainer() {
    darkenBodyDiv = document.createElement("div");
    darkenBodyDiv.classList.add("darken-body-div");

    const panelFormContainer = document.createElement("div");
    panelFormContainer.classList.add("panel-form-container");
    panelFormContainer.append(addCloseBtn(), addTodoHeading(), addFormInputPanel());
    darkenBodyDiv.appendChild(panelFormContainer);

    function addCloseBtn() {
      const closeBtn = document.createElement("btn");
      closeBtn.innerHTML = CloseIcon;
      closeBtn.classList.add("close-form-btn");
      formPanelLogic.listenCloseBtn(closeBtn);

      return closeBtn;
    }

    function addTodoHeading() {
      const todoHeading = document.createElement("h1");
      todoHeading.textContent = "TODO";

      return todoHeading;
    }

    function addFormInputPanel() {
      const form = document.createElement("form");

      // prevents from page reload on form submit
      form.setAttribute("action", "javascript:void(0);");

      form.classList.add("form-input-container");
      form.append(addTitleInput(), addDueDate(), addDescInput(), addPriorityDiv(), addAddBtn());

      function addTitleInput() {
        const titleInput = document.createElement("input");
        titleInput.classList.add("input-container");
        titleInput.classList.add("title-input");
        titleInput.required = true;
        titleInput.minLength = 3;
        titleInput.maxLength = 60;
        titleInput.placeholder = "Title*";

        return titleInput;
      }

      function addDueDate() {
        const dateInput = document.createElement("input");
        dateInput.classList.add("input-container");
        dateInput.classList.add("date-input");
        dateInput.type = "datetime-local";
        dateInput.min = getCurrentDatetimeLocal();

        function getCurrentDatetimeLocal() {
          const currentDatetimeLocal = new Date().toISOString().slice(0, new Date().toISOString().lastIndexOf(":"));
          return currentDatetimeLocal;
        }

        return dateInput;
      }

      function addDescInput() {
        const descInput = document.createElement("textarea");
        descInput.classList.add("input-container");
        descInput.classList.add("desc-input");
        descInput.maxLength = 160;
        descInput.placeholder = "Description";

        return descInput;
      }

      function addPriorityDiv() {
        const priorityDiv = document.createElement("div");
        priorityDiv.classList.add("priority-container");
        priorityDiv.append(addPriorityLabel(), addPriorityInput());

        function addPriorityLabel() {
          const priorityLabel = document.createElement("label");
          priorityLabel.setAttribute("for", "priority-input");
          priorityLabel.textContent = "Priority: ";
          return priorityLabel;
        }

        function addPriorityInput() {
          const prioritySelect = document.createElement("div");
          prioritySelect.classList.add("input-container");
          prioritySelect.setAttribute("id", "priority-input");
          prioritySelect.setAttribute("value", "gray");

          // used later for todo container border-color
          prioritySelect.style.borderColor = "rgb(92, 92, 92)";
          formPanelLogic.listenPriorityInput(prioritySelect);

          return prioritySelect;
        }

        return priorityDiv;
      }

      function addAddBtn() {
        const addBtn = document.createElement("button");
        addBtn.type = "submit";
        addBtn.textContent = "ADD";
        formPanelLogic.listenAddBtn(addBtn, panelFormContainer);

        return addBtn;
      }

      return form;
    }
    return darkenBodyDiv;
  }

  function getFormContainer() {
    return darkenBodyDiv;
  }

  function displayColorOptions(colorOptionsContainer, type=null) {
    if (!colorOptionsContainer.classList.contains("show-container") && type === null) {
      colorOptionsContainer.classList.add("show-container");
      colorOptionsContainer.style.display = "flex";

      const panelFormContainer = getFormContainer().querySelector(".panel-form-container");

      addOptions().forEach(option => {
        colorOptionsContainer.appendChild(option);
      })
      panelFormContainer.appendChild(colorOptionsContainer);

      function addOptions() {
        const option1 = document.createElement("div");
        option1.classList.add("color-options");
        option1.style.backgroundColor = "red";
        option1.style.border = "1px solid rgb(206, 0, 0)"

        const option2 = document.createElement("div");
        option2.classList.add("color-options");
        option2.style.backgroundColor = "orange";
        option2.style.border = "1px solid rgb(209, 136, 0)"

        const option3 = document.createElement("div");
        option3.classList.add("color-options");
        option3.style.backgroundColor = "blue";
        option3.style.border = "1px solid rgb(0, 0, 212)"

        function addOptionsSeperator() {
          const optionsSeperator = document.createElement("p");
          optionsSeperator.textContent = "|";

          return optionsSeperator;
        }

        const option4 = document.createElement("div");
        option4.classList.add("color-options");
        option4.style.backgroundColor = "gray";
        option4.style.border = "1px solid rgb(92, 92, 92)"

        return [option1, option2, option3, addOptionsSeperator(), option4];
      }
    } else {
      addAnimation(colorOptionsContainer, "fadeOut", .2)
      setTimeout(() => {
        colorOptionsContainer.classList.remove("show-container");
        addAnimation(colorOptionsContainer, "fadeIn", .2)
        colorOptionsContainer.style.display = "none";
        colorOptionsContainer.innerHTML = "";
      }, 180);
    }

  }

  function changePriorityColor(priorityInput, bgc, borderColor) {
    priorityInput.style.backgroundColor = bgc;
    priorityInput.style.borderColor = borderColor;

    priorityInput.setAttribute("value", bgc);
  }

  function addAnimation(element, type, timing) {
    element.style.animation = `${String(timing)}s ${type}`;
  }


  function addSuccessMessage() {
    const darkenBodyDiv = getFormContainer();
    const panelFormContainer = darkenBodyDiv.querySelector(".panel-form-container");
    const panelFormContainerChildrens = panelFormContainer.querySelectorAll("*");
    startSuccessAnimationBundle();


    function startSuccessAnimationBundle() {
      formPanel.addAnimation(panelFormContainer, "success", 2);
      panelFormContainerChildrens.forEach(children => {
        formPanel.addAnimation(children, "fadeOut", .2);
      })
      setTimeout(() => {
        panelFormContainer.innerHTML = "";
        panelFormContainer.classList.add("success-container");

        panelFormContainer.innerHTML += CheckIcon;
        formPanel.addAnimation(panelFormContainer.querySelector("svg"), "fadeIn", .5);
      }, 190);
      setTimeout(() => {
        formPanel.addAnimation(darkenBodyDiv, "fadeOut", .5);
        setTimeout(() => darkenBodyDiv.remove(), 490);
      }, 1300);
    }
  }

  return {displayFormContainer, getFormContainer, displayColorOptions, changePriorityColor, addAnimation, addSuccessMessage};
})()

const formPanelLogic = (() => {
  function listenCloseBtn(closeBtn) {
    closeBtn.addEventListener('click', () => {
      const darkenBodyDiv = formPanel.getFormContainer();
      const panelFormContainer = darkenBodyDiv.querySelector(".panel-form-container");
      formPanel.addAnimation(panelFormContainer, "slideCenterOut", .5);
      formPanel.addAnimation(darkenBodyDiv, "fadeOut", .5);
      setTimeout(() => {
        darkenBodyDiv.remove();
        panelFormContainer.remove();
      }, 495);
    })
  }

  function listenPriorityInput(priorityInput) {
    const colorOptionsContainer = document.createElement("div");
    colorOptionsContainer.classList.add("color-options-container");

    priorityInput.addEventListener("click", () => {
      formPanel.displayColorOptions(colorOptionsContainer);
      listenColorOptions(colorOptionsContainer);
      window.addEventListener("click", e => {
        if (!e.target.getAttribute("id", "priority-input")) {
          formPanel.displayColorOptions(colorOptionsContainer, "window");
        }
      })
    })

    function listenColorOptions() {
      const colorOptions = colorOptionsContainer.querySelectorAll(".color-options");

      colorOptions.forEach(option => {
        option.addEventListener("click", () => {
          const bgc = option.style.backgroundColor;
          const borderColor = option.style.borderColor;
          formPanel.changePriorityColor(priorityInput, bgc, borderColor);
        })
      })
    }
  }


  function listenAddBtn(addBtn, panelFormContainer) {
    let hasClicked = false;
    addBtn.addEventListener("click", e => {
      if (!hasClicked) {
        // seperating priority input because it is a custom input type and is a div
        const inputContainers = panelFormContainer.querySelectorAll(".form-input-container .input-container:not(#priority-input)");
        const priorityInput = panelFormContainer.querySelector("#priority-input");
        let areValidInputs = checkFormValidity(inputContainers);

        if (areValidInputs) {
          const title = inputContainers[0].value;
          const date = inputContainers[1].value;
          const desc = inputContainers[2].value;
          const priorityColor = priorityInput.getAttribute("value");
          const formTodoObj = todoLogicModule.objects.addTodoObj(title, desc, date, priorityColor);
          todoLogicModule.objects.addProjectTodoList(getCurrentProjectId(), formTodoObj);
          console.log(todoLogicModule.objects.getProjectsTodoListObj());
          console.log(getCurrentProjectId());
          addTodoContainer(formTodoObj);
          formPanel.addSuccessMessage(panelFormContainer);
          hasClicked = true;
        }

      }
    });

    function checkFormValidity(inputContainers) {
      for (let input of inputContainers) {
        if (!input.checkValidity()) {
          return false;
        }
      }
      return true;
    }
  }

  return {listenCloseBtn, listenPriorityInput, listenAddBtn};
})()

export default formPanel;
export const addAnimation = formPanel.addAnimation;