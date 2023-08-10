import InboxIcon from "./assets/inbox.svg";
import MenuDown from "./assets/menu-down.svg";
import AddProjectIcon from "./assets/plus-box-multiple-outline.svg"
import todoPanel from "./todoView";
import { todoLogicModule } from "./todoView";
import addPage from "./pageload";
import { first } from "lodash";

let sidebarContainer;
let menuSvg;
let projectsTab;
let projectsContainer = [];
let projectCreatorContainer;

const sidebar = (() => {
  function addContent() {
    sidebarContainer = document.createElement("div");
    sidebarContainer.classList.add("sidebar-container");

    sidebarContainer.append(addInboxTab(), project.addProjectsTab(), project.addProjects(), project.addProjectCreatorTab());

    return sidebarContainer;
  }

  function addInboxTab() {
    const inboxTab = document.createElement("div");
    inboxTab.classList.add("inbox-tab");
    inboxTab.setAttribute("data-project-id", 0);
    inboxTab.innerHTML = InboxIcon;

    const p = document.createElement("p");
    p.textContent = "Inbox";
    inboxTab.appendChild(p);
    sidebarHandler.listenInboxTab(inboxTab);

    return inboxTab;
  }

  function changeSidebarContainerState(contentHeader, projectId) {
    const sidebarPanelContainer = addPage.getSidebarPanelContainer();
    sidebarPanelContainer.removeChild(sidebarPanelContainer.querySelector(".panel-container"));
    sidebarPanelContainer.appendChild(todoPanel.addContent(contentHeader, projectId));
  }

  return {addContent, changeSidebarContainerState};
})();

const project = (() => {
  let allProjectsContainer;

  function addProjectsTab() {
    projectsTab = document.createElement("div");
    projectsTab.classList.add("projects-tab");

    const p = document.createElement("p");
    p.textContent = "Projects";
    projectsTab.appendChild(p);
    addProjectsTabSvg();

    return projectsTab;
  }

  const addProjectsTabSvg = () => {
    projectsTab.innerHTML += MenuDown;
    menuSvg = projectsTab.querySelector("svg");
    menuSvg.style.transform = "rotate(180deg)";
  }

  function addProjects() {
    allProjectsContainer = document.createElement("div");
    allProjectsContainer.classList.add("all-projects-container");

    addProjectContent().forEach(projectContent => {
      allProjectsContainer.appendChild(projectContent);
    });
    sidebarHandler.listenProjectsTabEvent();

    return allProjectsContainer;
  }

  function addProjectContent(projectName, projectId) {
    if (projectName && projectId) {
      const projectContainerCustom = document.createElement("div");

      const handleExpandableClass = () => {
        if (projectsContainer[0].classList.contains("expandable")) {
          projectContainerCustom.classList.add("expandable");
        }
      }

      projectContainerCustom.classList.add("project-container");
      handleExpandableClass();

      const pCustom = document.createElement("p");
      pCustom.textContent = projectName;
      projectContainerCustom.appendChild(pCustom);
      projectContainerCustom.setAttribute("data-project-id", projectId);


      projectsContainer.push(projectContainerCustom);
      sidebarHandler.listenProjectsContainers(projectContainerCustom);
      allProjectsContainer.appendChild(projectContainerCustom);
    } else {
      const projectContainer1 = document.createElement("div");
      projectContainer1.classList.add("project-container");

      const p1 = document.createElement("p");
      p1.textContent = "Work";
      projectContainer1.appendChild(p1);
      projectContainer1.setAttribute("data-project-id", 1);

      const projectContainer2 = document.createElement("div");
      projectContainer2.classList.add("project-container");

      const p2 = document.createElement("p");
      p2.textContent = "Self";
      projectContainer2.appendChild(p2);
      projectContainer2.setAttribute("data-project-id", 2);

      const projectContainer3 = document.createElement("div");
      projectContainer3.classList.add("project-container");

      const p3 = document.createElement("p");
      p3.textContent = "smh";
      projectContainer3.appendChild(p3);
      projectContainer3.setAttribute("data-project-id", 3);

      projectsContainer.splice(0, 0, projectContainer1, projectContainer2, projectContainer3);
      sidebarHandler.listenProjectsContainers();

      return [projectContainer1, projectContainer2, projectContainer3];

    }
  }

  function addProjectCreatorTab() {
    if (typeof projectCreatorContainer !== "undefined") {
      console.log(typeof projectCreatorContainer);
      projectCreatorContainer.innerHTML = "";
    } else {
      projectCreatorContainer = document.createElement("div");
      projectCreatorContainer.classList.add("project-creator-container");

    }

    projectCreatorContainer.innerHTML = AddProjectIcon;

    const p = document.createElement("p");
    p.textContent = "Add Project";

    projectCreatorContainer.appendChild(p);

    sidebarHandler.listenProjectCreatorContainer();
    return projectCreatorContainer;
  }

  function addProjectCreatorInput() {
    projectCreatorContainer.innerHTML = "";
    console.log(projectCreatorContainer.classList);
    projectCreatorContainer.classList.add("inputting");

    const input = document.createElement("input");
    input.classList.add("project-input-container");
    input.placeholder = "Project Name";
    const div = document.createElement("div");
    const svg = AddProjectIcon;
    div.innerHTML = svg;

    projectCreatorContainer.append(input, div);
    sidebarHandler.listenAddProjectCreatorBtn(div, input);
  }

  return {addProjectsTab, addProjects, addProjectContent, addProjectCreatorTab, addProjectCreatorInput}
})();

const sidebarHandler = (() => {

  function listenInboxTab(inboxTab) {
    inboxTab.addEventListener("click", () => {
      sidebar.changeSidebarContainerState("Inbox", 0);
    });
  }

  function slideSidebarContainer(sidebarContainer) {
    if (sidebarContainer.classList.contains("slideable")) {
      sidebarContainer.classList.remove("slideable");
    } else if (!sidebarContainer.classList.contains("slideable")) {
      sidebarContainer.classList.add("slideable");
    }
  }

  function listenProjectsTabEvent() {
    projectsTab.addEventListener("click", () => {
      projectsContainer.forEach(projectContainer => {
        if (projectContainer.classList.contains("expandable")) {
          projectContainer.classList.remove("expandable");
        } else {
          projectContainer.classList.add("expandable");
        }
      })
      changeMenuSvgState();
    })
  }

  function listenProjectsContainers(projectContainerCustom) {
    if (projectContainerCustom) {
      projectContainerCustom.addEventListener("click", () => {
        console.log("clicking");
        const p = projectContainerCustom.querySelector("p");
        sidebar.changeSidebarContainerState(p.textContent, projectContainerCustom.getAttribute("data-project-id"));
      })
    }
    projectsContainer.forEach(projectContainer => {
      projectContainer.addEventListener("click", () => {
        const p = projectContainer.querySelector("p");
        sidebar.changeSidebarContainerState(p.textContent, projectContainer.getAttribute("data-project-id"));
      })
    })
  }

  function listenProjectCreatorContainer() {
    let firstClick = true;
    projectCreatorContainer.addEventListener("click", () => {
      console.log(projectCreatorContainer.querySelector(".project-input-container"));
      if (projectCreatorContainer.querySelector(".project-input-container") === null) {
        project.addProjectCreatorInput();
        setTimeout(() => firstClick = false, 200);
      }
    })

    window.addEventListener("click", e => {
      if (!firstClick && !e.target.classList.contains("project-input-container")) {
        console.log("doing");
        console.log(e.target.classList);
        project.addProjectCreatorTab();
      }
    })
  }

  function listenAddProjectCreatorBtn(addProjectBtn, inputContainer) {
    addProjectBtn.addEventListener("click", () => {
      const projectName = inputContainer.value;
      const projectTodoListObj = todoLogicModule.objects.getProjectsTodoListObj();
      const projectId = Object.keys(projectTodoListObj).length;
      todoLogicModule.objects.addProjectTodoList(projectId);
      project.addProjectContent(projectName, projectId+1);
    })
  }

  function changeMenuSvgState() {
    if (menuSvg.style.transform === "rotate(180deg)") {
      menuSvg.style.transform = "rotate(0deg)";
    } else if (menuSvg.style.transform === "rotate(0deg)") {
      menuSvg.style.transform = "rotate(180deg)";
    }
  }

  return {listenInboxTab, listenProjectsTabEvent, listenProjectsContainers,
     listenProjectCreatorContainer, slideSidebarContainer, listenAddProjectCreatorBtn};
})();

export default sidebar;
export const slideSidebarContainer = sidebarHandler.slideSidebarContainer;