import React,{ Component } from 'react'

import Router from 'router/Router'
import Sidebar from 'view/sidebar/Sidebar'
import { BrowserRouter } from 'react-router-dom';

import './app-style.css'
export default class App extends Component{

   render(){

      return   (
         <div className='container'>
            <h1> Hello React</h1>
            <h2>小生,我怕怕</h2>
            <BrowserRouter>
               <Sidebar />
               <Router />
            </BrowserRouter>
         </div>
      )

   }

}
