import * as AT from '../actionsTypes';

// 如何你理解 不可变 数据,  你就可以驾驭它;
// state 是不应该改变的只能拷贝然后返回一个新的 state
export default {
   // ST.visibilityFilter
   [AT.SET_VISIBILITY_FILTER]( { state, action } ) {

      const visibilityArray = ['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_ACTIVE'];

      return visibilityArray.includes( action.filter ) ? action.filter : state;

   },

   // ST.todos
   [AT.ADD_TODO]( { state, action } ) {

      return [
         ...state,
         {
            text: action.text,
            completed: false
         }
      ];

   },
   [AT.TOGGLE_TODO]( { state, action } ) {

      return state.map( ( todo, index ) => {

         if ( index === action.index ) {

            return Object.assign( {}, todo, {
               completed: !todo.completed
            } );

         }
         return todo;

      } );

   }
};


