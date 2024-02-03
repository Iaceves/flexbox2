import Nav from "../components/Nav"
import Header from "../components/Header"
import Section from "../components/Section"
import Footer from "../components/Footer"

function Home() {
    return (
    <div>
        <div className="nav">
            <Nav />
        </div>

        <div className="header">
            <Header />
        </div>

        <div className="section">
            <Section />
        </div>

        <div className="footer">
            <Footer />
        </div>
    </div>
    )
}
export default Home