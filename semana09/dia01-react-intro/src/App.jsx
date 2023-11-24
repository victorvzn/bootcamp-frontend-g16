
// COMPONENTE USANDO FUNCTION

// function App() {
//   return <h1>Hola React!</h1>
// }

// COMPONENTE USANDO ARROW FUNCTIONS

// const App = () => {
//   return <h1>Hola React!</h1>
// }

// COMPONENTE DE RECT USANDO MULTIPLES LÍNEAS CON SU ELEMENTO PADRE

// const App = () => {
//   return (
//     <div>
//       <h1>Hola React!</h1>
//       <p>Estoy en el bootcamp!</p>
//     </div>
//   )
// }

// COMPONENTE USANDO FRAGMENTOS (FRAGMENTS) PARA EVITAR RENDERIZAR EN UN ELEMENTO PADRE

// const App = () => {
//   return (
//     <>
//       <h1>Hola React!</h1>
//       <p>Estoy en el bootcamp!</p>
//       {/* Comentario en react dentro de JSX */}
//     </>
//   )
// }

// ANIDANDO COMPONENTES DENTRO DE OTROS

// function Saludo() {
//   return <h1>Hola Victor</h1>
// }

// function Despedida() {
//   return <h1>Adios Victor</h1>
// }

// const App = () => {
//   return (
//     <>
//       <h1>Hola React!</h1>
//       <p>Estoy en el bootcamp!</p>
//       {/* Comentario en react dentro de JSX */}

//       <Saludo />
//       <Despedida />
//     </>
//   )
// }


// IMPORTANDO COMPONENTES EXTERNOS

// import Saludo from "./components/Saludo.jsx"
// import Despedida from "./components/Despedida.jsx"

// import { LISTA_DE_FRUTAS, EDAD } from './components/frutas.js'

// const App = () => {
//   return (
//     <>
//       <h1>Hola React!</h1>
//       <p>Estoy en el bootcamp!</p>
//       {/* Comentario en react dentro de JSX */}

//       <Saludo />
//       <Despedida />

//       {1+2}

//       {LISTA_DE_FRUTAS}

//       {EDAD}
//     </>
//   )
// }


// USANDO CSS EN REACT

import Saludo from "./components/Saludo.jsx"
import Despedida from "./components/Despedida.jsx"

import { LISTA_DE_FRUTAS, EDAD } from './components/frutas.js'

import './demo.css' // Importando css global

const App = () => {
  return (
    <>
      <h1 style={{ color: 'red', textDecoration: 'underline' }}>Hola React!</h1>
      <p>Estoy en el bootcamp!</p>
      {/* Comentario en react dentro de JSX */}

      <Saludo />
      <Despedida />

      {1+2}

      {LISTA_DE_FRUTAS}

      {EDAD}
    </>
  )
}

export default App