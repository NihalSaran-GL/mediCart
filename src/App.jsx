import { useState } from 'react'
import Header from "./components/HeaderContainer/HeaderContainer";
import Home from './screens/home';
import Signup from './screens/Signup';
import Login from './screens/Login';
import { AuthProvider } from "./contexts/AuthContexts";
import {Router,Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <AuthProvider>
      <Header />
      <Routes>
      <Route path="/" element= {<Home/>} />
        <Route path="/signup" element= {<Signup/>} />
        <Route path="/login" element= {<Login/>} /> 
      </Routes>
      </AuthProvider>
    </>
  )
}

export default App
