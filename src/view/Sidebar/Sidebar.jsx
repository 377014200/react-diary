import React, { Component } from 'react';
import { NavLink, } from 'react-router-dom';

import './sidebar-style.scoped.css'

export default class Sidebar extends Component {

   render(){

      return (
         <div className='sidebar'>
               <ul>
                  <li><NavLink exact to='/' activeClassName='route-active' > 基本操作 </NavLink></li>
                  <li><NavLink to='/contorlledAndUncontorlled' activeClassName='route-active' > 受控组件和非受控组件 </NavLink></li>
                  <li><NavLink to='/setState' activeClassName='route-active' > setState </NavLink></li>
                  <li><NavLink to='/props' activeClassName='route-active' > props </NavLink></li>
                  <li><NavLink to='/children' activeClassName='route-active' > props.children </NavLink></li>
                  <li><NavLink to='/cloneElement' activeClassName='route-active' > React.cloneElement </NavLink></li>
                  <li><NavLink to='/memo' activeClassName='route-active' > React.memo </NavLink></li>
                  <li><NavLink to='/pureComponent' activeClassName='route-active' > React.PureComponent </NavLink></li>
                  <li><NavLink to='/suspense' activeClassName='route-active' > React.Suspense </NavLink></li>
                  <li><NavLink to='/strictMode' activeClassName='route-active' > React.StrictMode </NavLink></li>
                  <li><NavLink to='/hook' activeClassName='route-active'> 生命周期钩子函数 </NavLink></li>
                  <li><NavLink to='/portals' activeClassName='route-active' > ReactDOM.createPortal </NavLink></li>
                  <li><NavLink to='/router' activeClassName='route-active' > react-router-dom </NavLink></li>
                  <li><NavLink to='/context' activeClassName='route-active' > Context </NavLink></li>
                  <li><NavLink to='/fragments' activeClassName='route-active' > Fragments </NavLink></li>
                  <li><NavLink to='/mixins' activeClassName='route-active' > mixins </NavLink></li>
                  <li><NavLink to='/HOC' activeClassName='route-active' > High order component </NavLink></li>
                  <li><NavLink to='/ref' activeClassName='route-active' > ref </NavLink></li>
                  <li><NavLink to='/propTypes' activeClassName='route-active' > 类型检查 </NavLink></li>
               </ul>
         </div>
      )

   }

}



