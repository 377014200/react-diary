import * as type from '../actionsTypes';

export function addTodo ( value ) {

   return function ( dispatch ) {

      setTimeout( function () {

         dispatch( {
            type: type.ADD_TODO,
            text: value
         } );

      }, 2000 );

   };

}

export function toggleTodo( index ) {

   return { type: type.TOGGLE_TODO, index };

}

export function setVisibilityFilter( filter ) {

   return { type: type.SET_VISIBILITY_FILTER, filter };

}