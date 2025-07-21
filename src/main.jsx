import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Toy from './Toy.jsx'
import UseStateEx from './UseStateEx.jsx'
import UseState2Ex from './UseState2Ex/UseState2Ex.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <App /> */}
    <UseState2Ex/>
  </BrowserRouter>,
)