import React, {PureComponent} from 'react'
import Fieldset from "@/components/Fieldset";
import Code from "@/components/Code";
import {codeCard, codeCard1, codeCard2} from "@/view/pureComponent/codeCard";
import {Parent} from "@/view/pureComponent/case/text";

export default class Pure extends PureComponent {

   render() {
      return(
         <Fieldset title={<h2>React.PureComponent</h2>}>
            <Fieldset title={<h3>概述</h3>}>
               <p><strong>1. 实现了 shouldComponentUpdate() 在状态改变时才会渲染; 比 Component 开销要小</strong></p>
               <p><strong>2. 不要试图重写 shouldComponentUpdate() 这会让你变的很困惑</strong></p>
               <p><strong>3. 浅比较, 意味着是引用类型的值; 你应该改变引用(推荐)或者手动执行 forceUpdate()来更新状态</strong></p>
               <p><strong>4. 只要传递的 props ,在组件内部不管你是否使用了 props 的值; props 变化时组件会渲染, 所以尽量避免传递无用的 props</strong></p>
               <p><strong>5. 对 state 里面的值不要使用 ++ 运算符然后在赋值给它, 他不会触发跟新</strong></p>
            </Fieldset>
            <h3>避免使用 shouldComponentUpdate()</h3>
            <Code>
               { codeCard }
            </Code>
            <h3>避免使用 ++ ,和改变对象引用</h3>
            <Code>
               { codeCard1 }
            </Code>
            <Fieldset title='测试结果'>
               <Parent />
            </Fieldset>
            <h3>避免传递无用的 props </h3>
            <Code>
               { codeCard2 }
            </Code>
         </Fieldset>
      )
   }

}