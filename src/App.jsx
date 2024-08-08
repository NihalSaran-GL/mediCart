import { useState } from 'react'
import Header from "./components/HeaderContainer/HeaderContainer";
import Home from './screens/home';
import {Router,Route, Routes} from 'react-router-dom'
function App() {
  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element= {<Home/>} />
        {/* <Route path="/signup" element= {<Signup/>} />
        <Route path="/login" element= {<Login/>} /> */}
      </Routes>
   
    </>
  )
}

export default App
