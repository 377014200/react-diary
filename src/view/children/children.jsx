import React, {Component, Children} from 'react';
import Fieldset from "@/components/Fieldset";
import Code from 'components/Code'
import {codeCard, codeCard1, codeCard2, codeCard3} from './codeCard'
import IgnoreFirstChild from './card/IgnoreFirstChild'
import ChildrenCounter from './card/ChildrenCounter'

export default class Executioner extends Component {

   render() {
      console.log(Children)
      return (
         <Fieldset
            title={<h2>this.props.children</h2>}
         >
            <p style={ {color: '#840a0a', fontSize: '16px'} }><strong>所有的辅助函数都有共同的特点: 只包含 DOM 节点、文本节点、React 组件、注释节点；忽略函数；</strong></p>
            <p><strong>props.children 的辅助函数</strong></p>
            <p>如果你看过React的文档你就会说“children是一个不透明的数据结构”。从本质上来讲， props.children 可以使任何的类型，比如数组、函数、对象等等。</p>
            <p>React提供了一系列的函数助手来使得操作children更加方便。</p>
            <Fieldset
               title={ <h3>React.Children.map || React.Children.map</h3> }
               legendStyle={ {textAlign: 'left'} }
            >
               <p>React.Children.forEach 不做展示, 你懂得</p>
               <p style={ {color: '#840a0a' } }>语法: React.Children.map(children, func, context)</p>
               <Code>
                  { codeCard }
               </Code>
               <p>IgnoreFirstChild 组件在这里会遍历所有的children，忽略第一个child然后返回其他的。</p>
               <Code>
                  { codeCard1 }
               </Code>
               <Fieldset title='测试结果' legendStyle={ { textAlign: 'left' } }>
                  <IgnoreFirstChild>
                     <h1>First</h1>
                     <h1>Second</h1>
                     { ()=> <h2> test React.Children.map </h2> } {/*忽略函数节点, 包含注释节点*/}
                  </IgnoreFirstChild>
               </Fieldset>
            </Fieldset>
            <Fieldset
               title={ <h3>React.Children.count</h3> }
               legendStyle={ {textAlign: 'left'} }
            >
               <p style={ {color: '#840a0a' } }>语法: React.Children.count(children)</p>
               <p>因为this.props.children 可以是任何类型的，检查一个组件有多少个children是非常困难的。天真的使用 this.props.children.length
                  ，当传递了字符串或者函数时程序便会中断。假设我们有个child："Hello World!" ，但是使用 .length 的方法将会显示为12。</p>
               <p>这就是为什么我们有 React.Children.count 方法的原因</p>
               <Code>
                  { codeCard2 }
               </Code>

               <Fieldset title='测试结果' legendStyle={ { textAlign: 'left' } }>
                  <ChildrenCounter>
                     <h2> test React.Children.count </h2>
                     <h2> test React.Children.count </h2>
                     <h2> test React.Children.count </h2>
                     { ()=> <h2> test React.Children.count </h2> } {/*忽略函数节点, 包含注释节点*/}
                  </ChildrenCounter>
               </Fieldset>
            </Fieldset>
            <Fieldset
               title={ <h3>React.Children.toArray</h3> }
               legendStyle={ {textAlign: 'left'} }
            >
               <p style={ {color: '#840a0a' } }>语法: React.Children.toArray(children)</p>
               <p>将 children 转换为数组</p>
            </Fieldset>           '
            <Fieldset
               title={ <h3>React.Children.only</h3> }
               legendStyle={ {textAlign: 'left'} }
            >
               <p style={ {color: '#840a0a' } }>语法: React.Children.only(children)</p>
               <p>如果不止一个child，并且不是函数, 它就会抛出错误，让整个程序陷入中断——完美的避开了试图破坏组件的懒惰的开发者</p>
               <Code>
                  { codeCard3 }
               </Code>
            </Fieldset>
         </Fieldset>
      )

   }

}