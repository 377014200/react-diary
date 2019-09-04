import React,{ Component } from 'react'

import Router from 'router/Router'
import Sidebar from 'view/sidebar/Sidebar'
import { BrowserRouter } from 'react-router-dom';

export default class App extends Component{

   render(){

      return   (
         <div className='container'>
            <h1> Hello World</h1>
            <BrowserRouter>
               <Sidebar />
               <Router />
            </BrowserRouter>


         </div>
      )


   }

}
