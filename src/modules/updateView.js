import getDataFromLocalStorage from './localStorage.js';

const updateView = () => {
  const todoList = getDataFromLocalStorage();
  const todo = document.getElementById('todo-list');
  todo.innerHTML = '';
  if (todoList) {
    todoList.forEach((todoListItem) => {
      todo.innerHTML += `
          <li><hr></li>
          <li class="todo ${todoListItem.editable ? 'active' : ''}" >
              <div>
                <input type="checkbox" name="checkbox" id="checkbox_${todoListItem.id}" ${todoListItem.completed ? 'checked' : ''}>
                <input id="input_${todoListItem.id}" ${todoListItem.editable ? '' : 'disabled="true"'} value="${todoListItem.description}" class="borderless ${todoListItem.completed ? 'edit' : ''} " />
              </div>
              <section class="action">
                <button type="button" ${todoListItem.editable ? 'hidden' : ''} id="toggleMode_${todoListItem.id}" class="fa fa-pencil"></button>
                <button type="button" ${todoListItem.editable ? '' : 'hidden'} id="save_${todoListItem.id}" class="fa fa-check"></button>
                <button  type="button" ${todoListItem.editable ? '' : 'hidden'} id="delete_${todoListItem.id}" class="fa fa-close"></button>
              </section>
          </li>
        `;
    });
  }
};

export default updateView;