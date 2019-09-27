import React, { Component } from 'react';
import Router from 'router/Router';
import Sidebar from 'view/sidebar/Sidebar';
import { BrowserRouter, Prompt } from 'react-router-dom';
import 'CSS/global.css';
import 'assets/css/app-style.css';

function setConfirmation( message, callback ) {

   if ( window.location.pathname === '/router' ) {

      const allowTransition = window.confirm( message );

      callback( allowTransition );
      return;

   }
   callback( true );

}
export default class App extends Component {

   render() {

      return (
         <div className='container'>
            <h1> Hello React</h1>
            <h2>小生,我怕怕</h2>
            <BrowserRouter getUserConfirmation={setConfirmation}>
               <Prompt message={'Are you sure to leave'} when />
               <Sidebar />
               <Router />
            </BrowserRouter>
         </div>
      );

   }

}
