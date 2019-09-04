import React, {Component} from 'react'
import Fieldset from 'components/Fieldset'
import Code from 'components/Code'

const card = `
function Glossary(props) {
   return (
      <dl>
         {props.items.map(item => (
            // 没有\`key\`，React 会发出一个关键警告
            <React.Fragment key={item.id}>
               <dt>{item.term}</dt>
               <dd>{item.description}</dd>
            </React.Fragment>
         ))}
      </dl>
   );
}`;
export default function Fragments() {

   return (
      <Fieldset
         title={<h2>React.Fragments</h2>}
      >
         <p style={{fontSize: '16px'}}><strong>类似于 vue 中 template 标签, 用他可以返回多个元素,而自身却什么都不是,需要注意的他只会接受 key 的
            props传值</strong></p>
         <Code>
            {card}
         </Code>
      </Fieldset>
   )

}

