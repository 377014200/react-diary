import React from 'react'
import Fieldset from "@/components/Fieldset";
import Code from "@/components/Code";
import { SlotScoped, Row } from "@/view/cloneElement/case/slotScoped";
import { codeCard, codeCard1, codeCard2, codeCard3 } from "@/view/cloneElement/codeCard";


export default function ( props ) {

   const data = [
      [ 1, 2, 3 ],
      [ 4, 5, 6 ],
      [ 7, 8, 9 ]
   ];

   return (
      <Fieldset
         title={<h2>React.cloneElement</h2>}
      >
         <p><strong>克隆组件: 这个 API 可以实现 vue 中作用域插槽一样的功能</strong></p>
         <Code>
            { codeCard }
         </Code>
         <Fieldset title={<h3>注意</h3>}>
            <p className='warning'>你在使用 '反向继承' 这种高级操作的时候 cloneElement 会有不一样的表现行为</p>
            <p className='warning'>子类和父类是共享自身的属性(比如, state 和 props</p>
            <Code>{ codeCard3}</Code>
         </Fieldset>
         <Fieldset
            title={ <h3>这是一个类似于 vue 插槽的代码 </h3> }
         >
            <p></p>
            <Code>
               { codeCard1 }
            </Code>
            <Code>
               { codeCard2 }
            </Code>
         </Fieldset>
         <Fieldset title='测试结果'>
            <p>模仿 vue 的作用域插槽的一个案例</p>
            <SlotScoped data={ data }>
               <Row />
            </SlotScoped>
         </Fieldset>
      </Fieldset>

   )
}