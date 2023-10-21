function loadPhoto(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => diplayPhoto(data))
}

function diplayPhoto(photos){
    const photoMainDiv = document.getElementById('photos')
for(const photo of photos){
    // console.log(photo)
    const div = document.createElement('div');
    div.classList.add('photo')
    div.innerHTML = `
    <h3>${photo.id}</h3>
    <h3>${photo.title}</h3>
    <a class="href">${photo.url}</a>
    <a class="href">${photo.thumbnailUrl}</a>
    `
    photoMainDiv.append(div)
}
}