import '../App.css';
import Nav from './Nav';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

function Main() {
    return(
        <div className="body">
        <div className='nav'>
          <Nav />
        </div>
        
        <div className='header'>
          <Header />
        </div>
        
        <div className='Section'>
          <Section />
        </div>

        <div className='Footer'>
          <Footer />
        </div>
      </div>
    )

}
export default Main