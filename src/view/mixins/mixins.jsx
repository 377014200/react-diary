import Code from '@/components/Code';
import Fieldset from '@/components/Fieldset';
import { codeCard } from './codeCard';

export default function mixins() {

   return (
      <Fieldset
         title={<h2>关于 mixins</h2>}
      >
         <p className='warning'>
            注意：<br/>
            ES6 本身是不包含任何 mixin 支持。因此，当你在 React 中使用 ES6 class 时，将不支持 mixins
         </p>
         <p>如果完全不同的组件有相似的功能，这就会产生“横切关注点（cross-cutting concerns）“问题。针对这个问题，在使用 createReactClass 创建 React 组件的时候，引入 mixins
            功能会是一个很好的解决方案。</p>
         <a href='https://react.docschina.org/docs/react-without-es6.html' target='_blank'> 关于如何不使用 es6 的方式</a>
         <Fieldset
            title={<h3>使用 mixins 的方法和案例</h3>}
         >
            <Code>{codeCard}</Code>
         </Fieldset>
      </Fieldset>


   );

}