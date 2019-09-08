import React, { Component } from 'react'
import Fieldset from "@/components/Fieldset";
import Code from "@/components/Code";
import { Test } from "@/view/contorlledAndUncontorlled/case/test";

export default function ContorlledAndUncontorlled() {

   return (
      <Fieldset title={<h2>受控组件和非受控组件</h2>}>
         <a href="https://react.docschina.org/blog/2018/06/07/you-probably-dont-need-derived-state.html">参考官网</a>
         <p><strong>名词“受控”和“非受控”通常用来指代表单的 inputs，但是也可以用来描述数据频繁更新的组件。</strong></p>
         <p><strong>受控：用 props 传入数据的话，组件可以被认为是受控（因为组件被父级传入的 props 控制）</strong></p>
         <p><strong>非受控：数据只保存在组件内部的 state 的话，是非受控组件（因为外部没办法直接控制 state）。</strong></p>
         <Fieldset title='测试结果'>
            <Test email='377014200@qq.com'/>


         </Fieldset>
      </Fieldset>
   )

}