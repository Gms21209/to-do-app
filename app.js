function onReady() {
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  let id = 0;

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) {return; }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    id++
    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI() {
    const toDolist = document.getElementById('toDolist');

    toDolist.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const deleteBtn = document.createElement('button');
      checkbox.type = "checkbox";
      deleteBtn.textContent = "Delete";

      deleteBtn.addEventListener('click', event => {
        toDos = toDos.filter(function(item) {
          return item.id !== toDo.id;
        })

        renderTheUI();
      });

      newLi.textContent = toDo.title;

      toDolist.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteBtn);
    });

  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}

window.onload = function() {
  onReady();
};
