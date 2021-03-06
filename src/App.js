import React, {useEffect,useState} from 'react';
import './App.css';
import './css/bootstrap-icons/bootstrap-icons.css';
import './css/boxicons/css/boxicons.min.css';
import './css/quill/quill.snow.css';
import './css/quill/quill.bubble.css';

import './css/remixicon/remixicon.css';
import './css/simple-datatables/style.css';
import './css/style.css';
import Sidebar from './components/sidebar';
import Home from './components/home';
import Package from './components/packages';
import {BrowserRouter,Routes,Route } from "react-router-dom";
import { menuitems } from './components/menuitems';



function App() {

  function getComponent(str){
    var MyComponent = str
    return <MyComponent/>
  }
  return (
    <div className="App">
      <div className='container-fluid row'>
        <div className='col-md-2'>
        <Sidebar/>
        </div>
        <div className='col-md-10 ml-3 mt-5'>
          <div className='wrapper mt-5 main m-2'>
          <BrowserRouter>
            <Routes>
              
              <Route path="/" element={<Home/>} />
              <Route path="/packages" element={<Package/>} />
              
            </Routes>
          </BrowserRouter>           
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
