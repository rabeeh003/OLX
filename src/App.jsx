import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import HomePage from './pages/HomePage';
import AddProduct from './pages/AddProduct';
import { createContext } from "react";

function App() {
  const UserData = createContext()
  const user = localStorage.getItem("user")

  return (
    <BrowserRouter>
      <UserData.Provider value={user}>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/' element={<Navbar />}>
            <Route index element={<HomePage />} />
            <Route path='/sell' element={<AddProduct />} />
          </Route>
        </Routes>
      </UserData.Provider>
    </BrowserRouter>
  )
}

export default App
