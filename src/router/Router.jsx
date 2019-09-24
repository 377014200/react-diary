import React, {lazy, Suspense, memo} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import './router-box-style.scoped.css'

export default function Router() {

   return (
      <div className='router'>
         <Suspense fallback={<div>Loading...</div>}>
            <Redirect to="/hook"/>
            <Switch>
               <Route
                  exact
                  path='/'
                  component={lazy(() => import(/* webpackChunkName: "basic"*/ 'view/basicOperation' ))}
               />
               <Route path='/hook'>
                  <Route path='/hook' exact component={lazy(() => import(/* webpackChunkName: "hook"*/ 'view/Lifecycle hook functions' ))}/>
                  <Route path='/hook/aaa' render={() => <h1>这是子路由 aaa</h1>} key={456}/>
               </Route>
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
               <Route
                  path='/ref'
                  component={lazy(() => import(/* webpackChunkName: "ref"*/ 'view/ref/ref' ))}
               />
               <Route
                  path='/HOC'
                  component={lazy(() => import(/* webpackChunkName: "hoc"*/ 'view/HOC/hoc' ))}
               />
               <Route
                  path='/propTypes'
                  component={lazy(() => import(/* webpackChunkName: "propTypesChecking"*/ 'view/propTypesChecking/index' ))}
               />
               <Route
                  path='/strictMode'
                  component={lazy(() => import(/* webpackChunkName: "strictMode"*/ 'view/strictMode/StrictMode' ))}
               />
               <Route
                  path='/redux'
                  component={lazy(() => import(/* webpackChunkName: "redux"*/ 'view/reducer' ))}
               />
            </Switch>
         </Suspense>
      </div>
   )

}



