import React, { memo } from 'react'
import Fieldset from "@/components/Fieldset";
import Code from "@/components/Code";
import { NavLink, } from 'react-router-dom';

const codeCard = `
function Child({seconds}){
    console.log('I am rendering');
    return (
        <div>I am update every {seconds} seconds</div>
    )
};
export default React.memo(Child)`;

function Portals() {

   return (
      <Fieldset title={ <h2>React.memo</h2> }>
         <Fieldset title={<h3>概述</h3>}>
            <p><strong>React.memo() 和 PureComponent 很相似，它帮助我们控制何时重新渲染组件。</strong></p>
            <p><strong>它只适用于函数组件</strong></p>
            <p><strong>语法: React.memo( type, compare )</strong></p>
            <p><strong>第一个参数是函数组件; 第二个是定义的 shouldComponentUpdate()</strong></p>
            <p><strong>
               参考
               <NavLink to='/pureComponent' activeClassName='route-active' > React.PureComponent </NavLink>
            </strong></p>
            <Code>{ codeCard }</Code>
         </Fieldset>
      </Fieldset>
   )

}

export default memo( Portals )
