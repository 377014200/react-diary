import * as AT from '../actionsTypes';


// 如何你是异步操作必须返回一个函数, 函数的参数是 dispatch;
export function addTodoAsync ( value ) {

   return function ( dispatch ) {

      setTimeout( function () {

         dispatch( {
            type: AT.ADD_TODO,
            text: value
         } );

      }, 2000 );

   };

}
export function addTodo ( value ) {

   return { type: AT.ADD_TODO, text: value };

}

export function toggleTodo( index ) {

   return { type: AT.TOGGLE_TODO, index };

}

export function setVisibilityFilter( filter ) {

   return { type: AT.SET_VISIBILITY_FILTER, filter };

}