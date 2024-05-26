import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/LogIn/TheLogIn'
import Home from './pages/home/Home'
import SignUp from './pages/signup/SignUp'

function App() {

  return <div className='p-4 h-screen flex items-center justify-center'>
  <Routes>
  <Route  path='/' element={<Home />}/>
  <Route  path='/login' element={<Login />}/>
  <Route  path='/signup' element={<SignUp />}/>

  </Routes>
  </div>
    

    

  
}

export default App
