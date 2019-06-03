import React, { Component } from 'react';
import {BrowserRouter, Route} from  'react-router-dom';
import Home from './Components/Home';
import About from './Components/SobreMi';
import Portafolio from './Components/Portafolio';
import Contact from './Components/Contacto';

const Routes =()=>(

         <div>
         <BrowserRouter>   
              <div>
              
                          
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/About" component={About} ></Route>
                    <Route path="/Portafolio" component={Portafolio}></Route>
                    <Route path="/Contact" component={Contact}></Route>
                   

              </div>
            </BrowserRouter>

            
         </div>   
            
     

)

export default Routes;
