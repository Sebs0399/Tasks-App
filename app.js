document.getElementById('formTask').addEventListener('submit', saveTask);
function saveTask(e) {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let date = new Date().toDateString();

    const task = {
        title,
        description,
        date
    };
    if (title | description ==""){
      alert('Campos vacios');
    }
    else if(localStorage.getItem('tasks') === null) {
        let tasks = [];
       
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      } 
    else{
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    getTasks();
    document.getElementById('formTask').reset();
    e.preventDefault();
}
function getTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let tasksView = document.getElementById('tasks');
    tasksView.innerHTML = '';
    
    if (title | description ==""){
      alert('Campos vacios');
    }else{
      for(let i = 0; i < tasks.length; i++) {
        let title = tasks[i].title;
        let description = tasks[i].description;
        let date = new Date().toLocaleDateString();
        tasksView.innerHTML += `<div class="card mb-3">
            <div class="card-body">
              <p class = "h3">${title}</p>
              <div class="contaniner">${description}</div>
              <footer class="blockquote-footer">
              <div class="contaniner">Fecha de creación: ${date} </div></footer>
              <a href="#" onclick="deleteTask('${title}')" class="btn btn-warning ml-5">Borrar</a>
            </div>
          </div>`;
      }
    }
  }
function deleteTask(title) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].title === title) {
           tasks.splice(i, 1); 
        }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    getTasks();
}
getTasks();