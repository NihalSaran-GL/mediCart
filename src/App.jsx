import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
    <AuthProvider>
      <Header />
      <Routes>
      <Route exact path="/" element= {<Home/>} />
        <Route path="/signup" element= {<Signup/>} />
        <Route path="/login" element= {<Login/>} />
      </Routes>
      </AuthProvider>
    </>
  )
}

export default App
