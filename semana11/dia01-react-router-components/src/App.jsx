import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LayoutBase from "./layouts/LayoutBase";

import HiroitoSanchez from "./pages/alumnos/HiroitoSanchez"
import Urquizo from "./pages/alumnos/Urquizo";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ClaudiaAbril from "./pages/alumnos/ClaudiaAbril";
import FranklinPeña from "./pages/alumnos/FranklinPeña";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayoutBase />}>
            <Route index element={<Home />} />


            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            
            <Route path='/claudia-abril' element={<ClaudiaAbril />} />
            <Route path='/bryan-urquizo' element={<Urquizo />} />
            <Route path="/franklin-peña" element={<FranklinPeña />} />
            <Route path='/hiroito-sanchez' element={<HiroitoSanchez />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}