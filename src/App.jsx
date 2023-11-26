import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'
import Body from './components/body/Body'

function App() {



  return (
    <div className='App'>
      <Header />
      <Body />
    </div>
  )
}

export default App
