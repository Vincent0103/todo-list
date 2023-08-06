import InboxIcon from "./assets/inbox.svg";
import MenuDown from "./assets/menu-down.svg";

const sidebar = (() => {
  function addContent() {
    const sidebarContainer = document.createElement("div");
    sidebarContainer.classList.add("sidebar-container");

    sidebarContainer.append(addInboxTab(), addProjectsTab(), addProjects());

    return sidebarContainer;
  }

  function addInboxTab() {
    const inboxTab = document.createElement("div");
    inboxTab.classList.add("inbox-tab");

    inboxTab.innerHTML = InboxIcon;

    const p = document.createElement("p");
    p.textContent = "Inbox";
    inboxTab.appendChild(p);

    return inboxTab;
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

    const projectContainer3 = document.createElement("div");
    projectContainer3.classList.add("project-container");

    const p3 = document.createElement("p");
    p3.textContent = "smh";
    projectContainer3.appendChild(p3);

    return [projectContainer1, projectContainer2, projectContainer3];
  }

  return {addContent};
})();

export default sidebar;