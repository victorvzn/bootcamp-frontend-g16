import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LayoutBase from "./layouts/LayoutBase";
import HiroitoSanchez from "./pages/alumnos/HiroitoSanchez"


import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayoutBase />}>
            <Route index element={<Home />} />

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/hiroito-sanchez' element={<HiroitoSanchez />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}