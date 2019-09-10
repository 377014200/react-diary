import Fieldset from "@/components/Fieldset";
import TestComp from './case/test'
import InputFocus from "@/view/ref/case/InputFocus";
import Code from "@/components/Code";
import {codeCard, codeCard1, codeCard2, codeCard3, codeCard4, codeCard5} from "@/view/ref/codeCard";
import MyComponent from "@/view/ref/case/CreateRef";
import ForwardRef from "@/view/ref/case/ForwardRef";
export default function () {

   let input = null;
   const manualFocus = function () {
      input.on('focus');
   };
   return (

      <Fieldset title={<h2>ref</h2>}>
         <Fieldset title='概述'>
            <p><strong>ref属性可以设置为一个回调函数，这也是官方强烈推荐的用法</strong></p>
            <p><strong>组件被挂载后，回调函数被立即执行，回调函数的参数为该组件的具体实例。</strong></p>
            <p><strong>组件被卸载或者原有的ref属性本身发生变化时，回调也会被立即执行，此时回调函数参数为null，以确保内存泄露</strong></p>
            <p><strong>React 会在组件挂载时给 current 属性传入 DOM 元素，并在组件卸载时传入 null 值。ref 会在 componentDidMount 或 componentDidUpdate 生命周期钩子触发前更新。</strong></p>
         </Fieldset>
         <Fieldset title='注意'>
            <p className='warning'><strong>ref还可以设置为字符串值，而不是回调函数；这种方式基本不推荐使用，或者在未来的react版本中不会再支持该方式，但是可以了解一下</strong></p>
            <p className='warning'><strong>避免使用 refs 来做任何可以通过声明式实现来完成的事情。</strong></p>
            <p className='warning'><strong>你不应该在函数组件上使用 ref 属性，主要是有局限性</strong></p>
            <p className='warning'><strong>官网的 ref 转发可读性太差; 下面有按着自己的思路写的</strong></p>
         </Fieldset>
         <Fieldset title={<h3>API</h3>}>
            <p><strong>在 React 16.3 版本引入的 React.createRef() API。如果你正在使用一个较早版本的 React，我们推荐你使用回调形式的 refs。</strong></p>
            <Fieldset title={<strong>React.createRef() 创建 ref</strong>}>
               <p> React.createRef 源码</p>
               <p> 只是返回了一个封闭的对象, 然后有个 current 属性, 这个属性是必须的; </p>
               <Code> { codeCard4 }</Code>
               <p>Refs 是使用 React.createRef() 创建的，并通过 ref 属性附加到 React 元素。在构造组件时，通常将 Refs 分配给实例属性，以便可以在整个组件中引用它们。</p>
               <Code>{ codeCard1 }</Code>
               <p>当 ref 被传递给 render 中的元素时，对该节点的引用可以在 ref 的 current 属性中被访问。</p>
               <Code>{ codeCard2 }</Code>
               <p><strong>利用 React.createRef()  实现自动聚焦</strong></p>
               <Code>{ codeCard3 }</Code>
               <MyComponent />

            </Fieldset>
            <Fieldset title='React.forwardRef( callback ) 转发'>
               <a href="https://react.docschina.org/docs/forwarding-refs.html#forwarding-refs-in-higher-order-components" target='_blank'>
                  去官网看案例把, 使用这个 API 回调太多可读性真菜
               </a>
               <ForwardRef refInFancyButton={ forward => console.log( forward ) } test='test' />
               <p>这样做也可以实现转发</p>
               <Code>
                  { codeCard5 }
               </Code>
            </Fieldset>
         </Fieldset>

         <Fieldset title='使 input 自动聚焦和手动聚焦'>
            <button onClick={ manualFocus }>手动</button>
            <InputFocus ref={ InputFocus => input = InputFocus} value='使 input 自动聚焦' />
            <Code>{ codeCard }</Code>
         </Fieldset>

      </Fieldset>


   )

}