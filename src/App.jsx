import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <div className="body">
        <nav className="navbar">
          <div className="logo">
            <h1>Flex Box</h1>
          </div>
          <div className="nav">
            <ul>
              <ol>Home</ol>
              <ol>About</ol>
              <ol>Contact</ol>
            </ul>
          </div>
        </nav>
        <header>
          <div className="header1">
            <div>
              <img src={viteLogo} className='vite-logo'/>
            </div>
            <div>
              <h1>This is a project to practice my flex box in css. The goal is to practice as much needed to be good at it!</h1>
            </div>
          </div>
          <div>
            <img src={reactLogo} className="react-logo"/>
          </div>
        </header>
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
