import './style.css';

const todo = [
  {
    description: 'Learn Javascript',
    completed: false,
    index: 0,
  },
  {
    description: 'Learn how to use webpack ',
    completed: false,
    index: 1,
  },
  {
    description: 'Complete Project',
    completed: false,
    index: 2,
  },
];

const todoList = document.getElementById('todo-list');
todo.forEach((todo) => {
  todoList.innerHTML += `
      <li><hr></li>
      <li class="todo">
          <div>
              <input type="checkbox" name="checkbox-${todo.index}" ${todo.completed ? 'checked' : 'unchecked'}>
              <h2>${todo.description}</h2>
          </div>
          <button><i class="fa fa-ellipsis-v" aria-hidden="true"></i></button>
      </li>
    `;
});