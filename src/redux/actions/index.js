import * as creators from './actionCreators';

// 这样做是为了没有重名的功能函数而且你不会丢失它;
export const toggleTodo = creators.toggleTodo;
export const addTodo = creators.addTodo;
export const addTodoAsync = creators.addTodoAsync;
export const setVisibilityFilter = creators.setVisibilityFilter;

