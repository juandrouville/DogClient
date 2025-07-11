import React, { useEffect } from 'react';
import './details_style.css';


function Details({name, image, temperaments, weight_min, weight_max, life, height}) {
    return (
        <div className="details">
            <h1 className='nameDogDetails'>{name}</h1>
            <img src={image} alt="" />
            <div className='containerListTemperaments'>
                <h1 className='titleListTemperaments'>Temperament</h1>
                <div className='listTemperament'>
                    {temperaments && temperaments.map( (ele) => (  
                        <h1 className='temperamentName'>{ele.name}</h1>
                        )) }
                </div>
            </div>
            <div className='containerInfo'>
                <h1 className='titleListAttribute'>Body Metrics</h1>
                <div className='listAttribute'>
                    <h1>Life: {life}</h1>
                    <h1>Height: {height}</h1>
                    <h1>Weight: Min {weight_min} - Max {weight_max}</h1>
                </div>
            </div>
        </div>
    );
};






export default Details;