import '../App.css';
import { Link } from 'react-router-dom';


function Nav() {
  
    return(
        <div className="navbar">
          <div className="logo">
            <h1>Flex Box</h1>
          </div>
          <div className="nav">
            
            <Link to='/' className='link'>Home</Link>
            <Link to='/about' className='link'>About</Link>
            <Link to='/contact' className='link'>Contact</Link>
            
          </div>
        </div>
    )
}
export default Nav