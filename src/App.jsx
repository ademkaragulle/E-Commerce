import './App.css'
import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'
import Body from './components/body/Body'

function App() {



  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <Body />
          </>
        } />
      </Routes>
    </div>
  )
}

export default App
