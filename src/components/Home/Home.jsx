import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getDogs } from '../../redux/actions/dogs';
import Cards from '../Cards/Cards';
import NavBar from '../NavBar/NavBar';
import Pagination from '../Pagination/Pagination';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import './style_home.css';


function Home(){
    
    const state = useSelector((state)=> state.dogs);
    const findedDogs = state.finded;
    const page = state.page;
    const dogs = state.dogs;
    const dispatch = useDispatch();
            useEffect(()=>{
                dispatch(getDogs());
        },[]);

    return(
        <div>
            <NavBar/>
            <div className="home">
                {state.loading && <Loading/>}
                {dogs.length !== 0 ? <Cards dogs = {dogs[page]}/> : <Cards dogs = {findedDogs} />}
                {state.error !== '' && <Error/>}
            </div>
            <div>
                <Pagination/>
            </div>    
        </div>
            
    );
};

export default Home;
