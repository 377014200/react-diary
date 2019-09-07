import React from 'react';

import Mount from './Mount'
import Updated from './Updated'
import Fieldset from 'components/Fieldset'

{/*  生命周期钩子函数 */}
export default function () {

   return (

      <Fieldset title={ (<h2>组件的生命周期 <i>in Lifecycle hook function </i></h2>) }>
         <strong>常用的生命周期方法会被加粗。其余生命周期函数的使用则相对罕见。</strong>
         <br/>
         <a href="https://react.docschina.org/docs/react-component.html" target={'_blank'}>查看官方的更详细的文档</a>
         <p>挂载</p>
         <Mount/>
         <p>更新</p>
         <Updated/>
      </Fieldset>

   )
}