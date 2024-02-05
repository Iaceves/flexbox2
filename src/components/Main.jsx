import '../App.css';
import Nav from './Nav';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';

function Main() {
    return(
        <div className="body">
          <div className='nav'>
            <Nav />
          </div>

          <div className='header'>
            <Header />
          </div>

          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
          </Routes>

          <div className='footer'>
            <Footer />
          </div>
      </div>
    )

}
export default Main;