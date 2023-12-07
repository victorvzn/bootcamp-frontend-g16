import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { BrowserRouter, Routes, Route  } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <header>

      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        </main>
    </BrowserRouter>
  )
}