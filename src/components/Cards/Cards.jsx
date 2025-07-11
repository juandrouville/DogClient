import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import Modal from '../Modal/Modal.jsx';
import Details from '../Details/Details.jsx';
import './style_cards.css';

function Cards(){
    const state = useSelector((state)=> state.dogs.dogs);
    const [ selectDog, setSelectDog ] = React.useState(null);
    return (
        <div className = "cards">
            { Array.isArray(state) && state.map(ele  =>
            <Card
                id={ele.id}
                key={ele.id}
                name={ele.name}
                img={ele.image}
                temperaments={ele.temperaments}
                onClick={ ()=> { setSelectDog({...ele}); console.log(selectDog)}}
                >
            </Card>
            )}
             { selectDog !== null && 
                <Modal open={true} onClickClose={()=> setSelectDog(null)}>
                    <Details {...selectDog}/>
                </Modal>}   
        </div>
    )
};

export default Cards;