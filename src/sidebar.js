import InboxIcon from "./assets/inbox.svg";
import MenuDown from "./assets/menu-down.svg";

const sidebar = (() => {
  function addContent() {
    const sidebarContainer = document.createElement("div");
    sidebarContainer.classList.add("sidebar-container");

    sidebarContainer.append(addProjectsTab(), addProjects());

    return sidebarContainer;
  }

  function addProjectsTab() {
    const projectsTab = document.createElement("div");
    projectsTab.classList.add("projects-tab");

    const p = document.createElement("p");
    p.textContent = "Projects";
    projectsTab.appendChild(p);

    projectsTab.innerHTML += MenuDown;

    return projectsTab;
  }

  function addProjects() {
    const allProjectsContainer = document.createElement("div");
    allProjectsContainer.classList.add("all-projects-container");

    addProjectContent().forEach(project => {
      allProjectsContainer.appendChild(project);
    });

    return allProjectsContainer;
  }

  function addProjectContent() {
    const projectContainer1 = document.createElement("div");
    projectContainer1.classList.add("project-container");

    const p1 = document.createElement("p");
    p1.textContent = "Work";
    projectContainer1.appendChild(p1);

    const projectContainer2 = document.createElement("div");
    projectContainer2.classList.add("project-container");

    const p2 = document.createElement("p");
    p2.textContent = "Self";
    projectContainer2.appendChild(p2);

    return [projectContainer1, projectContainer2]
  }

  return {addContent};
})();

export default sidebar;