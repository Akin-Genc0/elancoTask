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
        a seamless experience across devices. Next, I integrated the REST API to fetch and display the data. 
        To handle the API calls and keep everything running smoothly, I used Axios, which is a popular library for React. 
        For the data visualization, I turned to Recharts to create a bar chart, making the population data more 
        visual and easier to digest.
        </p>
        
        <button className="learn-more-btn">Thank-You :)</button>
      </div>
      <div className="about-image">
        <img src={about}alt="About Us" />
      </div>
    </section>
  );
}

export default Abt;
