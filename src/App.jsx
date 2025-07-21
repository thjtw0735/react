import './App.css'
import { Routes, Route, useNavigate }
 from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Toy from './Toy'

function App() {
  const navigate = useNavigate()

  const navTo = (path) => {
    navigate(path)
  }

  return (
    <>
      {/* <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
      </nav> */}

      <button onClick={() => navTo('/')}>
        Home
      </button>
      <button onClick={() => navTo('/about')}>
        About
      </button>
      <button onClick={() => navTo('/contact')}>
        Contact
      </button>

      <br></br>
      <Toy num="1" language="korean" booleanY="true" />
      
      <br></br>



      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App