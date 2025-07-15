import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getByTemperaments } from '../../redux/actions/dogs';

import './style_card.css';

function Card({ id, name, img, temperaments, onClick }){
    const dispatch = useDispatch();
    function render(name){
        dispatch(getByTemperaments(name));
    }
    return (
        <div className="card" onClick={onClick}>
            <img src={img} alt="" className='cardImage' />
            <h3 className='nameDog'>{name}</h3>
            <div className="temperaments">
                {temperaments && temperaments.map(ele =>
                    // <Link to={`/temperament/${ele.name}`} style={{ textDecoration: 'none' }}>
                        <h1 className='nameTemperament'>{ele.name}</h1>
                    // </Link>
                )}
            </div>
        </div>
    );
};



export default Card;
            