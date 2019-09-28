import * as type from '../actionsTypes';


// 如何你是异步操作必须返回一个函数, 函数的参数是 dispatch;
export function addTodoAsync ( value ) {

   return function ( dispatch ) {

      setTimeout( function () {

         dispatch( {
            type: type.ADD_TODO,
            text: value
         } );

      }, 2000 );

   };

}
export function addTodo ( value ) {

   return { type: type.ADD_TODO, text: value };

}

export function toggleTodo( index ) {

   return { type: type.TOGGLE_TODO, index };

}

export function setVisibilityFilter( filter ) {

   return { type: type.SET_VISIBILITY_FILTER, filter };

}