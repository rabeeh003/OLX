import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import HomePage from './pages/HomePage';
import AddProduct from './pages/AddProduct';
import { createContext } from "react";

function App() {
  const UserDataContext = createContext()
  const user = localStorage.getItem("userDetail")

  return (
    <BrowserRouter>
      <UserDataContext.Provider value={user}>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/' element={<Navbar />}>
            <Route index element={<HomePage />} />
            <Route path='/sell' element={<AddProduct />} />
          </Route>
        </Routes>
      </UserDataContext.Provider>
    </BrowserRouter>
  )
}

export default App
