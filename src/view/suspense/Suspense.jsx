import React from 'react'
import Fiedset from 'components/Fieldset'
import Code from 'components/Code'
import { card } from './code/0001.js'

export default function Suspense() {

   return (
      <Fiedset
         title={<h2>React.Suspense</h2>}
      >
         <p >
            网络缓慢时,对于使用懒加载的页面,我们可以使用加载指示器为此组件做优雅降级。这里我们使用 Suspense 组件来解决。
         </p>
         <Code lang='jsx' style={ { marginTop: '20px' } }>
            { card }
         </Code>
      </Fiedset>
   )

}


