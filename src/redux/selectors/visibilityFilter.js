import * as AT from '../actionsTypes';

// 如何你理解 不可变 数据,  你就可以驾驭它;
// state 是不应该改变的只能拷贝然后返回一个新的 state
export default {
   // ST.visibilityFilter
   [AT.SET_VISIBILITY_FILTER]( { state, action } ) {

      const visibilityArray = ['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_ACTIVE'];

      return visibilityArray.includes( action.filter ) ? action.filter : state;

   }

};


