/*
*     # 挂载
*        当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下
*
* */

import React, { PureComponent } from 'react'
import Fieldset from 'components/Fieldset'


export default class Mount extends PureComponent {
   // 1
   constructor(props) {
      super(props);
      console.log(1);
      this.state = {
         attributes: [
            {
               property: 'constructor()',
               weight: 1
            },
            {
               property: 'static getDerivedStateFromProps()',
               weight: 0
            },
            {
               property: 'render()',
               weight: 1
            },
            {
               property: 'componentDidMount()',
               weight: 1
            }
         ]
      }

   }

   // 2
   static getDerivedStateFromProps() {

      console.log(2);
      return null; // 不会一个是会报错的
   }

   // 3
   render() {

      const li = this.state.attributes.map(
         (item, index) => (
            <li
               key={ index }
               style={ { fontWeight: item.weight ? 700 :  500} }
            >
               {item.property}
            </li>
         )
      );
      console.log(3);

      return (
         <Fieldset
            title= '当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下'
            legendStyle={ { textAlign: 'left'}}
         >
            <ul>
               { li }
               <li style={{ textDecoration: 'line-through' }}>UNSAFE_componentWillMount()</li>
            </ul>
         </Fieldset>
      )

   }

   // 4
   componentDidMount() {
      // 这个类似于 vue 中 mounted 钩子;
      // 会在组件挂载后（插入 DOM 树中）立即调用
      console.log(4)
   }
}