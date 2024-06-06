const todoList = document.querySelector('.list-group');
const form = document.querySelector('#form');
const todoInput = document.querySelector('#todo');
const clearBtn = document.querySelector('#clearBtn');

function addTodo(e) {
  if (todoInput.value !== '') {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    const span = document.createElement('span');
    span.className = 'todo-text';
    span.appendChild(document.createTextNode(todoInput.value));
    li.appendChild(span);
    todoList.appendChild(li);

    li.innerHTML += `<button class="btn btn-primary btn-success me-md-2 done" type="button">Готово</button>
                    <button class="btn btn-primary btn-danger delete" type="button">Удалить</button>`;

    todoInput.value = '';
  } else {
    alert('Напишите задачу'); // eslint-disable-line
  }

  e.preventDefault();
}

function removeTodo(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Вы хотите удалить заметку?')) { // eslint-disable-line
      e.target.parentElement.remove();
    }
  }

  if (e.target.classList.contains('todo-text')) {
    e.target.parentElement.classList.toggle('done');
  }
  if (e.target.classList.contains('done')) {
    e.target.parentElement.classList.toggle('done');
  }
}

function clearTodoList() {
  todoList.innerHTML = '';
}

function allEventListners() {
  form.addEventListener('submit', addTodo);
  todoList.addEventListener('click', removeTodo);
  clearBtn.addEventListener('click', clearTodoList);
}

allEventListners();
