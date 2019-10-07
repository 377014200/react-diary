import * as AT from '../actionsTypes';

// 最好遵循 不可变 概念;
export default {
   [AT.ADD_TODO]( { state, action } ) {

      return state.concat( {
         text: action.text,
         completed: false
      } );

   },
   [AT.TOGGLE_TODO]( { state, action } ) {

      return state.map( ( todo, index ) => {

         if ( index === action.index ) {

            return {
               ...todo,
               completed: !todo.completed
            };

         }
         return todo;

      } );

   }
};


