import "./Navbar.css";
import { Link, NavLink } from 'react-router-dom'
import logo from "../../images/logo.jpg"

export default function Navbar() {
  return (
    <nav className='nav'>
        <div className="nav-container">
            <Link to="/" className="">
                <img src={logo} alt="" className="nav-logo"  />
            </Link>
            <ul className="nav-list">
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'lessons'}>Lessons</NavLink>
                </li>
                <li>
                    <NavLink to={'about'}>About Us</NavLink>
                </li>
                <li>
                    <NavLink to={'contact'}>Contact</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}
