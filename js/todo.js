function loadTodo(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => diplayTodo(data))
}

function diplayTodo(todos){
    const todoMainDiv = document.getElementById('todos')
for(const todo of todos){
    // console.log(photo)
    const div = document.createElement('div');
    div.classList.add('todo')
    div.innerHTML = `
    <h3>${todo.id}</h3>
    <h3>${todo.title}</h3>
    <p>${todo.completed}</p>
    `
    todoMainDiv.append(div)
}
}