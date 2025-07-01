import React from 'react';
import { Link } from 'react-router-dom';
import './style_landing.css';


function Landing(){
    
    return(
        <div className= "landingContainer">
            <h1 className = "textWelcome"> ! WELCOME PUPPY ! </h1>
            <Link to = '/home' className="buttonGo">GO!</Link>
        </div>
    );
};

export default Landing;