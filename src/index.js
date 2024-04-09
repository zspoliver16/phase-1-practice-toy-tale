let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

/*

DELIVERABLE 1:
  1. make GET to fetch all toys ("http://localhost:3000/toys")
  2. make <div class = 'card'> for EACH toy
  3. add each toy to ID 'toy-collection' div

*/

/*

DELIVERABLE 2:
  1. make <h2>{toy's name}</h2>
  2. make <img src = {toy's image} class = 'toy-avatar' />
  3. make <p>{toy's likes}</p>
  4. make <button class = 'like-btn' id = {toy's id}></button>
  5. append all to card div

*/

/*

DELIVERABLE 3:
  1. when user submits form
  2. make new toy object
  3. set new toy's name to inputted name
  4. set new toy's image to inputted image
  5. set new toy's likes to 0
  6. set new toy's id to 0
  7. render new toy on page

*/

/*

DELIVERABLE 4:
  1. when user clicks A like button
  2. should increase likes by 1
  3. render new likes to page

*/

fetch("http://localhost:3000/toys")
  .then((resp) => resp.json())
  .then((data) => renderToys(data))

function renderToys(toyArr) {

  const toyContainer = document.querySelector('#toy-collection')

  toyArr.forEach((toyObj) => {

    console.log(toyObj)

    const card = document.createElement('div')
    card.className = 'card'

    const h2 = document.createElement('h2')
    h2.textContent = toyObj.name
    
    const img = document.createElement('img')
    img.src = toyObj.image
    img.className = 'toy-avatar'
    
    const p = document.createElement('p')
    p.textContent = toyObj.likes + " likes"
    
    const btn = document.createElement('button')
    btn.className = 'like-btn'
    btn.id = toyObj.id
    btn.textContent = 'Like ❤️'

    let currLikes = toyObj.likes

    btn.addEventListener('click', handleIncrementLikes)

    function handleIncrementLikes() {
      currLikes++ // currLikes = currLikes + 1
      p.textContent = `${currLikes} likes`
    }

    // card.append(h2, img, p, btn)
    card.appendChild(h2)
    card.appendChild(img)
    card.appendChild(p)
    card.appendChild(btn)

    toyContainer.appendChild(card)

  })

}

const form = document.querySelector('.add-toy-form')

form.addEventListener('submit', (e) => handleAddNewToy(e))

function handleAddNewToy(e) {
  e.preventDefault()
  
  const newToyObj = {
    name : e.target.name.value,
    image : e.target.image.value,
    likes : 0,
    id : 0
  }

  renderToys([newToyObj])

}