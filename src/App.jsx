import './App.css'
import Main from './components/Main'
import { BrowserRouter as Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  <Routes>
   <Route path='/' element={<Home />} />
   <Route path='/about' element={<About />}/>
   <Route path='/contact' element={<Contact /> } />
  </Routes>

  return (
    <>
      <Main />
    </>
  )
}

export default App
