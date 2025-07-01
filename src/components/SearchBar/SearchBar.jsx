import { useDispatch } from 'react-redux';
import { searchDogName } from '../../redux/actions/dogs';
import React, { useState } from 'react';
import "./searchBar.css";
import { IoIosSearch } from "react-icons/io";



function SearchBar(){
    const dispatch = useDispatch();
    const [search,setSearch]= useState();
    return(
        <div className="search">
            <input
                onKeyDown={(event)=>{
                    if(event.key === 'Enter'){dispatch(searchDogName(search));setSearch('')};
                }}
                type="search" 
                results="0"
                placeholder="Search" 
                autoComplete ="off"
                id="search-dog" 
                value={search}
                onChange={
                    (event)=>{
                        setSearch(event.target.value);
                    }}>
            </input>
                        
            <div className="btn" onClick={()=>{
                    search && dispatch(searchDogName(search), setSearch(''));
                }}>
                <button>
                    <IoIosSearch size={25}/>
                </button>
            </div>
        </div>
    )
};
   
       
        

export default SearchBar;