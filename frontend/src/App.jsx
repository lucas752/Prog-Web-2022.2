import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { SignUp } from './pages/SignUp/SignUp';
import { Home } from './pages/Home/Home'
import { AddNotices } from './pages/AddNotices/AddNotices'
import { CoordinatorNotices } from './pages/CoordinatorNotices/CoordinatorNotices';

function App() {
  

  return (
    <Router>
        <Routes>
              <Route exact path='/' element={<Login/>}></Route>
              <Route exact path='/signup' element={<SignUp/>}></Route>
              <Route exact path='/home' element={<Home/>}></Route>
              <Route exact path='/add-notices' element={<AddNotices/>}></Route>
              <Route exact path='/notices' element={<CoordinatorNotices/>}></Route>
        </Routes>
    </Router>
  )
}

export default App
