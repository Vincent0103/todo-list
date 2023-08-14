import { addAnimation } from "./formView";
import { todoLogicModule } from "./todoView";
import sidebar from "./sidebar";


const projectDeleteAd = (() => {

  function getDarkenBodyDiv() {
    return darkenBodyDiv;
  }

  function displayAd(projectContainer, projectId) {
    const darkenBodyDiv = document.createElement("div");
    darkenBodyDiv.classList.add("darken-body-div");

    if (!document.body.querySelector(".darken-body-div")) {
      document.body.appendChild(darkenBodyDiv);

      const panelAdContainer = document.createElement("div");
      panelAdContainer.classList.add("panel-ad-container");
      darkenBodyDiv.appendChild(panelAdContainer);

      const h2 = document.createElement("h2");
      h2.textContent = "Are you sure you want to delete this project?";

      const yesBtn = document.createElement("button");
      yesBtn.textContent = "YES";
      yesBtn.classList.add("ad-yes-btn");

      const noBtn = document.createElement("button");
      noBtn.textContent = "NO";
      noBtn.classList.add("ad-no-btn");

      panelAdContainer.append(h2, yesBtn, noBtn);
      listenOutsideClick();
      listenBtns([yesBtn, noBtn], darkenBodyDiv, panelAdContainer, projectContainer, projectId);
    }
  }

  function listenOutsideClick() {
    window.addEventListener("click", e => {
      if (e.target.className === "darken-body-div") {
        addAnimation(e.target.children[0], "slideCenterOut", .5);
        addAnimation(e.target, "fadeOut", .5);

        setTimeout(() => {
          e.target.children[0].remove();
          e.target.remove();
        }, 480);
      }
    })
  }

  function listenBtns(btns, darkenBodyDiv, panelAdContainer, projectContainer, projectId) {
    btns.forEach(btn => {
      btn.addEventListener("click", () => {
        if (btn.className === "ad-yes-btn") {
          removeTodoProject(projectContainer, projectId);
          removeAdPanel(darkenBodyDiv, panelAdContainer);

        } else if (btn.className === "ad-no-btn") {
          removeAdPanel(darkenBodyDiv, panelAdContainer);
        }
      })
    })
  }

  function removeAdPanel(darkenBodyDiv, panelAdContainer) {
    addAnimation(darkenBodyDiv, "fadeOut", .5);
    addAnimation(panelAdContainer, "slideCenterOut", .5);

    setTimeout(() => {
      panelAdContainer.remove();
      darkenBodyDiv.remove();
    }, 480);
  }

  function removeTodoProject(projectContainer, projectId) {
    addAnimation(projectContainer, "slideProjectUp", .2);
    setTimeout(() => projectContainer.remove(), 190);
    todoLogicModule.objects.removeProjectTodoList(projectId);
    sidebar.changeSidebarContainerState("Inbox", 0);
  }

  return { displayAd };
})();

export default projectDeleteAd;