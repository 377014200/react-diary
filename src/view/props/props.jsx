import React from 'react'
import Fieldset from "@/components/Fieldset";
import Code from "@/components/Code";
import { codeCard, codeCard1, codeCard2  } from './codeCard'
import {CustomButtonEs6, CustomButtonFunction} from "@/view/props/case/DefaultProps";

export default function Props() {

   return (
      <Fieldset
         title={<h2> props </h2>}
      >
         <Fieldset title={<h3> 设置默认值 </h3>} >
            <p><strong>基于 es6 的组件</strong></p>
            <Code>
               { codeCard }
            </Code>
            <p><strong>基于无状态的函数组件</strong></p>
            <Code>
               { codeCard1 }
            </Code>
            <p><strong>基于不使用 es6 的写法</strong></p>
            <Code>
               { codeCard2 }
            </Code>
            <Fieldset title='测试结果'>
               <CustomButtonEs6 />
               <CustomButtonFunction />
            </Fieldset>
         </Fieldset>
      </Fieldset>
   )

}