import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LayoutBase from "./layouts/LayoutBase";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClaudiaAbril from "./pages/alumnos/ClaudiaAbril";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayoutBase />}>
            <Route index element={<Home />} />

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/claudia-abril' element={<ClaudiaAbril />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}