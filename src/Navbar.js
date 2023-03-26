import "./css/Navbar.css"
import Homepage from "./Homepage";
import AboutUs from "./AboutUs";
import Menu from "./Menu";
import Contact from "./Contact";
import {Routes, Route, Link} from 'react-router-dom';

export default function Navbar(){
    return(
        <div>
            <nav className="nav">
                <Link to="/" className="nav-item">Homepage</Link>
                <Link to="/about_us" className="nav-item">About us</Link>
                <Link to="/menu" className="nav-item">Menu</Link>
                <Link to="/contact" className="nav-item">Contact</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/about_us" element={<AboutUs/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/contact" element={<Contact/>}/>
                        <Route path="*" element={<Contact/>} />
            </Routes>
      </div>
    )
}