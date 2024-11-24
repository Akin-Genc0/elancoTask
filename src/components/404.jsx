import { Link } from 'react-router-dom';
import './404.css'; 



function ErrorMessage() {
  return (
    <div className="error-message-container">
      
      <div className="error-message">
        <h1>404</h1>
        <h2>Somethings missing</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="button-link">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorMessage;
