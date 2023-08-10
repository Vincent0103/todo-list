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
    } else {
      populateStorage();
    }

  } else {
    // Too bad, no localStorage for us
  }

}

function addProjectTodoList(projectsTodoListObj, projectId, todoObj) {
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

      for (const projectId of Object.keys(projectsTodoListObj)) {
        const projectObj = projectsTodoListObj[projectId];
        for (const todoObj in projectObj) {
          todoLogicModule.objects.addProjectTodoList(Number.parseInt(projectId), projectObj[todoObj]);
        }
      }
      console.log(todoLogicModule.objects.getProjectsTodoListObj());
    }

    isDOMloading = false;
  }

  if (!localStorage.getItem("projectsTodoListObj")) {
    addTodoTemplateContent();
    const projectsTodoListObj  = todoLogicModule.objects.getProjectsTodoListObj();
    localStorage.setItem("projectsTodoListObj", JSON.stringify(projectsTodoListObj));
  } else if (type === "form") {
    const projectsTodoListObj = JSON.parse(localStorage.getItem("projectsTodoListObj"));

    addProjectTodoList(projectsTodoListObj, projectId, todoObj);

    localStorage.setItem("projectsTodoListObj", JSON.stringify(projectsTodoListObj));
  }

}




function addTodoTemplateContent() {
  let currentTodoObj = todoLogicModule.objects.addTodoObj(
    "click me!",
    "Stay organized and on top of your tasks with this comprehensive to-do list. Whether you're tackling work assignments.",
    "2028-11-23T18:21",
    "red");

  todoLogicModule.objects.addProjectTodoList(0, currentTodoObj);

  currentTodoObj = todoLogicModule.objects.addTodoObj(
    "Welcome to todowht",
    "",
    "2023-09-24T12:17",
    "blue");

  todoLogicModule.objects.addProjectTodoList(0, currentTodoObj);
}

export default storeTodoObjs;