import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

import './router-box-style.scoped.css'

export default function Router() {

   return (
      <div className='router'>
         <Suspense fallback={<div>Loading...</div>}>
            <Switch>
               <Route
                  exact
                  path='/'
                  component={lazy(() => import(/* webpackChunkName: "basic"*/ 'view/basicOperation' ))}
               />
               <Route
                  path='/hook'
                  component={lazy(() => import(/* webpackChunkName: "hook"*/ 'view/Lifecycle hook functions' ))}
               />
               <Route
                  path='/portals'
                  component={lazy(() => import(/* webpackChunkName: "portals" */ 'view/portals' ))}
               />
               <Route
                  path='/suspense'
                  component={lazy(() => import(/* webpackChunkName: "Suspense" */ 'view/suspense/Suspense' ))}
               />
               <Route
                  path='/router'
                  component={lazy(() => import(/* webpackChunkName: "router"*/ 'view/react-router-dom' ))}
               />
               <Route
                  path='/context'
                  component={lazy(() => import(/* webpackChunkName: "context"*/ 'view/context' ))}
               />
               <Route
                  path='/fragments'
                  component={lazy(() => import(/* webpackChunkName: "fragments"*/ 'view/fragments/Fragments' ))}
               />
               <Route
                  path='/setState'
                  component={lazy(() => import(/* webpackChunkName: "setState"*/ 'view/setState/SetState' ))}
               />
               <Route
                  path='/children'
                  component={lazy(() => import(/* webpackChunkName: "children"*/ 'view/children/Children' ))}
               />
               <Route
                  path='/cloneElement'
                  component={lazy(() => import(/* webpackChunkName: "cloneElement"*/ 'view/cloneElement/cloneElement' ))}
               />
               <Route
                  path='/mixins'
                  component={lazy(() => import(/* webpackChunkName: "mixins"*/ 'view/mixins/mixins' ))}
               />
               <Route
                  path='/props'
                  component={lazy(() => import(/* webpackChunkName: "props"*/ 'view/props/props' ))}
               />
               <Route
                  path='/contorlledAndUncontorlled'
                  component={lazy(() => import(/* webpackChunkName: "contorlledAndUncontorlled"*/ 'view/contorlledAndUncontorlled' ))}
               />
               <Route
                  path='/pureComponent'
                  component={lazy(() => import(/* webpackChunkName: "pureComponent"*/ 'view/pureComponent/PureComponent' ))}
               />
               <Route
                  path='/memo'
                  component={lazy(() => import(/* webpackChunkName: "memo"*/ 'view/memo/memo' ))}
               />
            </Switch>
         </Suspense>
      </div>
   )

}



