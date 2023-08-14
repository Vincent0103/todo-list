import { todoLogicModule } from "./todoView";
import { addTodoContainer } from "./todoView";

let isDOMloading = true;

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

function storeTodoObjs(type, projectId, todoObj) {
  if (storageAvailable("localStorage")) {
    // Yippee! We can use localStorage awesomeness

    if (localStorage.getItem("projectsTodoListObj") && type === "form") {
      populateStorage(type, projectId, todoObj);
    } else if (localStorage.getItem("projectsTodoListObj") && type === "remove") {
      populateStorage(type, projectId, todoObj);
    }
    else {
      populateStorage();
    }

  } else {
    // Too bad, no localStorage for us
  }

}

function addProjectStorageTodoList(projectsTodoListObj, projectId, todoObj) {
  projectId = String(projectId);
  if (!(projectId in projectsTodoListObj) && !todoObj) {
    projectsTodoListObj[projectId] = [];

  } else if (!(projectId in projectsTodoListObj) && todoObj) {
      projectsTodoListObj[projectId] = [todoObj];

  } else {
    projectsTodoListObj[projectId].push(todoObj);
  }
}

function populateStorage(type, projectId, todoObj) {
  if (isDOMloading) {
    if (localStorage.getItem("projectsTodoListObj")) {
      const projectsTodoListObj = JSON.parse(localStorage.getItem("projectsTodoListObj"));
      iterateOverStorageObjItem(projectsTodoListObj);
    }

    isDOMloading = false;
  }

  if (!localStorage.getItem("projectsTodoListObj")) {
    addTodoTemplateContent();
    const projectsTodoListObj  = todoLogicModule.objects.getProjectsTodoListObj();
    localStorage.setItem("projectsTodoListObj", JSON.stringify(projectsTodoListObj));
  } else if (type === "form") {
    const projectsTodoListObj = JSON.parse(localStorage.getItem("projectsTodoListObj"));

    addProjectStorageTodoList(projectsTodoListObj, projectId, todoObj);

    localStorage.setItem("projectsTodoListObj", JSON.stringify(projectsTodoListObj));
  }
}

function addToStorageObjItem(projectObj, projectId, todoObj) {
  todoLogicModule.objects.addProjectTodoList(Number.parseInt(projectId), projectObj[todoObj]);
}

function removeToStorageObjItem(todoObjId, projectId) {
  if (storageAvailable("localStorage")) {
    let projectsTodoListObj = JSON.parse(localStorage.getItem("projectsTodoListObj"));
    let todoObjIdIndex = Object.keys(projectsTodoListObj[projectId]).indexOf(todoObjId);

    projectsTodoListObj[projectId].splice(todoObjIdIndex, 1);
    localStorage.setItem("projectsTodoListObj", JSON.stringify(projectsTodoListObj));
  }
}

function iterateOverStorageObjItem(storageItem) {
  for (const projectId of Object.keys(storageItem)) {
    const projectObj = storageItem[projectId];
    for (const todoObj in projectObj) {
      addToStorageObjItem(projectObj, projectId, todoObj);
    }
  }
}

function addTodoTemplateContent() {
  let currentTodoObj = todoLogicModule.objects.addTodoObj(
    "click the check button to remove todo list",
    "",
    "",
    "blue");

    todoLogicModule.objects.addProjectTodoList(0, currentTodoObj);

  currentTodoObj = todoLogicModule.objects.addTodoObj(
    "click me!",
    "Stay organized and on top of your tasks with this comprehensive to-do list. Whether you're tackling work assignments.",
    "2028-11-23T18:21",
    "red");

  todoLogicModule.objects.addProjectTodoList(0, currentTodoObj);

  currentTodoObj = todoLogicModule.objects.addTodoObj(
    "Welcome to TODOWHT!",
    "",
    "2023-09-24T12:17",
    "blue");

  todoLogicModule.objects.addProjectTodoList(0, currentTodoObj);
}

const storeProjectNames = (() => {
  function getProjectNames() {
    return JSON.parse(localStorage.getItem("projectNames"));
  }

  function addProjectName(projectId, projectName) {
    let projectNames;

    if (!localStorage.getItem("projectNames")) {
      projectNames = localStorage.setItem("projectNames", JSON.stringify({}));
    } else {
      projectNames = JSON.parse(localStorage.getItem("projectNames"));
    }

    // no one line if statements because if projectNames is undefined,
    // throws errors when looping through keys in undefined
    if (typeof projectNames === "undefined") {
      projectNames = {[projectId]: projectName};
    } else {
      if (!(projectId in projectNames)) {
        projectNames[projectId] = projectName;
      }
    }

    localStorage.setItem("projectNames", JSON.stringify(projectNames));
  }

  return {getProjectNames, addProjectName};
})();

export default storeTodoObjs;
export const removeToStorageFunc = removeToStorageObjItem;
export const storeProjectNamesFunc = storeProjectNames;