import viteLogo from '../../public/vite.svg'
import reactLogo from '../assets/react.svg'
import '../../src/App.css';

function Header() {
    return(
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
    )
}
export default Header