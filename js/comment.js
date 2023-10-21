function loadComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => diplayPost(data))
}

function diplayPost(comments){
    const commentMainDiv = document.getElementById('comments')
for(const comment of comments){
    // console.log(comment)
    const div = document.createElement('div');
    div.classList.add('comment')
    div.innerHTML = `
    <h3>${comment.id}</h3>
    <h3>${comment.name}</h3>
    <h3>${comment.email}</h3>
    <p>${comment.body}</p>
    `
    commentMainDiv.appendChild(div)
}
}