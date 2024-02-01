import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav' 
import Header from './components/Header'

function App() {
  

  return (
    <>
      <div className="body">
        <div className='nav'>
          <Nav />
        </div>
        
        <div className='header'>
          <Header />
        </div>
        
        <section>
          <div className='container'>
            <div className="box">
              <h1>Title 1</h1>
              <p>some text in title 1. & here more text</p>
            </div>
            <div className="box">
              <h1>Title 2</h1>
              <p>more text in title 2. & here more text</p>
            </div>
            <div className="box">
              <h1>Title 3</h1>
              <p>more text in title 3. & here more text</p>
            </div>
          </div>
        </section>

        <footer>
          <div>
            <h1>created by Ismael 2024</h1>
          </div>
          <div>
            <a>Facebook</a>
            <a>Instagram</a>
            <a>Youtube</a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
