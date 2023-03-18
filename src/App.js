import './App.css';
import React from 'react';
import { Route , Routes } from "react-router-dom";

//IMPORT COMPONENTS

import Home from './components/Home/Home.jsx';
import Landing from './components/Landing/Landing.jsx';
import Form from './components/Form/Form.jsx';
import Details from './components/Details/Details';
import ByTemperaments from './components/ByTemperaments/ByTemperaments';
import Created from './components/Created/Created';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route exact path = "/" element={<Landing/>}/>
        <Route path = "/home" element={<Home/>}/>
        <Route path = "/create" element={<Form/>}/>
        <Route path = "/details/:dogId" render={({match})=> <Details match={match}/>}/>
        <Route path = "/temperament/:temperamentName" render={({match})=> <ByTemperaments match={match}/>}/>
        <Route path = "/mydogs" element={<Created/>}/>
      </Routes>
    </div>
  );
}

export default App;
