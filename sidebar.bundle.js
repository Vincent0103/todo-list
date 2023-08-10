(()=>{"use strict";var t={725:(t,e,n)=>{n.d(e,{Z:()=>o});const o='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>'},446:(t,e,n)=>{n.d(e,{E:()=>s,Z:()=>i});var o=n(637);const r=(()=>{let t;function e(){return t}function n(t,e,n){t.style.animation=`${String(n)}s ${e}`}return{displayFormContainer:function(){t=document.createElement("div"),t.classList.add("darken-body-div");const e=document.createElement("div");return e.classList.add("panel-form-container"),e.append(function(){const t=document.createElement("btn");return t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z" /></svg>',t.classList.add("close-form-btn"),a.listenCloseBtn(t),t}(),function(){const t=document.createElement("h1");return t.textContent="TODO",t}(),function(){const t=document.createElement("form");return t.setAttribute("action","javascript:void(0);"),t.classList.add("form-input-container"),t.append(function(){const t=document.createElement("input");return t.classList.add("input-container"),t.classList.add("title-input"),t.required=!0,t.minLength=3,t.maxLength=60,t.placeholder="Title*",t}(),function(){const t=document.createElement("input");return t.classList.add("input-container"),t.classList.add("date-input"),t.type="datetime-local",t.min=(new Date).toISOString().slice(0,(new Date).toISOString().lastIndexOf(":")),t}(),function(){const t=document.createElement("textarea");return t.classList.add("input-container"),t.classList.add("desc-input"),t.maxLength=160,t.placeholder="Description",t}(),function(){const t=document.createElement("div");return t.classList.add("priority-container"),t.append(function(){const t=document.createElement("label");return t.setAttribute("for","priority-input"),t.textContent="Priority: ",t}(),function(){const t=document.createElement("div");return t.classList.add("input-container"),t.setAttribute("id","priority-input"),t.setAttribute("value","gray"),t.style.borderColor="rgb(92, 92, 92)",a.listenPriorityInput(t),t}()),t}(),function(){const t=document.createElement("button");return t.type="submit",t.textContent="ADD",a.listenAddBtn(t,e),t}()),t}()),t.appendChild(e),t},getFormContainer:e,displayColorOptions:function(t,o=null){if(t.classList.contains("show-container")||null!==o)n(t,"fadeOut",.2),setTimeout((()=>{t.classList.remove("show-container"),n(t,"fadeIn",.2),t.style.display="none",t.innerHTML=""}),180);else{t.classList.add("show-container"),t.style.display="flex";const r=e().querySelector(".panel-form-container");function a(){const t=document.createElement("div");t.classList.add("color-options"),t.style.backgroundColor="red",t.style.border="1px solid rgb(206, 0, 0)";const e=document.createElement("div");e.classList.add("color-options"),e.style.backgroundColor="orange",e.style.border="1px solid rgb(209, 136, 0)";const n=document.createElement("div");n.classList.add("color-options"),n.style.backgroundColor="blue",n.style.border="1px solid rgb(0, 0, 212)";const o=document.createElement("div");return o.classList.add("color-options"),o.style.backgroundColor="gray",o.style.border="1px solid rgb(92, 92, 92)",[t,e,n,function(){const t=document.createElement("p");return t.textContent="|",t}(),o]}a().forEach((e=>{t.appendChild(e)})),r.appendChild(t)}},changePriorityColor:function(t,e,n){t.style.backgroundColor=e,t.style.borderColor=n,t.setAttribute("value",e)},addAnimation:n,addSuccessMessage:function(){const t=e(),n=t.querySelector(".panel-form-container"),o=n.querySelectorAll("*");r.addAnimation(n,"success",2),o.forEach((t=>{r.addAnimation(t,"fadeOut",.2)})),setTimeout((()=>{n.innerHTML="",n.classList.add("success-container"),n.innerHTML+='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" /></svg>',r.addAnimation(n.querySelector("svg"),"fadeIn",.5)}),190),setTimeout((()=>{r.addAnimation(t,"fadeOut",.5),setTimeout((()=>t.remove()),490)}),1300)}}})(),a={listenCloseBtn:function(t){t.addEventListener("click",(()=>{const t=r.getFormContainer(),e=t.querySelector(".panel-form-container");r.addAnimation(e,"slideCenterOut",.5),r.addAnimation(t,"fadeOut",.5),setTimeout((()=>{t.remove(),e.remove()}),495)}))},listenPriorityInput:function(t){const e=document.createElement("div");e.classList.add("color-options-container"),t.addEventListener("click",(()=>{r.displayColorOptions(e),e.querySelectorAll(".color-options").forEach((e=>{e.addEventListener("click",(()=>{const n=e.style.backgroundColor,o=e.style.borderColor;r.changePriorityColor(t,n,o)}))})),window.addEventListener("click",(t=>{t.target.getAttribute("id","priority-input")||r.displayColorOptions(e,"window")}))}))},listenAddBtn:function(t,e){let n=!1;t.addEventListener("click",(t=>{if(!n){const t=e.querySelectorAll(".form-input-container .input-container:not(#priority-input)"),a=e.querySelector("#priority-input");let i=function(t){for(let e of t)if(!e.checkValidity())return!1;return!0}(t);if(i){const n=t[0].value,i=t[1].value,s=t[2].value,d=a.getAttribute("value"),c=o.D8.objects.addTodoObj(n,s,i,d);o.D8.objects.addProjectTodoList((0,o.yH)(),c),console.log(o.D8.objects.getProjectsTodoListObj()),console.log((0,o.yH)()),(0,o.dm)(c),r.addSuccessMessage(e)}n=!0}}))}},i=r,s=r.addAnimation},524:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(626);const r=(()=>{let t;return{addContent:function(){const t=document.createElement("div");return t.classList.add("header-container"),t.innerHTML+='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>',t.appendChild(function(){const t=document.createElement("h2");return t.textContent="todowht",t}()),t},listenMenuSvg:function(e,n){t=e.querySelector("svg"),t.addEventListener("click",(()=>{(0,o.C)(n)}))}}})()},794:(t,e,n)=>{n.d(e,{Z:()=>i});var o=n(524),r=n(626),a=n(637);const i=(()=>{let t;return{addContent:function(){const e=document.querySelector("#content");t=document.createElement("div"),t.classList.add("sidebar-panel-container");const n=o.Z.addContent(),i=r.Z.addContent(),s=a.ZP.addContent("Inbox",0);o.Z.listenMenuSvg(n,i),e.append(n,t),t.append(i,s)},getSidebarPanelContainer:function(){return t}}})()},626:(t,e,n)=>{n.d(e,{Z:()=>g,C:()=>v});var o=n(725);const r='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 11H15V14H13V11H10V9H13V6H15V9H18M20 4V16H8V4H20M20 2H8C6.9 2 6 2.9 6 4V16C6 17.11 6.9 18 8 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M4 6H2V20C2 21.11 2.9 22 4 22H18V20H4V6Z" /></svg>';var a=n(637),i=n(794),s=n(446);let d,c,l,u,p=[];const m={addContent:function(){return d=document.createElement("div"),d.classList.add("sidebar-container"),d.append(function(){const t=document.createElement("div");t.classList.add("inbox-tab"),t.setAttribute("data-project-id",0),t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,15H15A3,3 0 0,1 12,18A3,3 0 0,1 9,15H5V5H19M19,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" /></svg>';const e=document.createElement("p");return e.textContent="Inbox",t.appendChild(e),f.listenInboxTab(t),t}(),b.addProjectsTab(),b.addProjects(),b.addProjectCreatorTab()),d},changeSidebarContainerState:function(t,e){const n=i.Z.getSidebarPanelContainer();n.removeChild(n.querySelector(".panel-container")),n.appendChild(a.ZP.addContent(t,e))}},b=(()=>{let t;function e(e,n){if(!e||!n){const t=document.createElement("div");t.classList.add("project-container");const e=document.createElement("p");e.textContent="Work",t.appendChild(e),t.setAttribute("data-project-id",1);const n=document.createElement("div");n.classList.add("project-container");const o=document.createElement("p");o.textContent="Self",n.appendChild(o),n.setAttribute("data-project-id",2);const r=document.createElement("div");r.classList.add("project-container");const a=document.createElement("p");return a.textContent="smh",r.appendChild(a),r.setAttribute("data-project-id",3),p.splice(0,0,t,n,r),f.listenProjectsContainers(),[t,n,r]}{const o=document.createElement("div"),r=()=>{p[0].classList.contains("expandable")&&o.classList.add("expandable")};o.classList.add("project-container"),r();const a=document.createElement("p");a.textContent=e,o.appendChild(a),o.setAttribute("data-project-id",n),p.push(o),f.listenProjectsContainers(o),t.appendChild(o)}}return{addProjectsTab:function(){l=document.createElement("div"),l.classList.add("projects-tab");const t=document.createElement("p");return t.textContent="Projects",l.appendChild(t),l.innerHTML+=o.Z,c=l.querySelector("svg"),c.style.transform="rotate(180deg)",l},addProjects:function(){return t=document.createElement("div"),t.classList.add("all-projects-container"),e().forEach((e=>{t.appendChild(e)})),f.listenProjectsTabEvent(),t},addProjectContent:e,addProjectCreatorTab:function(){void 0!==u?(u.innerHTML="",u.classList.remove("inputting"),console.log(u.classList)):(u=document.createElement("div"),u.classList.add("project-creator-container")),u.innerHTML=r;const t=document.createElement("p");t.textContent="Add Project",u.appendChild(t),f.listenProjectCreatorContainer();for(const t of u.children)(0,s.E)(t,"fadeIn",.1);return u},addProjectCreatorInput:function(){u.innerHTML="",u.classList.add("inputting");const t=document.createElement("input");t.classList.add("project-input-container"),t.placeholder="Project Name",t.maxLength=20,(0,s.E)(t,"fadeIn",.1);const e=document.createElement("div"),n=r;e.innerHTML=n,(0,s.E)(e,"fadeIn",.1),u.append(t,e),f.listenAddProjectCreatorBtn(e,t),f.listenWindow()}}})(),f={listenInboxTab:function(t){t.addEventListener("click",(()=>{m.changeSidebarContainerState("Inbox",0)}))},listenProjectsTabEvent:function(){l.addEventListener("click",(()=>{p.forEach((t=>{t.classList.contains("expandable")?t.classList.remove("expandable"):t.classList.add("expandable")})),"rotate(180deg)"===c.style.transform?c.style.transform="rotate(0deg)":"rotate(0deg)"===c.style.transform&&(c.style.transform="rotate(180deg)")}))},listenProjectsContainers:function(t){t&&t.addEventListener("click",(()=>{const e=t.querySelector("p");m.changeSidebarContainerState(e.textContent,t.getAttribute("data-project-id"))})),p.forEach((t=>{t.addEventListener("click",(()=>{const e=t.querySelector("p");m.changeSidebarContainerState(e.textContent,t.getAttribute("data-project-id"))}))}))},listenProjectCreatorContainer:function(){u.addEventListener("click",(()=>{u.classList.contains("inputting")||b.addProjectCreatorInput()}))},slideSidebarContainer:function(t){document.querySelector(".panel-container").style.transition=".2s",t.classList.contains("slideable")?(t.classList.remove("slideable"),document.querySelector(".panel-container").style.marginLeft="clamp(150px, 20vw, 300px)"):t.classList.contains("slideable")||(t.classList.add("slideable"),document.querySelector(".panel-container").style.marginLeft="0")},listenAddProjectCreatorBtn:function(t,e){t.addEventListener("click",(()=>{const t=e.value,n=a.D8.objects.getProjectsTodoListObj(),o=Object.keys(n).length;a.D8.objects.addProjectTodoList(o),b.addProjectContent(t,o+1),b.addProjectCreatorTab(),console.log("adding")}))},listenWindow:function(){window.addEventListener("click",(t=>{u.classList.contains("inputting")&&(t.target.classList.contains("inputting")||t.target.classList.contains("project-input-container")||0===t.target.classList.length||b.addProjectCreatorTab())}))}},g=m,v=f.slideSidebarContainer},637:(t,e,n)=>{n.d(e,{dm:()=>d,ZP:()=>s,yH:()=>c,D8:()=>l});var o=n(725);var r=n(446);window.addEventListener("DOMContentLoaded",(()=>{a.todo.addTodoTemplateContent()}));const a=(()=>{let t,e,n;const a=(()=>{function a(t){const n=s(),r=document.createElement("div");r.classList.add("todo-container"),r.setAttribute("data-id",e);const a=document.createElement("div");a.classList.add("check-mark-container");const d=document.createElement("p");d.textContent=t.title;const c=document.createElement("p");c.textContent=i.convertDate(t.dueDate),r.append(a,d,c),r.innerHTML+=o.Z;const l=document.createElement("p");l.classList.add("todo-desc"),l.textContent=t.desc,r.appendChild(l),i.listeners.listenTodoContainer(r,l),function(){const t=n.querySelector(".todo-container:nth-child(4)");n.insertBefore(r,t)}(),function(t,e){const n=t.querySelector(".check-mark-container"),o=i.objects.getPriorityStyling(e);n.style.backgroundColor=o.bgc,t.style.borderColor=o.borderContainerColor,n.style.borderColor=o.borderColor,n.addEventListener("mouseenter",(()=>{n.style.backgroundColor=o.hoverBgc})),n.addEventListener("mouseleave",(()=>{n.style.backgroundColor=o.bgc}))}(r,t.priority),e++}function s(){return n}return{addTodoContent:function(t,e){let n=i.objects.getProjectsTodoListObj()[e];t.appendChild(function(){const t=document.createElement("div");t.classList.add("todo-container"),t.classList.add("todo-form-btn-container");t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" /></svg>';const e=document.createElement("p");return e.textContent="ADD TODO",t.appendChild(e),i.listeners.listenTodoBtnFormContainer(t),t}()),"object"==typeof n&&n.forEach((t=>{a(t)}))},addTodoTemplateContent:function(){let t=i.objects.addTodoObj("Master Plan of Achievements: Today's Tasks","Stay organized and on top of your tasks with this comprehensive to-do list. Whether you're tackling work assignments.","2023-09-24T12:17","orange");i.objects.addProjectTodoList(0,t),t=i.objects.addTodoObj("TaskTrek: Navigating Your Day's Endeavors","Effortlessly manage tasks, boost productivity, and achieve more with TaskTrek.","2028-11-23T18:21","blue"),i.objects.addProjectTodoList(0,t),t=i.objects.addTodoObj("Spectrum Serenade: Echoes of Imagination","Embark on a vivid journey through diverse realms of creativity in Spectrum Serenade.","2043-07-25T03:43","red"),i.objects.addProjectTodoList(0,t),t=i.objects.addTodoObj("Productive Pursuits: Today's To-Do List","","","blue"),i.objects.addProjectTodoList(0,t),t=i.objects.addTodoObj("Efficiency Unleashed: Tasks to Tackle","","2023-09-25T03:43","orange"),i.objects.addProjectTodoList(2,t),t=i.objects.addTodoObj("Daily Achievements: Your Action Plan","Embark on a journey of productivity as you tackle a variety of tasks that span from errands to creative projects.","2043-07-25T03:43","gray"),i.objects.addProjectTodoList(2,t),t=i.objects.addTodoObj("Mission Control: Prioritized Tasks Ahead","Dive into a whirlwind of activities that range from mundane chores to exciting endeavors.","2043-07-25T03:43","gray"),i.objects.addProjectTodoList(1,t),t=i.objects.addTodoObj("Conquer the Day: Tasks at Your Fingertips","Discover the art of balance as you navigate between work, relaxation, and self-care.","","red"),i.objects.addProjectTodoList(0,t)},removeTodoContainer:function(e){const n=e.getAttribute("data-id");console.log(n),i.objects.removeTodoObj(n,t),e.classList.contains("expandable")&&(e.classList.remove("expandable"),e.style.gridTemplateRows="auto 0px"),e.style.zIndex="-1",r.Z.addAnimation(e,"slideUp",.5),setTimeout((()=>e.remove()),480)},addTodoContainer:a,containsDesc:function(t,e){return!(e.textContent.length<=0&&(t.removeChild(t.querySelector("svg")),t.style.cursor="default",1))},handleExpandableClass:function(t,e){t.classList.contains("expandable")?(t.classList.remove("expandable"),t.style.gridTemplateRows=null):(t.classList.add("expandable"),i.listeners.listenTodoDesc(t,e))}}})();return{addContent:function(o,r){return t=Number.parseInt(r),e=0,function(){n=document.createElement("div"),n.classList.add("panel-container");const e=document.createElement("h1");e.textContent=o;const r=document.createElement("hr");return n.append(e,r),a.addTodoContent(n,t),n}()},getIdIncrementor:function(){return e},getCurrentProjectId:function(){return t},todo:a}})(),i=(()=>{let t={};return{objects:(()=>{function e(){return t}return{getProjectsTodoListObj:e,getPriorityStyling:function(t){let e,n,o,r;return"red"===t?(e="#ef233c",r="#ff9aa7",n="#f6dad8",o="#f7c1be"):"orange"===t?(e="#ed9f11",r="#ffcb6d",n="#fff1de",o="#ffdfb5"):"blue"===t?(e="#2079ff",r="#afafff",n="#e1edff",o="#bbd6ff"):"gray"===t&&(e="#696969",r="#c8c8c8",n="#ebebeb",o="#d9d9d9"),{borderColor:e,bgc:n,hoverBgc:o,borderContainerColor:r}},addProjectTodoList:function(e,n){(e=String(e))in t||n?!(e in t)&&n?t[e]=[n]:t[e].push(n):t[e]=[]},addTodoObj:function(t,e="",n="",o="gray",r=!1){if(e.length>=160)throw new Error(`Description is longer than 160 characters! \n${e}`);if(t.length<3||t.length>=60)throw new Error(`title is less than 3 characters or longer than 60 characters! \n${t}`);if(""!==n&&!n.match(/^[2][0](?:[2][3-9]|[3-9][0-9])-(?:[0][1-9]|[1][0-2])-(?:[0][1-9]|[1-2][0-9]|[3][0-1])T(?:[0-1][[0-9]|[2][0-3]):(?:[0-5][0-9])$/gm))throw new Error(`Invalid date format! \n${n}`);return{title:t,desc:e,dueDate:n,priority:o,isDone:r,toStr:()=>`Current todo: "${t}", desc: "${e}", due in ${n} of priority ${o}`}},removeTodoObj:function(t,n){console.log("removing "+t),e()[n].splice(t,1)}}})(),listeners:{listenTodoContainer:function(t,e){function n(t){a.todo.removeTodoContainer(t)}a.todo.containsDesc(t,e)?t.addEventListener("click",(o=>{"check-mark-container"===o.target.className?n(o.target.parentElement):a.todo.handleExpandableClass(t,e)})):t.addEventListener("click",(t=>{"check-mark-container"===t.target.className&&n(t.target.parentElement)}))},listenTodoBtnFormContainer:function(t){t.addEventListener("click",(()=>{document.body.appendChild(r.Z.displayFormContainer())}))},listenTodoDesc:function(t,e){let n,o=!1;new ResizeObserver((e=>{n=e[0].target.clientHeight,o||(console.log("doing"),o=!0,t.style.gridTemplateRows=n<=116?`auto ${n+20}px`:"auto 136px")})).observe(e)}},convertDate:function(t){return""===t?"":t.substring(0,t.indexOf("T"))+" at "+t.substring(t.indexOf("T")+1,t.length)}}})(),s=a,d=a.todo.addTodoContainer,c=a.getCurrentProjectId,l=i}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,n),a.exports}n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n(626)})();