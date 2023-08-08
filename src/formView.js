

const formPanel = (() => {
  function displayFormContainer() {
    const darkenBodyDiv = document.createElement("div");
    darkenBodyDiv.classList.add("darken-body-div");

    const panelFormContainer = document.createElement("div");
    panelFormContainer.classList.add("panel-form-container");
    darkenBodyDiv.appendChild(panelFormContainer);

    return darkenBodyDiv;
  }

  return {displayFormContainer};
})()

export default formPanel;