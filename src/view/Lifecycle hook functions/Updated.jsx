/*
*     # 更新
*     当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：
*
* */

import React, { Component } from 'react';
import Fieldset from 'components/Fieldset'

export default class Updated extends Component {

   constructor( props ){
      super( props );
      this.state = {
         fieldset: '是个不错的标签'
      }

   }

   // 1
   static  getDerivedStateFromProps( props, state){

      console.log(1);
      return null;

   }
   // 2
   shouldComponentUpdate(){

      console.log(2)
      return true

   }
   // 3
   render (){
      // 1779 1293
      const on = this.on();
      console.log(3);

      return (
         <Fieldset
            title="当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下"
            legendStyle={ { textAlign: 'left'} }
         >
            <button type='button' onClick={ on.click }>点鸡</button>
            <i>{ this.state.fieldset }</i>
            <ul>
               <li>static getDerivedStateFromProps()</li>
               <li>shouldComponentUpdate()</li>
               <li style={ { fontWeight: 700 } }>render()</li>
               <li>getSnapshotBeforeUpdate()</li>
               <li style={ { fontWeight: 700 } }>componentDidUpdate()</li>
               <li style={ { textDecoration: 'line-through' } }>UNSAFE_componentWillUpdate()</li>
               <li style={ { textDecoration: 'line-through' } }>UNSAFE_componentWillReceiveProps()</li>
            </ul>
         </Fieldset>
      )
   }
   // 4
   getSnapshotBeforeUpdate () {

      console.log(4);
      return null

   }
   // 5
   componentDidUpdate () {

      console.log(5)

   }

   on(){

      const vm = this;
      return {
         click: function (e) {

            console.log(e);
            vm.setState({ fieldset: '谁用谁知道'})

         }
      }

   }

}





