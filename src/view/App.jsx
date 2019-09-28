import { Component } from 'react';
import { BrowserRouter, Prompt } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import './rhlConfig';

import Router from 'router/Router';
import Sidebar from 'view/sidebar/Sidebar';
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
@hot( module )
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
