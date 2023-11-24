
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

const App = () => {
  return (
    <>
      <h1>Hola React!</h1>
      <p>Estoy en el bootcamp!</p>
    </>
  )
}

export default App