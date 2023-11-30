// const Header = (props) => {
//   console.log(props)
//   return (
//     <div>{props.title}</div>
//   )
// }

const Header = ({ title }) => {
  console.log(title)
  return (
    <h1 className="text-4xl text-center mt-4">{title}</h1>
  )
}

export default Header