import InboxIcon from "./assets/inbox.svg";
import MenuDown from "./assets/menu-down.svg";
import AddProjectIcon from "./assets/plus-box-multiple-outline.svg";
import removeProjectIcon from "./assets/close-thick.svg";
import todoPanel, { getCurrentProjectId } from "./todoView";
import { todoLogicModule } from "./todoView";
import addPage from "./pageload";
import { addAnimation } from "./formView";
import { storeProjectNamesFunc } from "./storageHandler";

let sidebarContainer;
let menuSvg;
let projectsTab;
let projectsContainer = [];
let projectCreatorContainer;

const sidebar = (() => {
  function addContent() {
    sidebarContainer = document.createElement("div");
    sidebarContainer.classList.add("sidebar-container");

    sidebarContainer.append(addInboxTab(), project.addProjectsTab(), project.addProjects());

    const storedProjects = storeProjectNamesFunc.getProjectNames();
    for (const projectId in storedProjects) {
      project.addProjectContent(projectId, storedProjects[projectId]);
    }

    sidebarContainer.appendChild(project.addProjectCreatorTab());

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

  function addProjectContent(projectId, projectName) {
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
      projectContainerCustom.innerHTML += removeProjectIcon;

      storeProjectNamesFunc.addProjectName(projectId, projectName);


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

      projectsContainer.splice(0, 0, projectContainer1, projectContainer2);
      sidebarHandler.listenProjectsContainers();

      return [projectContainer1, projectContainer2];

    }
  }

  function addProjectCreatorTab() {
    if (typeof projectCreatorContainer !== "undefined") {
      projectCreatorContainer.innerHTML = "";
      projectCreatorContainer.classList.remove("inputting");
    } else {
      projectCreatorContainer = document.createElement("div");
      projectCreatorContainer.classList.add("project-creator-container");
    }

    projectCreatorContainer.innerHTML = AddProjectIcon;

    const p = document.createElement("p");
    p.textContent = "Add Project";

    projectCreatorContainer.appendChild(p);
    sidebarHandler.listenProjectCreatorContainer();
    for (const child of projectCreatorContainer.children) {
      addAnimation(child, "fadeIn", .1);
    }

    return projectCreatorContainer;
  }

  function addProjectCreatorInput() {
    projectCreatorContainer.innerHTML = "";
    projectCreatorContainer.classList.add("inputting");

    const input = document.createElement("input");
    input.classList.add("project-input-container");
    input.placeholder = "Project Name";
    input.maxLength = 20;
    addAnimation(input, "fadeIn", .1);

    const div = document.createElement("div");
    const svg = AddProjectIcon;
    div.innerHTML = svg;
    addAnimation(div, "fadeIn", .1);

    projectCreatorContainer.append(input, div);
    sidebarHandler.listenAddProjectCreatorBtn(allProjectsContainer, div, input);
    sidebarHandler.listenWindow();
  }

  function removeProjectContainer(projectContainer, projectId) {
    addAnimation(projectContainer, "slideProjectUp", .2);
    setTimeout(() => projectContainer.remove(), 190);
    addProjectContent();
    todoLogicModule.objects.removeProjectTodoList(projectId);
    sidebar.changeSidebarContainerState("Inbox", 0);
  }

  return {addProjectsTab, addProjects, addProjectContent, addProjectCreatorTab,
     addProjectCreatorInput, removeProjectContainer}
})();

const sidebarHandler = (() => {

  function listenInboxTab(inboxTab) {
    inboxTab.addEventListener("click", () => {
      sidebar.changeSidebarContainerState("Inbox", 0);
    });
  }

  function slideSidebarContainer(sidebarContainer) {
    document.querySelector(".panel-container").style.transition = ".2s";
    if (sidebarContainer.classList.contains("slideable")) {
      sidebarContainer.classList.remove("slideable");
      document.querySelector(".panel-container").style.marginLeft = "clamp(150px, 20vw, 300px)";
    } else if (!sidebarContainer.classList.contains("slideable")) {
      sidebarContainer.classList.add("slideable");
      document.querySelector(".panel-container").style.marginLeft = "0";
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
      projectContainerCustom.addEventListener("click", e => {
        addFuncOnSvg(projectContainerCustom, e);
      });
    }
    projectsContainer.forEach(projectContainer => {
      projectContainer.addEventListener("click", e => {
        addFuncOnSvg(projectContainer, e);
      });
    });

    const addFuncOnSvg = (projectContainer, e) => {
      const p = projectContainer.querySelector("p");
      const projectId = projectContainer.getAttribute("data-project-id")
      if (e.target.tagName !== "svg" && e.target.tagName !== "path") {
        sidebar.changeSidebarContainerState(p.textContent, projectId);
      } else {
        project.removeProjectContainer(projectContainer, projectId);
      }
    }
  }

  function listenProjectCreatorContainer() {
    projectCreatorContainer.addEventListener("click", () => {
      if (!projectCreatorContainer.classList.contains("inputting")) {
        project.addProjectCreatorInput();
      }
    })
  }

  // Makes the project creator tab go back to default state whenever the user
  // clicks on something else than the container itself during the
  // input state
  function listenWindow() {
    const classesToCheck = ["panel-container", "sidebar-container", "header-container", "projects-tab"];

    window.addEventListener("click", e => {
      if (projectCreatorContainer.classList.contains("inputting")) {
        if (!e.target.classList.contains("inputting") && !e.target.classList.contains("project-input-container") && e.target.classList.length !== 0) {
            project.addProjectCreatorTab();
        }
      }
    })
  }

  function listenAddProjectCreatorBtn(allProjectContainers, addProjectBtn, inputContainer) {
    addProjectBtn.addEventListener("click", () => {
      const projectName = inputContainer.value;
      const lastProjectContainer = allProjectContainers.querySelector(".project-container:last-child");
      const projectId = Number.parseInt(lastProjectContainer.getAttribute("data-project-id"));

      todoLogicModule.objects.addProjectTodoList(projectId+1);
      project.addProjectContent(projectId+1, projectName);
      project.addProjectCreatorTab();
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
     listenProjectCreatorContainer, slideSidebarContainer, listenAddProjectCreatorBtn,
      listenWindow};
})();

export default sidebar;
export const slideSidebarContainer = sidebarHandler.slideSidebarContainer;