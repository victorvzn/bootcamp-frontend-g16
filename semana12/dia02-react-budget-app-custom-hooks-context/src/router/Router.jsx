import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import LayoutBase from "../layouts/LayoutBase"

import PrivateRoute from "./PrivateRoute"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutBase />}>

          <Route element={<PrivateRoute />}>
            <Route index element={<Home />} />
          </Route>

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router