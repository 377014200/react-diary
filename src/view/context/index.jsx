import React from 'react';
import Fieldset from 'components/Fieldset'
import Code from 'components/Code'
import { card1, card2, card3} from './codeCard'
import App from 'view/context/case/app'

import './context.scoped.css'
export default function () {

   return (
      <div className="context">
         <Fieldset
            title={<h2>Context</h2>}
         >
            <p><strong style={{fontSize: '16px'}}>解决组件嵌套太深而引起的组件通讯困难的解决方案</strong></p>
            <a href="https://zh-hans.reactjs.org/docs/context.html#contextprovider" target='_blank'>对于更详细的介绍, 我们会去寻找失去的官网</a>

            <Fieldset
               title= '概述:'
               legendStyle={ { textAlign: 'left'} }
            >
               <ul>
                  <li>React.createContext: 创建一个 provider 对象的引用</li>
                  <li>Context.provider: 发布 provider 类似于 vue 中 provider 属性</li>
                  <li>Class.contextType: 是一个挂载到 Class 静态属性的 React.createContext, 这种只支持单一的Context,并且只限制于 Class 的组件中; 在class 的内部用 this.context 访问 project ;相当于 vue 中的 reject</li>
                  <li>Context.Consumer: 订阅 provider 可以用在 函数式的组件 和 Class 组件中, 支持多个 Context.provider 的订阅; 相当于 vue 中的 reject</li>
               </ul>
            </Fieldset>
            <Fieldset
               title= 'React.createContext'
               legendStyle={ { textAlign: 'left'} }
            >
               <p>创建一个 Context 对象。当 React 渲染一个订阅了这个 Context 对象的组件，这个组件会从组件树中离自身最近的那个匹配的 Provider 中读取到当前的 context 值</p>
               <p>只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效。这有助于在不使用 Provider 包装组件的情况下对组件进行测试。注意：将 undefined 传递给 Provider 的 value 时，消费组件的 defaultValue 不会生效</p>
               <Code lineNumber={ false }>
                  {'const MyContext = React.createContext(defaultValue);'}
               </Code>
            </Fieldset>

            <Fieldset
               title= 'Context.Provider'
               legendStyle={ { textAlign: 'left'} }
            >
               <p>每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化。</p>
               <p>Provider 接收一个 value 属性，传递给消费组件。一个 Provider 可以和多个消费组件有对应关系。多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据。</p>
               <p>当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染。Provider 及其内部 consumer 组件都不受制于 shouldComponentUpdate 函数，因此当 consumer 组件在其祖先组件退出更新的情况下也能更新。</p>
               <p>通过新旧值检测来确定变化，使用了与 Object.is 相同的算法。</p>
               <Code lineNumber={ false }>
                  { '<MyContext.Provider value={/* 某个值 */}>' }
               </Code>
            </Fieldset>

            <Fieldset
               title= 'Class.contextType'
               legendStyle={ { textAlign: 'left'} }
            >
               <p>挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象。这能让你使用 this.context 来消费最近 Context 上的那个值。你可以在任何生命周期中访问到它，包括 render 函数中。</p>

               <Code >
                  { card2 }
               </Code>
               <p>如果你在使用基于 es6 的新语法</p>
               <Code>
                  { card3 }
               </Code>
            </Fieldset>

            <Fieldset
               title= 'Context.Consumer'
               legendStyle={ { textAlign: 'left'} }
            >
               <p>这里，React 组件也可以订阅到 context 变更。这能让你在函数式组件中完成订阅 context。</p>
               <p>这需要函数作为子元素（function as a child）这种做法。这个函数接收当前的 context 值，返回一个 React 节点。传递给函数的 value 值等同于往上组件树离这个 context 最近的 Provider 提供的 value 值。如果没有对应的 Provider，value 参数等同于传递给 createContext() 的 defaultValue。</p>
               <Code lineNumber={ false }>
                  { `<MyContext.Consumer>\n{value => /* 基于 context 值进行渲染*/}\n</MyContext.Consumer>` }
               </Code>
            </Fieldset>
            <Fieldset
               title= '案例-code:'
               legendStyle={ { textAlign: 'left'} }
            >
               <Code>
                  { card1 }
               </Code>
            </Fieldset>
            <Fieldset
               title= '案例'
               legendStyle={ { textAlign: 'left'} }
            >
            <App />
            </Fieldset>
         </Fieldset>
      </div>
   )

}