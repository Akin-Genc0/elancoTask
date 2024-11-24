import './abt.css';
import about from '../assets/abtpic.png'

function Abt() {
  return (
    <section className="about-container">
      <div className="about-content">
        <h1>About This Project</h1>
        <p>
        This web application was built to meet the scenario requirements provided by Elanco. 
        I started by designing the user interface (UI) in Figma. Once the design felt right 
        and aligned with the goal, I moved on to development using Vite and React.
        </p>
        <p>
        My first step in development was bringing the Figma design to life, 
        making sure the UI was not only visually appealing but also fully responsive for 
        a seamless experience across devices. After that, I integrated the REST API to retrieve 
        and display the data. For this, I used Axios, a React library, to simplify 
        API interactions and ensure the app functioned smoothly.
        I made some small changes to improve the user experience, like replacing 
        a dropdown menu with a more intuitive search feature.
        </p>
        
        <button className="learn-more-btn">Figma Design</button>
      </div>
      <div className="about-image">
        <img src={about}alt="About Us" />
      </div>
    </section>
  );
}

export default Abt;
