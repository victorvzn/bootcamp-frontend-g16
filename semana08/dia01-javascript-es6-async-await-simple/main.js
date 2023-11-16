console.log('Hola JS!')

// PARA TRAER INFORMACIÓN EN FORMATO JSON DE UNA URL

const url = 'https://jsonplaceholder.typicode.com/posts'

const fetchPosts = async () => {
  const response = await fetch(url) // Promise

  const json = await response.json()

  // Aquí podemos procesar o modificar el json entrante

  return json
}

const renderPosts = (posts = []) => {
  // const appDiv = document.querySelector('#app')
  const appDiv = document.getElementById('app')

  let postList = ''

  posts.forEach(post => {
    postList += `
      <div>
        <h2>${post.id}: ${post.title}</h2>
        <p>${post.body}</p>
      </div>
    `
  })

  appDiv.innerHTML = postList
}

fetchPosts()
  .then(posts => {
    renderPosts(posts)
    console.log(posts)
  })