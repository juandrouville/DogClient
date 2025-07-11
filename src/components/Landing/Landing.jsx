import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDogs } from '../../redux/actions/dogs';
import { Link } from 'react-router-dom';
import './style_landing.css';


function Landing(){

    const dispatch = useDispatch();
            useEffect(()=>{
                dispatch(getDogs());
        },[]);
    
    return(
        <div className= "landingContainer">
            <h1 className = "textWelcome"> ! WELCOME PUPPY ! </h1>
            <Link to = '/home' className="buttonGo">GO!</Link>
        </div>
    );
};

export default Landing;