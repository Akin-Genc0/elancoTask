import './nav.css';
import logo from '../assets/logo.png';
 

function Nav() {

    return (
        <>
        
        <div className='nav-con'>

       
            <nav>
                <div className='left'>
                    <img className='logo' src={logo}></img>
              
            </div>
            <ul className='lists'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Explore</a></li>
            </ul>

            </nav>
            </div>
            
       
 
        </>
    );
}

export default Nav;
