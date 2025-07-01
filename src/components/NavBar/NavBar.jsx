import React from 'react';
import "./navBar.css";
import SearchBar from '../SearchBar/SearchBar';
import img from "../../img/App-dog.png";
import { resetDogs } from '../../redux/actions/dogs';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';



function NavBar(){
    const dispatch = useDispatch();
    return(
        <div className = "containerNav">
            <div className="sectionOptions">
            <Link to = '/home'>
                <img src={img} alt="Not Found" className='logoNav'/>
            </Link>
            <div>
                <Link to='/create' className="routesNav">Create Dog</Link>
                <Link to= '/mydogs' className="routesNav">My Dogs</Link>
            </div>
            </div>
            <div className="searchBarNav">
                <SearchBar/>
            </div>
        </div>
            

    )
};
            
            
            
            


export default NavBar;