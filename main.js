let addBtn = document.querySelector('button');
addBtn.onclick = addTask;

function addTask() {
  let taskInput = document.querySelector('input');
  let taskValue = taskInput.value;

  var li = document.createElement('li');
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  li.appendChild(checkbox);

  var textNode = document.createTextNode(taskValue);
  li.appendChild(textNode);

  var ul = document.getElementById('taskList');
  ul.appendChild(li);

  taskInput.value = '';

  checkbox.onclick = checked;
  function checked() {
    li.style.textDecoration = 'line-through';
    li.style.background = 'rgb(213, 236, 213)';
  }
}
