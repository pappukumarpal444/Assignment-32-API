
function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => diplayPost(data))
}

function diplayPost(posts){
    const postMainDiv = document.getElementById('posts')
for(const post of posts){
    // console.log(post)
    const div = document.createElement('div');
    div.classList.add('post')
    div.innerHTML = `
    <h3>${post.id}</h3>
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    `
    postMainDiv.appendChild(div)
}
}