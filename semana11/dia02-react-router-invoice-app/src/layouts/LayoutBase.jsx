import React from 'react'

import { Link, Outlet } from 'react-router-dom'

const LayoutBase = () => {
  return (
    <>
      <header className='py-4 px-6 text-white'>
        <div className="container mx-auto flex justify-between">
          <h1 className="font-bold">Invoice App</h1>
          <nav className="flex gap-4">
            <Link to="/home" className="hover:font-bold">Home</Link>
            <Link to="/" className="hover:font-bold">Login</Link>
          </nav>
        </div>
      </header>
      <main className="my-6">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default LayoutBase