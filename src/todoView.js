

const todoPanel = (() => {
  function showContent() {

  }

  function todoObj(title, desc, dueDate, priority) {
    const toStr = () => {
      return `Current todo: \"${this.title}\", desc: \"${this.desc}\", due in ${this.dueDate} of priority ${priority}`;
    }

    return {title, desc, dueDate, priority, toStr};
  }
})();

export default todoPanel;