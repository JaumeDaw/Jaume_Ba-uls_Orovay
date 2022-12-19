let button = document.getElementById("button");
let input = document.getElementById("task");
let list = document.getElementById("list");

button.addEventListener("mousedown", function (ev) {
  button.style.transform = "scale(0.95)";
  button.style.boxShadow = "inset 1px 1px 1px 0.5px black";
  if (input.value !== "" && input.value.length < 50) {
    let task = document.createElement("div");
    /* task.setAttribute('class','remove'); */
    let taskBody = document.createElement("p");
    taskBody.textContent =
      input.value.substring(0, 1).toUpperCase() + input.value.substring(1);
    taskBody.setAttribute('class', "task")
    let remove = document.createElement("p");
    remove.textContent = "remove";
    remove.setAttribute("class", "remove");
    //task.appendChild(remove);

    task.appendChild(taskBody);
    task.appendChild(remove);
    list.appendChild(task);

    taskBody.addEventListener("click", function (ev) {
      ev.target.parentElement.insertBefore(
        ev.target.parentElement.parentElement.firstChild,
        ev.target.parentElement
      );
    });

    remove.addEventListener("mousedown", function (ev) {
      ev.target.parentElement.remove();
    });
  }
});

button.addEventListener("mouseup", function (ev) {
  button.style.transform = "scale(1)";
  button.style.boxShadow = "0 0 0 transparent";
  input.value = "";
});
