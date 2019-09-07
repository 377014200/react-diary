import React from 'react';

import Fieldset from "@/components/Fieldset";
import Code from "@/components/Code";
import Case from './Case'
import { codeCard7, codeCard6, codeCard5, codeCard4, codeCard3, codeCard2, codeCard  } from './codeCard'


export default function SetState() {

   return (
      <Fieldset
         title={<h2>this.setState</h2>}
      >

         <p>
            <strong>关于 setState() 你应该了解三件事：</strong>
         </p>
         <Fieldset
            title={ <h3>1. 不要直接修改 State</h3> }
            legendStyle={ { textAlign: 'left'} }
         >
            <p>构造函数是唯一可以给 this.state 赋值的地方：</p>
            <Code  key='0'>
               { codeCard }
            </Code>
         </Fieldset>


         <Fieldset
            title={ <h3>2. State 的更新可能是异步的</h3> }
            legendStyle={ { textAlign: 'left'} }
         >
            <p><strong>出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。(  意思是异步的 )</strong></p>
            <p><strong>因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态。</strong></p>
            <p>例如：</p>
            <Code>{ codeCard5 }</Code>
            <p>解决这个问题，可以让 setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数：</p>
            <Code > { codeCard2 }</Code>
            <p> 其实 this.setState() 方法可以接受第二参数, 他表示数据更新后执行的一个回调;  </p>
            <Code>{ codeCard6 }</Code>
            <p> 没错我们可以用 async/await 特性把 this.setState() 方法转换成同步</p>
            <Code>{ codeCard7 }</Code>
         </Fieldset>

         <Fieldset
            title={ <h3>3. State 的更新会被合并</h3> }
            legendStyle={ { textAlign: 'left'} }
         >
            <p>当你调用 setState() 的时候，React 会把你提供的对象合并到当前的 state。</p>
            <p>例如，你的 state 包含几个独立的变量：</p>
            <Code> { codeCard3 }</Code>
            <p>然后你可以分别调用 setState() 来单独地更新它们：</p>
            <Code>  { codeCard4 }</Code>
            <p>这里的合并是浅合并，所以 this.setState({'{comments}'}) 完整保留了 this.state.posts， 但是完全替换了 this.state.comments。</p>
         </Fieldset>
         <Fieldset
            title={ '真实案例:只测试了第二种情况'}
            legendStyle={ { textAlign: 'left'} }
         >
            <p>这里面是个计数器</p>
            <Case increment={ 101 } />
         </Fieldset>
      </Fieldset>
   )

}