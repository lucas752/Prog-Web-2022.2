import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { SingUp } from './pages/SingUp/SingUp';

function App() {
  

  return (
    <Router>
        <Routes>
              <Route exact path='/' element={<Login/>}></Route>
              <Route exact path='/singup' element={<SingUp/>}></Route>
        </Routes>
    </Router>
  )
}

export default App
