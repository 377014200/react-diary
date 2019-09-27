import * as AT from '../actionsTypes';
import warehouse, { selectorsTypes as ST } from '../state';

export default {
   [ST.visibilityFilter]( state = warehouse.visibilityFilter, action ) {

      const visibilityArray = ['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_ACTIVE'];
      const visibilityItem = visibilityArray.includes( action.filter ) ? action.filter : state;

      return {
         [AT.SET_VISIBILITY_FILTER]: visibilityItem
      } [ action.type ] || state;

   },
   [ST.todos]( state = warehouse.todos, action ) {

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



