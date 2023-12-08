import { BrowserRouter, Routes, Route } from 'react-router-dom' 

import LayoutBase from './layouts/LayoutBase'

import Home from './pages/Home'
import Login from './pages/Login'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutBase />}>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}