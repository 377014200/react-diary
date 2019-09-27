const state = {
   // test
   visibilityFilter: 'SHOW_ALL',
   todos: []

};
// 在 selector 文件是需要使用 state 的 key 键做函数名
export const selectorsTypes = Object.keys( state ).reduce(
   function ( target, key ) {

      target[key] = key;
      return target;

   },
   {}
);

export default state;