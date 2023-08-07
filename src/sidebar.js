import InboxIcon from "./assets/inbox.svg";
import MenuDown from "./assets/menu-down.svg";
import todoPanel from "./todoView";

let sidebarContainer;
let menuSvg;
let projectsTab;
let projectsContainer = [];

const sidebar = (() => {
  function addContent() {
    sidebarContainer = document.createElement("div");
    sidebarContainer.classList.add("sidebar-container");

    sidebarContainer.append(addInboxTab(), project.addProjectsTab(), project.addProjects());

    return sidebarContainer;
  }

  function addInboxTab() {
    const inboxTab = document.createElement("div");
    inboxTab.classList.add("inbox-tab");
    inboxTab.innerHTML = InboxIcon;

    const p = document.createElement("p");
    p.textContent = "Inbox";
    inboxTab.appendChild(p);
    sidebarHandler.listenInboxTab(inboxTab);

    return inboxTab;
  }

  return {addContent};
})();

const project = (() => {

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
    const allProjectsContainer = document.createElement("div");
    allProjectsContainer.classList.add("all-projects-container");

    addProjectContent().forEach(projectContent => {
      allProjectsContainer.appendChild(projectContent);
    });
    sidebarHandler.listenProjectsTabEvent();

    return allProjectsContainer;
  }

  function addProjectContent() {
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

    return [projectContainer1, projectContainer2, projectContainer3];
  }

  return {addProjectsTab, addProjects, addProjectContent}
})();

const sidebarHandler = (() => {

  function listenInboxTab(inboxTab) {
    inboxTab.addEventListener("click", () => {
      todoPanel.addContent();
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

  function changeMenuSvgState() {
    if (menuSvg.style.transform === "rotate(180deg)") {
      menuSvg.style.transform = "rotate(0deg)";
    } else if (menuSvg.style.transform === "rotate(0deg)") {
      menuSvg.style.transform = "rotate(180deg)";
    }
  }

  return {listenInboxTab, listenProjectsTabEvent, slideSidebarContainer};
})();

export default sidebar;
export const slideSidebarContainer = sidebarHandler.slideSidebarContainer;