import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { SingUp } from './pages/SingUp/SingUp';
import { Home } from './pages/Home/Home'
import { AddNotices } from './pages/AddNotices/AddNotices'

function App() {
  

  return (
    <Router>
        <Routes>
              <Route exact path='/' element={<Login/>}></Route>
              <Route exact path='/singup' element={<SingUp/>}></Route>
              <Route exact path='/home' element={<Home/>}></Route>
              <Route exact path='/add-notices' element={<AddNotices/>}></Route>
        </Routes>
    </Router>
  )
}

export default App
