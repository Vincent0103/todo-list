(()=>{"use strict";var t={725:(t,e,n)=>{n.d(e,{Z:()=>o});const o='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>'},446:(t,e,n)=>{n.d(e,{E:()=>s,Z:()=>i});var o=n(637),r=n(192);const a=(()=>{let t;function e(){return t}function n(t,e,n){t.style.animation=`${String(n)}s ${e}`}return{displayFormContainer:function(){t=document.createElement("div"),t.classList.add("darken-body-div");const e=document.createElement("div");return e.classList.add("panel-form-container"),e.append(function(){const t=document.createElement("btn");return t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z" /></svg>',t.classList.add("close-form-btn"),c.listenCloseBtn(t),t}(),function(){const t=document.createElement("h1");return t.textContent="TODO",t}(),function(){const t=document.createElement("form");return t.setAttribute("action","javascript:void(0);"),t.classList.add("form-input-container"),t.append(function(){const t=document.createElement("input");return t.classList.add("input-container"),t.classList.add("title-input"),t.required=!0,t.minLength=3,t.maxLength=60,t.placeholder="Title*",t}(),function(){const t=document.createElement("input");return t.classList.add("input-container"),t.classList.add("date-input"),t.type="datetime-local",t.min=(new Date).toISOString().slice(0,(new Date).toISOString().lastIndexOf(":")),t}(),function(){const t=document.createElement("textarea");return t.classList.add("input-container"),t.classList.add("desc-input"),t.maxLength=160,t.placeholder="Description",t}(),function(){const t=document.createElement("div");return t.classList.add("priority-container"),t.append(function(){const t=document.createElement("label");return t.setAttribute("for","priority-input"),t.textContent="Priority: ",t}(),function(){const t=document.createElement("div");return t.classList.add("input-container"),t.setAttribute("id","priority-input"),t.setAttribute("value","gray"),t.style.borderColor="rgb(92, 92, 92)",c.listenPriorityInput(t),t}()),t}(),function(){const t=document.createElement("button");return t.type="submit",t.textContent="ADD",c.listenAddBtn(t,e),t}()),t}()),t.appendChild(e),t},getFormContainer:e,displayColorOptions:function(t,o=null){if(t.classList.contains("show-container")||null!==o)n(t,"fadeOut",.2),setTimeout((()=>{t.classList.remove("show-container"),n(t,"fadeIn",.2),t.style.display="none",t.innerHTML=""}),180);else{t.classList.add("show-container"),t.style.display="flex";const r=e().querySelector(".panel-form-container");function a(){const t=document.createElement("div");t.classList.add("color-options"),t.style.backgroundColor="red",t.style.border="1px solid rgb(206, 0, 0)";const e=document.createElement("div");e.classList.add("color-options"),e.style.backgroundColor="orange",e.style.border="1px solid rgb(209, 136, 0)";const n=document.createElement("div");n.classList.add("color-options"),n.style.backgroundColor="blue",n.style.border="1px solid rgb(0, 0, 212)";const o=document.createElement("div");return o.classList.add("color-options"),o.style.backgroundColor="gray",o.style.border="1px solid rgb(92, 92, 92)",[t,e,n,function(){const t=document.createElement("p");return t.textContent="|",t}(),o]}a().forEach((e=>{t.appendChild(e)})),r.appendChild(t)}},changePriorityColor:function(t,e,n){t.style.backgroundColor=e,t.style.borderColor=n,t.setAttribute("value",e)},addAnimation:n,addSuccessMessage:function(){const t=e(),n=t.querySelector(".panel-form-container"),o=n.querySelectorAll("*");a.addAnimation(n,"success",2),o.forEach((t=>{a.addAnimation(t,"fadeOut",.2)})),setTimeout((()=>{n.innerHTML="",n.classList.add("success-container"),n.innerHTML+='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" /></svg>',a.addAnimation(n.querySelector("svg"),"fadeIn",.5)}),190),setTimeout((()=>{a.addAnimation(t,"fadeOut",.5),setTimeout((()=>t.remove()),490)}),1300)}}})(),c={listenCloseBtn:function(t){t.addEventListener("click",(()=>{const t=a.getFormContainer(),e=t.querySelector(".panel-form-container");a.addAnimation(e,"slideCenterOut",.5),a.addAnimation(t,"fadeOut",.5),setTimeout((()=>{t.remove(),e.remove()}),495)}))},listenPriorityInput:function(t){const e=document.createElement("div");e.classList.add("color-options-container"),t.addEventListener("click",(()=>{a.displayColorOptions(e),e.querySelectorAll(".color-options").forEach((e=>{e.addEventListener("click",(()=>{const n=e.style.backgroundColor,o=e.style.borderColor;a.changePriorityColor(t,n,o)}))})),window.addEventListener("click",(t=>{t.target.getAttribute("id","priority-input")||a.displayColorOptions(e,"window")}))}))},listenAddBtn:function(t,e){let n=!1;t.addEventListener("click",(t=>{if(!n){const t=e.querySelectorAll(".form-input-container .input-container:not(#priority-input)"),c=e.querySelector("#priority-input");let i=function(t){for(let e of t)if(!e.checkValidity())return!1;return!0}(t);if(i){const i=(0,o.yH)(),s=t[0].value,d=t[1].value,l=t[2].value,u=c.getAttribute("value"),p=o.D8.objects.addTodoObj(s,l,d,u);o.D8.objects.addProjectTodoList(i,p),(0,o.dm)(p),(0,r.ZP)("form",i,p),a.addSuccessMessage(e),n=!0}}}))}},i=a,s=a.addAnimation},524:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(626);const r=(()=>{let t;return{addContent:function(){const t=document.createElement("div");return t.classList.add("header-container"),t.innerHTML+='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>',t.appendChild(function(){const t=document.createElement("h2");return t.textContent="todowht",t}()),t},listenMenuSvg:function(e,n){t=e.querySelector("svg"),t.addEventListener("click",(()=>{(0,o.C)(n)}))}}})()},794:(t,e,n)=>{n.d(e,{Z:()=>i});var o=n(524),r=n(626),a=n(637),c=n(192);const i=(()=>{let t;return{addContent:function(){const e=document.querySelector("#content");t=document.createElement("div"),t.classList.add("sidebar-panel-container"),(0,c.ZP)();const n=o.Z.addContent(),i=r.Z.addContent(),s=a.ZP.addContent("Inbox",0);o.Z.listenMenuSvg(n,i),e.append(n,t),t.append(i,s)},getSidebarPanelContainer:function(){return t}}})()},626:(t,e,n)=>{n.d(e,{Z:()=>L,C:()=>v});var o=n(725);const r='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 11H15V14H13V11H10V9H13V6H15V9H18M20 4V16H8V4H20M20 2H8C6.9 2 6 2.9 6 4V16C6 17.11 6.9 18 8 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M4 6H2V20C2 21.11 2.9 22 4 22H18V20H4V6Z" /></svg>';var a=n(637),c=n(794),i=n(446),s=n(192);let d,l,u,p,m=[];const f={addContent:function(){d=document.createElement("div"),d.classList.add("sidebar-container"),d.append(function(){const t=document.createElement("div");t.classList.add("inbox-tab"),t.setAttribute("data-project-id",0),t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,15H15A3,3 0 0,1 12,18A3,3 0 0,1 9,15H5V5H19M19,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z" /></svg>';const e=document.createElement("p");return e.textContent="Inbox",t.appendChild(e),b.listenInboxTab(t),t}(),g.addProjectsTab(),g.addProjects());const t=s.cj.getProjectNames();for(const e in t)g.addProjectContent(e,t[e]);return d.appendChild(g.addProjectCreatorTab()),d},changeSidebarContainerState:function(t,e){const n=c.Z.getSidebarPanelContainer();n.removeChild(n.querySelector(".panel-container")),n.appendChild(a.ZP.addContent(t,e))}},g=(()=>{let t;function e(e,n){if(!n||!e){const t=document.createElement("div");t.classList.add("project-container");const e=document.createElement("p");e.textContent="Work",t.appendChild(e),t.setAttribute("data-project-id",1);const n=document.createElement("div");n.classList.add("project-container");const o=document.createElement("p");return o.textContent="Self",n.appendChild(o),n.setAttribute("data-project-id",2),m.splice(0,0,t,n),b.listenProjectsContainers(),[t,n]}{const o=document.createElement("div"),r=()=>{m[0].classList.contains("expandable")&&o.classList.add("expandable")};o.classList.add("project-container"),r();const a=document.createElement("p");a.textContent=n,o.appendChild(a),o.setAttribute("data-project-id",e),s.cj.addProjectName(e,n),m.push(o),b.listenProjectsContainers(o),t.appendChild(o)}}return{addProjectsTab:function(){u=document.createElement("div"),u.classList.add("projects-tab");const t=document.createElement("p");return t.textContent="Projects",u.appendChild(t),u.innerHTML+=o.Z,l=u.querySelector("svg"),l.style.transform="rotate(180deg)",u},addProjects:function(){return t=document.createElement("div"),t.classList.add("all-projects-container"),e().forEach((e=>{t.appendChild(e)})),b.listenProjectsTabEvent(),t},addProjectContent:e,addProjectCreatorTab:function(){void 0!==p?(p.innerHTML="",p.classList.remove("inputting")):(p=document.createElement("div"),p.classList.add("project-creator-container")),p.innerHTML=r;const t=document.createElement("p");t.textContent="Add Project",p.appendChild(t),b.listenProjectCreatorContainer();for(const t of p.children)(0,i.E)(t,"fadeIn",.1);return p},addProjectCreatorInput:function(){p.innerHTML="",p.classList.add("inputting");const e=document.createElement("input");e.classList.add("project-input-container"),e.placeholder="Project Name",e.maxLength=20,(0,i.E)(e,"fadeIn",.1);const n=document.createElement("div"),o=r;n.innerHTML=o,(0,i.E)(n,"fadeIn",.1),p.append(e,n),b.listenAddProjectCreatorBtn(t,n,e),b.listenWindow()}}})(),b={listenInboxTab:function(t){t.addEventListener("click",(()=>{f.changeSidebarContainerState("Inbox",0)}))},listenProjectsTabEvent:function(){u.addEventListener("click",(()=>{m.forEach((t=>{t.classList.contains("expandable")?t.classList.remove("expandable"):t.classList.add("expandable")})),"rotate(180deg)"===l.style.transform?l.style.transform="rotate(0deg)":"rotate(0deg)"===l.style.transform&&(l.style.transform="rotate(180deg)")}))},listenProjectsContainers:function(t){t&&t.addEventListener("click",(()=>{const e=t.querySelector("p");f.changeSidebarContainerState(e.textContent,t.getAttribute("data-project-id"))})),m.forEach((t=>{t.addEventListener("click",(()=>{const e=t.querySelector("p");f.changeSidebarContainerState(e.textContent,t.getAttribute("data-project-id"))}))}))},listenProjectCreatorContainer:function(){p.addEventListener("click",(()=>{p.classList.contains("inputting")||g.addProjectCreatorInput()}))},slideSidebarContainer:function(t){document.querySelector(".panel-container").style.transition=".2s",t.classList.contains("slideable")?(t.classList.remove("slideable"),document.querySelector(".panel-container").style.marginLeft="clamp(150px, 20vw, 300px)"):t.classList.contains("slideable")||(t.classList.add("slideable"),document.querySelector(".panel-container").style.marginLeft="0")},listenAddProjectCreatorBtn:function(t,e,n){e.addEventListener("click",(()=>{const e=n.value,o=t.querySelector(".project-container:last-child"),r=Number.parseInt(o.getAttribute("data-project-id"));a.D8.objects.addProjectTodoList(r+1),g.addProjectContent(r+1,e),g.addProjectCreatorTab()}))},listenWindow:function(){window.addEventListener("click",(t=>{p.classList.contains("inputting")&&(t.target.classList.contains("inputting")||t.target.classList.contains("project-input-container")||0===t.target.classList.length||g.addProjectCreatorTab())}))}},L=f,v=b.slideSidebarContainer},192:(t,e,n)=>{n.d(e,{ZP:()=>s,_7:()=>d,cj:()=>l});var o=n(637);let r=!0;function a(t){let e;try{e=window[t];const n="__storage_test__";return e.setItem(n,n),e.removeItem(n),!0}catch(t){return t instanceof DOMException&&(22===t.code||1014===t.code||"QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&e&&0!==e.length}}function c(t,e,n){if(r&&(localStorage.getItem("projectsTodoListObj")&&function(t){for(const e of Object.keys(t)){const n=t[e];for(const t in n)i(n,e,t)}}(JSON.parse(localStorage.getItem("projectsTodoListObj"))),r=!1),localStorage.getItem("projectsTodoListObj")){if("form"===t){const t=JSON.parse(localStorage.getItem("projectsTodoListObj"));!function(t,e,n){(e=String(e))in t||n?!(e in t)&&n?t[e]=[n]:t[e].push(n):t[e]=[]}(t,e,n),localStorage.setItem("projectsTodoListObj",JSON.stringify(t))}}else{!function(){let t=o.D8.objects.addTodoObj("click the check button to remove todo list","","","blue");o.D8.objects.addProjectTodoList(0,t),t=o.D8.objects.addTodoObj("click me!","Stay organized and on top of your tasks with this comprehensive to-do list. Whether you're tackling work assignments.","2028-11-23T18:21","red"),o.D8.objects.addProjectTodoList(0,t),t=o.D8.objects.addTodoObj("Welcome to TODOWHT!","","2023-09-24T12:17","blue"),o.D8.objects.addProjectTodoList(0,t)}();const t=o.D8.objects.getProjectsTodoListObj();localStorage.setItem("projectsTodoListObj",JSON.stringify(t))}}function i(t,e,n){o.D8.objects.addProjectTodoList(Number.parseInt(e),t[n])}const s=function(t,e,n){a("localStorage")&&(localStorage.getItem("projectsTodoListObj")&&"form"===t||localStorage.getItem("projectsTodoListObj")&&"remove"===t?c(t,e,n):c())},d=function(t,e){if(a("localStorage")){let n=JSON.parse(localStorage.getItem("projectsTodoListObj")),o=Object.keys(n[e]).indexOf(t);n[e].splice(o,1),localStorage.setItem("projectsTodoListObj",JSON.stringify(n))}},l={getProjectNames:function(){return JSON.parse(localStorage.getItem("projectNames"))},addProjectName:function(t,e){let n;n=localStorage.getItem("projectNames")?JSON.parse(localStorage.getItem("projectNames")):localStorage.setItem("projectNames",JSON.stringify({})),void 0===n?n={[t]:e}:t in n||(n[t]=e),localStorage.setItem("projectNames",JSON.stringify(n))}}},637:(t,e,n)=>{n.d(e,{dm:()=>d,ZP:()=>s,yH:()=>l,D8:()=>u});var o=n(725);var r=n(446),a=n(192);const c=(()=>{let t,e,n;const c=(()=>{function c(t){const n=s(),r=document.createElement("div");r.classList.add("todo-container"),r.setAttribute("data-id",e);const a=document.createElement("div");a.classList.add("check-mark-container");const c=document.createElement("p");c.textContent=t.title;const d=function(t){let e=document.createElement("p");return e.innerHTML=t?`<span>to: </span>${i.convertDate(t)}`:"",e.classList.add("todo-due-date"),e}(t.dueDate);r.append(a,c,d),r.innerHTML+=o.Z;const l=document.createElement("p");l.classList.add("todo-desc"),l.textContent=t.desc,r.appendChild(l),i.listeners.listenTodoContainer(r,l),function(){const t=n.querySelector(".todo-container:nth-child(4)");n.insertBefore(r,t)}(),function(t,e){const n=t.querySelector(".check-mark-container"),o=i.objects.getPriorityStyling(e);n.style.backgroundColor=o.bgc,t.style.borderColor=o.borderContainerColor,n.style.borderColor=o.borderColor,n.addEventListener("mouseenter",(()=>{n.style.backgroundColor=o.hoverBgc})),n.addEventListener("mouseleave",(()=>{n.style.backgroundColor=o.bgc}))}(r,t.priority),e++}function s(){return n}return{addTodoContent:function(t,e){let n=i.objects.getProjectsTodoListObj()[e];t.appendChild(function(){const t=document.createElement("div");t.classList.add("todo-container"),t.classList.add("todo-form-btn-container");t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" /></svg>';const e=document.createElement("p");return e.textContent="ADD TODO",t.appendChild(e),i.listeners.listenTodoBtnFormContainer(t),t}()),"object"==typeof n&&n.forEach((t=>{c(t)}))},removeTodoContainer:function(e){const n=e.getAttribute("data-id");(0,a._7)(n,t),i.objects.removeTodoObj(n,t),e.classList.contains("expandable")&&(e.classList.remove("expandable"),e.style.gridTemplateRows="auto 0px"),e.style.zIndex="-1",r.Z.addAnimation(e,"slideUp",.5),setTimeout((()=>e.remove()),480)},addTodoContainer:c,containsDesc:function(t,e){return!(e.textContent.length<=0&&(t.removeChild(t.querySelector("svg")),t.style.cursor="default",1))},handleExpandableClass:function(t,e){t.classList.contains("expandable")?(t.classList.remove("expandable"),t.style.gridTemplateRows=null):(t.classList.add("expandable"),i.listeners.listenTodoDesc(t,e))}}})();return{addContent:function(o,r){return t=Number.parseInt(r),e=0,function(){n=document.createElement("div"),n.classList.add("panel-container");const e=document.createElement("h1");e.textContent=o;const r=document.createElement("hr");return n.append(e,r),c.addTodoContent(n,t),n}()},getIdIncrementor:function(){return e},getCurrentProjectId:function(){return t},todo:c}})(),i=(()=>{let t={};return{objects:(()=>{function e(){return t}return{getProjectsTodoListObj:e,getPriorityStyling:function(t){let e,n,o,r;return"red"===t?(e="#ef233c",r="#ff9aa7",n="#f6dad8",o="#f7c1be"):"orange"===t?(e="#ed9f11",r="#ffcb6d",n="#fff1de",o="#ffdfb5"):"blue"===t?(e="#2079ff",r="#afafff",n="#e1edff",o="#bbd6ff"):"gray"===t&&(e="#696969",r="#c8c8c8",n="#ebebeb",o="#d9d9d9"),{borderColor:e,bgc:n,hoverBgc:o,borderContainerColor:r}},addProjectTodoList:function(e,n){(e=String(e))in t||n?!(e in t)&&n?t[e]=[n]:t[e].push(n):t[e]=[]},addTodoObj:function(t,e="",n="",o="gray",r=!1){if(e.length>=160)throw new Error(`Description is longer than 160 characters! \n${e}`);if(t.length<3||t.length>=60)throw new Error(`title is less than 3 characters or longer than 60 characters! \n${t}`);if(""!==n&&!n.match(/^[2][0](?:[2][3-9]|[3-9][0-9])-(?:[0][1-9]|[1][0-2])-(?:[0][1-9]|[1-2][0-9]|[3][0-1])T(?:[0-1][[0-9]|[2][0-3]):(?:[0-5][0-9])$/gm))throw new Error(`Invalid date format! \n${n}`);return{title:t,desc:e,dueDate:n,priority:o,isDone:r,toStr:()=>`Current todo: "${t}", desc: "${e}", due in ${n} of priority ${o}`}},removeTodoObj:function(t,n){e()[n].splice(t,1)}}})(),listeners:{listenTodoContainer:function(t,e){function n(t){c.todo.removeTodoContainer(t)}c.todo.containsDesc(t,e)?t.addEventListener("click",(o=>{"check-mark-container"===o.target.className?n(o.target.parentElement):c.todo.handleExpandableClass(t,e)})):t.addEventListener("click",(t=>{"check-mark-container"===t.target.className&&n(t.target.parentElement)}))},listenTodoBtnFormContainer:function(t){t.addEventListener("click",(()=>{document.body.appendChild(r.Z.displayFormContainer())}))},listenTodoDesc:function(t,e){let n,o=!1;new ResizeObserver((e=>{n=e[0].target.clientHeight,o||(o=!0,t.style.gridTemplateRows=n<=116?`auto ${n+20}px`:"auto 136px")})).observe(e)}},convertDate:function(t){return""===t?"":t.substring(0,t.indexOf("T"))+" at "+t.substring(t.indexOf("T")+1,t.length)}}})(),s=c,d=c.todo.addTodoContainer,l=c.getCurrentProjectId,u=i}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,n),a.exports}n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n(626)})();