const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

function createTodoItem(taskText) {
  const item = document.createElement('li');
  item.className = 'todo-item';

  const text = document.createElement('span');
  text.textContent = taskText;

  const actions = document.createElement('div');
  actions.className = 'actions';

  const toggleButton = document.createElement('button');
  toggleButton.type = 'button';
  toggleButton.textContent = 'Done';
  toggleButton.addEventListener('click', () => {
    item.classList.toggle('completed');
  });

  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete';
  deleteButton.addEventListener('click', () => {
    item.remove();
  });

  actions.append(toggleButton, deleteButton);
  item.append(text, actions);
  return item;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskText = input.value.trim();
  if (!taskText) {
    return;
  }

  const todoItem = createTodoItem(taskText);
  list.append(todoItem);
  input.value = '';
  input.focus();
});
