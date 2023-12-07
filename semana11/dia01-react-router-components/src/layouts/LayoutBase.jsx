import { Link, Outlet } from "react-router-dom"

const LayoutBase = (props) => {
  return (
    <>
      <header className="bg-amber-200 py-4 px-6">
        <div className="container mx-auto flex justify-between">
          <h1 className="font-bold">React router DOM</h1>
          <nav className="flex gap-4">
            <Link to="/" className="hover:font-bold">Home</Link>
            <Link to="/login" className="hover:font-bold">Login</Link>
            <Link to="/register" className="hover:font-bold">Register</Link>
          </nav>
        </div>
      </header>
      <main className="my-6">
        <div className="container mx-auto">
          {/* {props.children} */}
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default LayoutBase