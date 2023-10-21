function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displyData(data))
}

function displyData(users){
    const userMainDiv = document.getElementById('users');
    
    for(const user of users){
        // console.log(user)
        const div = document.createElement('div')
        div.classList.add('user')
        div.innerHTML = `
    <h3>${user.id}</h3>
    <h3>${user.name}</h3>
    <h3>${user.username}</h3>
    <p>${user.address}</p>
    `
    userMainDiv.appendChild(div)
    }

    }