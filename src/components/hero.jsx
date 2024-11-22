import './hero.css';
import bgVideo from '../assets/bgVideo.mp4'; 

function Hero() {
    return (
        <>
        <div className='hero-con'>
    <video autoPlay muted loop className="bg-video">
        <source src={bgVideo} type="video/mp4" />
    </video>
    <div className="content">
        <h1>Switzerland</h1>
        <p className='sub-text'>Explore with just a tap</p>
        <button>Explore Countries</button>
    </div>
 
</div>

        </>
    );
}

export default Hero;
