import { useContext } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

// import useAuth from '../hooks/useAuth'
import { UserContext } from '../context/UserContext'

const LayoutBase = () => {
  const { user, cleanUser } = useContext(UserContext)

  // const { isAuth, logout } = useAuth()

  const navigate = useNavigate()

  const handleLogout = () => {
    // logout()
    cleanUser()
  
    navigate('/login')
  }

  return (
    <>
      <header className='bg-amber-200 py-4 px-6'>
        <div className='container mx-auto flex justify-between'>
          <h1 className='font-bold'>Budget App</h1>
          {/* {JSON.stringify(user)} */}
          <nav className='flex gap-3'>
            {user?.email && (
              <>
                <div className='font-bold'>
                  Welcome, {user.fullname}
                </div>

                <Link
                  to='/'
                  className='hover:text-orange-800'
                >
                  Home
                </Link>
                <Link
                  to='/new-budget'
                  className='hover:text-orange-800'
                >
                  New Budget
                </Link>
                <Link
                  to='/new-expense'
                  className='hover:text-orange-800'
                >
                  New Expense
                </Link>

                <button
                  className='text-red-800 font-medium'
                  onClick={handleLogout}
                >Logout</button>
              </>
            )}

            {!user?.email && (
              <>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
              </>
            )}
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