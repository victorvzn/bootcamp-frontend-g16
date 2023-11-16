console.log('Hola JS!')

// PARA TRAER INFORMACIÓN EN FORMATO JSON DE UNA URL

const url = 'https://jsonplaceholder.typicode.com/posts'

// fetch(url) // Devuelve una promesa (Promise)
//   .then(response => response.json()) // Convertimos la respuesta a un objeto JS
//   .then(data => {
//     console.log(data)
//   }) // Podemos usar el objeto JS

const fetchPosts = () => {
  console.log('Llamando al api de JSONPLACEHOLDER')

  return fetch(url)
    .then(response => response.json())
    // .then(data => {
    //   return data
    // })
}

const renderPosts = (posts = []) => {
  // const appDiv = document.querySelector('#app')
  const appDiv = document.getElementById('app')

  let postList = ''

  posts.forEach(post => {
    // console.log(post)
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