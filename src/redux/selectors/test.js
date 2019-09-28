import * as AT from '../actionsTypes';
import { selectorsTypes as ST } from '../state';

// 如何你理解 不可变 数据,  你就可以驾驭它;
export default {
   [ST.visibilityFilter]( state = 'SHOW_ALL', action ) {

      const visibilityArray = ['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_ACTIVE'];

      return {
         [AT.SET_VISIBILITY_FILTER]: visibilityArray.includes( action.filter ) ? action.filter : state
      } [ action.type ] || state;

   },
   [ST.todos]( state = [], action ) {

      return {
         [AT.ADD_TODO]: [
            ...state,
            {
               text: action.text,
               completed: false
            }
         ],
         [AT.TOGGLE_TODO]: state.map( ( todo, index ) => {

            if ( index === action.index ) {

               return Object.assign( {}, todo, {
                  completed: !todo.completed
               } );

            }
            return todo;

         } )

      } [ action.type ] || state;

   }
};



