function onReady() {
  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  const NEW_TODO_TEXT = document.getElementById('newToDoText');
  const TODO_LIST = document.getElementById('toDolist');
  ADD_TODO_FORM.addEventListener('submit', function(event) {
    event.preventDefault();
    let title = NEW_TODO_TEXT.value;
    let newLi = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    newLi.textContent = title;
    newLi.appendChild(checkbox);
    TODO_LIST.appendChild(newLi);
    NEW_TODO_TEXT.value = '';
  });
}

window.onload = function() {
  onReady();
};
