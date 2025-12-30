const todoList = [{
  name: 'Make dinner',
  due: '2025-12-01'
}, {
  name: 'Wash dishes',
  due: '2025-12-10'
}];
listTodo();
function addTodo() {
  const todoElement = document.querySelector(".js-todo-textbox");
  var todoName = todoElement.value;

  const todoDueElement = document.querySelector(".js-date-input");
  var todoDue = todoDueElement.value;

  todoList.push({
    name: todoName,
    due: todoDue
  });

  todoElement.value = '';
  listTodo();
}
function listTodo() {
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name } = todoObject;
    const { due } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${due}</div>
    <button onclick="
      todoList.splice(${i},1);
      console.log(todoList);
      listTodo();
    " class="delete-button">Delete
    </button>
    `;
    todoListHTML += html;
  }
    document.querySelector('.todolist-array')
      .innerHTML = todoListHTML;
}

