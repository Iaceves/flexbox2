import '../App.css'
import { Link } from 'react-router-dom'
import { Routes, Route} from 'react-router-dom'
import React from 'react'
import Home from '../Pages/Home'

function Nav() {
  <Routes>
   <Route path='/' element={<Home />} />
  </Routes>
    return(
        <div className="navbar">
          <div className="logo">
            <h1>Flex Box</h1>
          </div>
          <div className="nav">
            <ul>
              <ol><Link to='/' className='link'>Home</Link></ol>
              <ol><Link to='/about' className='link'>About</Link></ol>
              <ol><Link to='/contact' className='link'>Contact</Link></ol>
            </ul>
          </div>
        </div>
    )
}
export default Nav