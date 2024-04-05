import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import HomePage from './pages/HomePage';
import AddProduct from './pages/AddProduct';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/' element={<Navbar/>}>
          <Route index element={<HomePage/>} />
          <Route path='/sell' element={<AddProduct/>} />
        </Route>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
