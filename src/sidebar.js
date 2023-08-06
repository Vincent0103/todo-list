import InboxIcon from "./assets/inbox.svg";
import MenuDown from "./assets/menu-down.svg";

const sidebar = (() => {
  function addContent() {
    const sidebarContainer = document.createElement("div");
    sidebarContainer.classList.add("sidebar-container");

    sidebarContainer.append(addInboxTab(), project.addProjectsTab(), project.addProjects());
    console.log();

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


  return {addContent};
})();

const project = (() => {
  let projectsTab;
  let projectsContainer = [];
  let menuSvg;

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
    listenProjectsTabEvent();

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

    projectsContainer.splice(0, 0, projectContainer1, projectContainer2, projectContainer3);

    return [projectContainer1, projectContainer2, projectContainer3];
  }

  function listenProjectsTabEvent() {
    projectsTab.addEventListener("click", () => {
      projectsContainer.forEach(projectContainer => {
        if (projectContainer.classList.contains("expandable")) {
          projectContainer.classList.remove("expandable");
        } else if (!projectContainer.classList.contains("expandable")){
          projectContainer.classList.add("expandable");
        }
      })
      changeMenuSvgState();
    })
  }

  function changeMenuSvgState() {
    console.log(menuSvg.style.transform === "rotate(180deg)");
    if (menuSvg.style.transform === "rotate(180deg)") {
      menuSvg.style.transform = "rotate(0deg)";
    } else if (menuSvg.style.transform === "rotate(0deg)") {
      menuSvg.style.transform = "rotate(180deg)";
    }
  }

  return {addProjectsTab, addProjects, addProjectContent, listenProjectsTabEvent}
})();

export default sidebar;