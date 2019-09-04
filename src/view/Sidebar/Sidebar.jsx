import React, { Component } from 'react';
import { NavLink, } from 'react-router-dom';
import './sidebar-style.scoped.css'

export default class Sidebar extends Component {

   render(){

      return (
         <div className='sidebar'>
               <ul>
                  <li><NavLink exact to='/' activeClassName='route-active' > 基本操作 </NavLink></li>
                  <li><NavLink to='/hook' activeClassName='route-active' > 生命周期钩子函数 </NavLink></li>
                  <li><NavLink to='/portals' activeClassName='route-active' > ReactDOM.createPortal </NavLink></li>
                  <li><NavLink to='/suspense' activeClassName='route-active' > React.Suspense </NavLink></li>
                  <li><NavLink to='/router' activeClassName='route-active' > react-router-dom </NavLink></li>
                  <li><NavLink to='/context' activeClassName='route-active' > Context </NavLink></li>
                  <li><NavLink to='/fragments' activeClassName='route-active' > Fragments </NavLink></li>
               </ul>
         </div>
      )

   }

}



