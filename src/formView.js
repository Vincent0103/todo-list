

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
      closeBtn.textContent = "Close";
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
      form.classList.add("form-input-container");
      form.append(addTitleInput(), addDueDate(), addDescInput(), addPriorityDiv());

      function addTitleInput() {
        const titleInput = document.createElement("input");
        titleInput.classList.add("input-container");
        titleInput.classList.add("title-input");
        titleInput.placeholder = "Title*";

        return titleInput;
      }

      function addDueDate() {
        const dateInput = document.createElement("input");
        dateInput.classList.add("input-container");
        dateInput.classList.add("date-input");
        dateInput.type = "datetime-local";

        return dateInput;
      }

      function addDescInput() {
        const descInput = document.createElement("textarea");
        descInput.classList.add("input-container");
        descInput.classList.add("desc-input");
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
          // formPanelLogic.listenPriorityInput(prioritySelect);

          return prioritySelect;
        }

        return priorityDiv;
      }


      return form;
    }
    return darkenBodyDiv;
  }

  function getFormContainer() {
    return darkenBodyDiv;
  }

  return {displayFormContainer, getFormContainer};
})()

const formPanelLogic = (() => {
  function listenCloseBtn(closeBtn) {
    closeBtn.addEventListener('click', () => {
      const darkenBodyDiv = formPanel.getFormContainer();
      const panelFormContainer = darkenBodyDiv.querySelector(".panel-form-container");
      panelFormContainer.style.animation = ".5s slideCenterOut";
      darkenBodyDiv.style.animation = ".5s fadeOut";
      setTimeout(() => {
        darkenBodyDiv.remove();
        panelFormContainer.remove();
        console.log("removing");
      }, 495);
    })
  }

  // function listenPriorityInput(priorityInput) {
  //   priorityInput.addEventListener("click", () => {

  //   })
  // }

  return {listenCloseBtn};
})()

export default formPanel;