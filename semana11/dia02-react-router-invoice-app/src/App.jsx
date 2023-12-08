import { BrowserRouter, Routes, Route } from 'react-router-dom' 

import LayoutBase from './layouts/LayoutBase'

import Home from './pages/Home'
import Login from './pages/Login'
import Invoices from './pages/Invoices'
import InvoiceDetail from './pages/InvoiceDetail'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutBase />}>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/invoices/:id" element={<InvoiceDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}