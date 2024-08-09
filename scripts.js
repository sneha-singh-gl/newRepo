document.getElementById('add-btn').addEventListener('click', addTodo);

function addTodo() {
  const todoInput = document.getElementById('todo-input');
  const todoText = todoInput.value.trim();

  if (todoText === '') {
    alert('Please enter a task');
    return;
  }

  const todoList = document.getElementById('todo-list');

  const todoItem = document.createElement('li');
  todoItem.className = 'todo-item';
  todoItem.textContent = todoText;

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(todoItem);
  });

  todoItem.addEventListener('click', () => {
    todoItem.classList.toggle('completed');
  });

  todoItem.appendChild(deleteBtn);
  todoList.appendChild(todoItem);

  todoInput.value = '';
}
