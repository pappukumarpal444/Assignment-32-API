function loadAlbum(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => diplayAlbum(data))
}

function diplayAlbum(albums){
    const albumMainDiv = document.getElementById('albums')
for(const album of albums){
    console.log(album)
    const div = document.createElement('div');
    div.classList.add('album')
    div.innerHTML = `
    <h3>${album.userId}</h3>
    <h3>${album.id}</h3>
    <h3>${album.title}</h3>
    `
    albumMainDiv.appendChild(div)
}
}