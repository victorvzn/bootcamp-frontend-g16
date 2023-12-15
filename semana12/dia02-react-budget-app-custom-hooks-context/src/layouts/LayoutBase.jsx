import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const LayoutBase = () => {
  return (
    <>
      <header className='bg-amber-200 py-4 px-6'>
        <div className='container mx-auto flex justify-between'>
          <h1 className='font-bold'>Budget App</h1>
          <nav className='flex gap-3'>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </nav>
        </div>
      </header>

      <main className='m-6'>
        <div className='container mx-auto'>
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default LayoutBase