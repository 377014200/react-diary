import React from 'react';

import Mount from './Mount'
import Updated from './Updated'
import Fieldset from 'components/Fieldset'
import shouldRouterUpdate from "HOC/shouldRouterUpdate";

{/*  生命周期钩子函数 */}
@shouldRouterUpdate( '/hook' )
export default  class Hook extends React.Component{
   render(){

      return (
         <Fieldset title={ (<h2>组件的生命周期 <i>in Lifecycle hook function </i></h2>) }>
            <strong>常用的生命周期方法会被加粗。其余生命周期函数的使用则相对罕见。</strong>
            <br/>
            <a href="https://react.docschina.org/docs/react-component.html" target={'_blank'}>查看官方的更详细的文档</a>
            <p>挂载</p>
            <Mount/>
            <p>更新</p>
            <Updated/>
            <Fieldset title='渲染阶段的生命周期包括以下 class 组件方法：'>
               <ul>
                  <li>constructor</li>
                  <li>componentWillMount</li>
                  <li>componentWillReceiveProps</li>
                  <li>componentWillUpdate</li>
                  <li>getDerivedStateFromProps</li>
                  <li>shouldComponentUpdate</li>
                  <li>render</li>
                  <li>setState 更新函数（第一个参数)</li>
               </ul>
            </Fieldset>
         </Fieldset>
      )

   }
}
