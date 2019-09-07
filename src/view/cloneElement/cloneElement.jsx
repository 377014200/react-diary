import React from 'react'
import Fieldset from "@/components/Fieldset";
import Code from "@/components/Code";
import { SlotScoped, Row } from "@/view/cloneElement/case/slotScoped";
import { codeCard, codeCard1, codeCard2 } from "@/view/cloneElement/codeCard";


export default function ( props ) {

   const data = [
      [ 1, 2, 3 ],
      [ 4, 5, 6 ],
      [ 7, 8, 9 ]
   ];
   console.log(<h2>'wqe'</h2>)
   return (
      <Fieldset
         title={<h2>React.cloneElement</h2>}
      >
         <p style={ { color: 'rgb(132, 10, 10)', fontSize: '16px' } }><strong>克隆组件: 这个 API 可以实现 vue 中作用域插槽一样的功能</strong></p>
         <Code>
            { codeCard }
         </Code>
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