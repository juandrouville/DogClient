import React, { useEffect } from 'react';
import './details_style.css';


function Details({name, image, temperaments, weight_min, weight_max, life, height}) {

    function libForKilo (libras){
        let result =  libras * 0.453592;
        return parseInt(result * 10)/10;
    };

    function reduceOnlyNumbers (string){
        let reduced =  string.split(" -");
        reduced[1] && (reduced[1] = ` - ${reduced[1]}cm`);
        reduced[0] = `${reduced[0]}cm`;
        return reduced 
    };
        

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
                <h1 className='titleListAttribute'>Metrics</h1>
                <div className='listAttribute'>
                    <h1>Life: {life}</h1>
                    <h1>Height: {reduceOnlyNumbers(height)}</h1>
                    <h1>Weight: {libForKilo(weight_min)} Kg - {libForKilo(weight_max)} Kg</h1>
                </div>
            </div>
        </div>
    );
};






export default Details;