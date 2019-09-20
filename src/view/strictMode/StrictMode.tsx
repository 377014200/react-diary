import React from 'react';


import Fieldset from 'components/Fieldset'
import Code from 'components/Code'
import { codeCard } from './codeCard'

export default function StrictMode() {

    return (
        <Fieldset title={<h2>React.StrictMode</h2>}>
            <Fieldset title={<h3>主要用途</h3>}>
                <ul>
                    <li>1. 识别不安全的生命周期</li>
                    <li>2. 关于使用过时字符串 ref API 的警告</li>
                    <li>3. 关于使用废弃的 findDOMNode 方法的警告</li>
                    <li>4. 检测意外的副作用</li>
                    <li>5. 检测过时的 context API</li>
                </ul>
            </Fieldset>


            <p><strong>StrictMode 是一个用来突出显示应用程序中潜在问题的工具。与 Fragment 一样，StrictMode 不会渲染任何可见的 UI。它为其后代元素触发额外的检查和警告</strong></p>
            <Code>{ codeCard }</Code>
            <p>在上述的示例中，不会对 Header 和 Footer 组件运行严格模式检查。但是，ComponentOne 和 ComponentTwo 以及它们的所有后代元素都将进行检查。</p>



        </Fieldset>

    )

}








