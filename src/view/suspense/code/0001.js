export const card =  `
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './router-box-style.scoped.css';
export default function Router() {

   return (
      <div className='router'>
         <Suspense fallback={<div>Loading...</div>}>
            <Switch>
               <Route
                  exact
                  path='/'
                  component={lazy( () => import( /* webpackChunkName: "basic"*/ 'view/basicOperation' ) )}
               />
               <Route
                  path='/hook'
                  component={lazy( () => import( /* webpackChunkName: "hook"*/ 'view/Lifecycle hook functions' ) )}
               />
               <Route
                  path='/portals'
                  component={lazy( () => import( /* webpackChunkName: "portals"*/ 'view/portals' ) )}
               />
               <Route
                  path='/suspense'
                  component={lazy( () => import( /* webpackChunkName: "portals"*/ 'view/suspense/Suspense' ) )}
               />
            </Switch>
         </Suspense>
      </div>
   );

}`;
