import React from 'react';
import "../css/Home.css";
import { Link } from 'react-router-dom';


const Home = () => {
    return (

        <div className='home'>
            
            <div className="d-flex h-100 text-center text-bg-dark">
    
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      
      <main className="px-3">
        <h1> Welcome to Abolarin's Cuisine.</h1>
        <p className="lead">Once you've tasted food that is TRULY FRESH you can tell the difference immadiately. We are a family restaurant with very exacting standards. Every dish is freshly prepared under our roof.</p>
        <p className="lead">
          <Link to="/about" className="btn btn-lg btn-light fw-bold border-white bg-white">Learn more</Link>
        </p>
      </main>
    
      <footer className="mt-auto text-white-50">
        <p>Cover template for <Link to="https://getbootstrap.com/" class="text-white">Bootstrap</Link>, by <Link to="https://twitter.com/mdo" className="text-white">@mdo</Link>.</p>
      </footer>
    </div>
            
           

        
        </div>
        </div>
        
            
    );
}

export default Home;
