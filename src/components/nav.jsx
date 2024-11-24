import './nav.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='nav-con'>
      <nav>
        <div className='left'>
         <Link to="/" ><img className='logo' src={logo} alt="Logo" /></Link> 
        </div>
        <ul className='lists'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/explore">Explore</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;


