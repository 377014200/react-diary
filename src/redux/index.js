import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import sliceReducer from './selectors';
import preloadedState from './state';
const loggerMiddleware = createLogger();

const rootReducer = combineReducers( sliceReducer );
const store = createStore(
   rootReducer,
   preloadedState,
   applyMiddleware(
      thunkMiddleware, // 允许我们 dispatch() 函数
      loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志 )
   )
);

//  hmr
if ( module.hot ) {

   module.hot.accept(
      [
         './selectors',
         './state',
         './actionsTypes'
      ],
      function () {

         console.log( '[ 欲上青天揽明月 ] : Accepting the updated in reduex!' );
         store.replaceReducer( combineReducers( sliceReducer ) );

      }
   );

}

export default store;


