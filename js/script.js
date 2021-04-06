window.onload = () => {
  const taskArea = document.getElementById("task-area");

  taskArea.innerHTML = localStorage.getItem("taskArea");
};

const addTask = () => {
  const inputTask = document.querySelector("input[type='text']");
  const taskArea = document.getElementById("task-area");

  if (inputTask.value != "") {
    taskArea.innerHTML += `<h3><input type='checkbox'>${inputTask.value}</h3>`;

    inputTask.value = "";
    localStorage.setItem("taskArea", taskArea.innerHTML);
  }
};

const removeTasks = () => {
  const taskArea = document.getElementById("task-area");
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  const checkText = document.querySelectorAll("h3");

  if (taskArea.innerHTML != "") {
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked == true) {
        checkText[i].remove();
        localStorage.setItem("taskArea", taskArea.innerHTML);
      }
    }
  }
};

const clearTasks = () => {
  const taskArea = document.getElementById("task-area");

  taskArea.innerHTML = "";
  localStorage.clear();
};
