import React from 'react';
import Fieldset from 'components/Fieldset';
import Code from '@/components/Code';
import { codeCard, codeCard1, codeCard2 } from '@/view/react-router-dom/codeCard';
import Blockquote from '@/components/Blockquote';


export default class ReactRouterDom extends React.Component {

   render() {

      return (
         <Fieldset title={<h2>react-router-dom</h2>}>
            <a href='https://blog.csdn.net/debbyDeng/article/details/84555817' target='_blank'> 寻找原文 </a>
            <a href='https://reacttraining.com/react-router/web/guides/quick-start' target='_blank'> 官网地址 </a>
            <Fieldset title={<h3>&#60;BrowserRouter&#62;</h3>}>
               <p><strong>&#60;Router&#62;的一种，通过使用HTML5提供的history
                  API(pushState,replaceState,propstate)机制来维持页面UI同RUL的统一</strong></p>
               <Blockquote>
                  <ul>
                     <li><strong>basename:</strong> 该router下路由路径的base url. 应该有一个前置斜杠，但不能有后置斜杠。如果你的页面路由路径为某个子目录，那base
                        url应设置为这个子目录。该页面的其他路由路径即在这个之下。
                     </li>
                     <li><strong>getUserConfirmation:</strong> 路由跳转的二次确认函数，用来拦截Prompt组件, 默认情况下使用window.confirm弹框</li>
                     <li><strong>forceRefresh:</strong> 布尔值，为true时, router在进行路由跳转的时候会进行页面刷新，可能只在浏览器不支持H5 history
                        api的情况下需要使用。
                     </li>
                     <li><strong>keyLength:</strong> 自定义location.key的长度，默认为6. location.key
                        或者location.state(废弃)可以用来保存页面滚动条位置。
                     </li>
                     <li><strong>children: </strong> 需要渲染的‘单个reactNode元素组件’</li>
                  </ul>
               </Blockquote>
               <Fieldset title='code 展示'>
                  <Code>{codeCard}</Code>
                  <Code>{codeCard1}</Code>
               </Fieldset>
            </Fieldset>
            <Fieldset title={<h3>&#60;HashRouter&#62;</h3>}>
               <p><strong>哈西路由</strong></p>
               <p><strong>&#60;Router&#62;的一种，通过URL hash部分，如location.hash来保持UI同URL一致。</strong></p>
               <Blockquote>
                  <ul>
                     <li><strong>basename</strong></li>
                     <li><strong>getUserConfirmation</strong></li>
                     <li><strong>hashType:string :</strong>带斜杠，不带斜杠。eg. #/ and #/sunshine/lollipops, # and
                        #sunshine/lollipops
                     </li>
                     <li><strong>children:</strong>reactNode 需要render的‘单个子元素</li>
                  </ul>
               </Blockquote>
            </Fieldset>
            <Fieldset title={<h3>&#60;Link&#62;</h3>}>
               <p><strong>进入页面路由的链接</strong></p>
               <Blockquote>

                  <ul>
                     <li><strong>to:</strong>string, 路由链接， 由location的path, search, hash属性拼接而成。</li>
                     <li><strong> to
                        :</strong>{'object { pathname: 跳转路径，search: 查询参数， hash: url中的hash, eg. #a-hash, state:存储到location中的额外状态数据}'}
                     </li>
                     <li><strong>replace:</strong>布尔值- 为true时，将会替换history stack中的当前路径</li>
                     <li><strong>innerRef:</strong>function 允许访问Link的底层组件&#60;a>&#60;/a&#62;，eg. &#60;Link to='/'
                        innerRef={'{(node)=>{this.refNode=node}}'} /&#62;</li>
                     <li><strong>others: </strong>可以传入&#60;a&#62; 元素的属性，eg. title, id, className, etc</li>
                  </ul>
               </Blockquote>
            </Fieldset>
            <Fieldset title={<h3>&#60;NavLink&#62;</h3>}>
               <p><strong>&#60;Link&#62;</strong>的特殊版本，当匹配当前URL时，会给当前link添加样式。</p>
               <Blockquote>
                  <ul>
                     <li><strong>activeClassName: </strong>string, 渲染样式</li>
                     <li><strong>activeStyle: </strong>object, 渲染样式</li>
                     <li><strong>exact: </strong>bool, 为true时，表示精准匹配路由。</li>
                     <li><strong>strict: </strong>bool, 为true时，当进行路由匹配时，后置斜杠将会被考虑在内。</li>
                     <li><strong>isActive: </strong>func, 额外函数来进一步验证当前路由是否匹配。eg.</li>
                     <li><strong>location: </strong>isActive用来比较当前路径是否匹配路由，location用来比较不同的路径。</li>
                     <li><strong>ariaCurrent: </strong>string, link的语义化标识，page| step| location | date| time | true</li>
                  </ul>
               </Blockquote>
               <Code>{codeCard2}</Code>
            </Fieldset>
            <Fieldset title={<h3>&#60;Prompt&#62;</h3>}>
               <p><strong>当想阻止用户跳转路由，可以使用&#60;Prompt&#62;提示用户是否跳转，与router的getUserConfirmation属性结合使用。</strong></p>
               <Blockquote>
                  <ul>
                     <li><strong>message：</strong>string， 提示的信息</li>
                     <li><strong>message: </strong>func, 参数为即将跳转的location对象，返回message</li>
                     <li><strong>when : </strong>bool, true表示阻止跳转，false，接受跳转</li>
                  </ul>
               </Blockquote>
            </Fieldset>
            <Fieldset title={<h3>&#60;MemoryRouter&#62;</h3>}>
               <p><strong>&#60;Router&#62;一种, 将url history保存在内存中，不可再页面地址栏中读取，通常用于测试或者非浏览器的环境，如react native</strong></p>
               <Blockquote>
                  <ul>
                     <li><strong>initialEntries: </strong> array, history stack中保存的locations 数组，locations可以为对象或者url字符串
                     </li>
                     <li><strong>initialIndex: </strong> number, 初始化location在initialEntries中的位置</li>
                     <li><strong>getUserConfirmation: </strong> func, 跳转路由的二次确认函数，与&#60;Router&#62;结合使用</li>
                     <li><strong>keyLength: </strong> number, location.key的长度，默认6位</li>
                     <li><strong>children: </strong> node, 单个元素react 组件</li>
                  </ul>
               </Blockquote>
            </Fieldset>
            <Fieldset title={<h3>&#60;Redirect&#62;</h3>}>
               <p><strong>使用redirect将跳转到一个新的路由，新的location将会覆盖history stack中的当前location.props</strong></p>
               <Blockquote>
                  <ul>
                     <li><strong>to: </strong>string, url地址</li>
                     <li><strong>to: </strong>object, location object, 属性有：pathname: 跳转路径，search: 查询参数， hash: url中的hash,
                        eg. #a-hash, state:存储到location中的额外状态数据.
                        location中的state可以在redirect跳转组件的this.props.location.state访问
                     </li>
                     <li><strong>push: </strong>为true表示redirect path将往history stack中推一条新数据而不是替换他</li>
                     <li><strong>from: </strong>redirect from url, 会进行正则匹配。只能用在&#60;Switch&#62;中</li>
                     <li><strong>exact: </strong>bool, 精准匹配</li>
                     <li><strong>strict: </strong>bool, 严格模式，后斜杠将考虑在内</li>
                  </ul>
               </Blockquote>
            </Fieldset>
            <Fieldset title={<h3>&#60;Route&#62;</h3>}>
               <p><strong>React router中最重要的模块，主要职责是当location匹配路由时，会将UI render出来。</strong></p>
               <Blockquote>
                  <ul>
                     <li>
                        <p><strong>Route render methods</strong></p>
                        <p><strong style={{ color: '#3498d5' }}>&#60;Route component&#62;</strong></p>
                        <p><strong style={{ color: '#3498d5' }}>&#60;Route render&#62;</strong></p>
                        <p><strong style={{ color: '#3498d5' }}>&#60;Route children&#62;</strong></p>
                        <p>以上适用于不同的环境，每次只能用其中一种方法，component是最常用的</p>
                     </li>
                     <li><strong>component: </strong>当传递component渲染UI时，router将会用React.createElement来将组件封装成一个新的React
                        element, 当传递一个inline func, react每次render都会unmount, mount一个新的组件，会消耗性能，此时可以使用render/children prop
                     </li>
                     <li><strong>render: </strong>func, inline func不会有上述性能问题，参数同route props相同</li>
                     <li><strong>children: </strong>func, 有时，无论location是否匹配路由，你都想render某个UI，此时可以使用children prop
                        ,等同于render。 函数参数同route props
                     </li>
                     <li><strong>component, render优先级高于children，所以不要一次使用一种以上的渲染方式</strong></li>
                     <li><strong>path: </strong>string | string[], 一个url字符串，或者一组url 字符串，会进行正则匹配，如果path为空，那么会认为匹配</li>
                     <li><strong>exact: </strong>bool, 为true, 要精准匹配，path同location.pathname完全一致</li>
                     <li><strong>strict: </strong>bool, 为true, path的后置斜杠将在进行匹配时被考虑在内。</li>
                     <li><strong>location: </strong>object, route
                        path每次都会与当前浏览器的url进行匹配，来确定是否渲染，但是location可以使一个不匹配的pathname通过这种匹配，从而渲染。注意：如果一个&#60;Route&#62;写在了&#60;Switch&#62;中，&#60;Switch&#62;中的location
                        prop将覆盖&#60;Route&#62;中的location
                     </li>
                     <li><strong>sensitive: </strong>bool, pathname,current url匹配时，大小写是否敏感.</li>
                  </ul>
               </Blockquote>
            </Fieldset>

            <Fieldset title={<h3>&#60;Router&#62;</h3>}>
               <p><strong>所有路由组件的最底层接口, 通常，将用以下某种高阶路由：</strong></p>
               <Blockquote>
                  <p><strong>&#60;BrowserRouter&#62;</strong></p>
                  <p><strong>&#60;HashRouter&#62;</strong></p>
                  <p><strong>&#60;MemoryRouter&#62;</strong></p>
                  <p><strong>&#60;NativeRouter&#62;</strong></p>
                  <p><strong>&#60;StaticRouter&#62;</strong></p>
                  <p><strong>使用低阶 &#60;Router&#62; 的最常见用例是同步一个自定义历史记录与一个状态管理库，比如 Redux 或 Mobx。请注意，将 React Router
                     和状态管理库一起使用并不是必需的，它仅用于深度集成。</strong></p>
                  <p><strong>history: </strong>object, 路由导航历史记录对象</p>
                  <p><strong>children: </strong>单个子元素组件</p>
               </Blockquote>
            </Fieldset>

            <Fieldset title={<h3>&#60;StaticRouter&#62;</h3>}>
               <p><strong>静态路由，页面的location 将不会改变。一般用于服务器端。</strong></p>
               <Blockquote>
                  <ul>
                     <li><strong>basename: </strong> 所有location的base url，有前置斜杠无后置斜杠</li>
                     <li><strong>location: </strong>string</li>
                     <li><strong>location: </strong>object</li>
                     <li><strong>context: </strong>object, 渲染中，组件会添加属性到context上保存某些信息</li>
                     <li><strong>children: </strong>单元素组件</li>
                  </ul>
               </Blockquote>
            </Fieldset>

            <Fieldset title={<h3>&#60;Switch&#62;</h3>}>

               <p>
                  <strong>渲染&#60;Route&#62;或&#60;Redirect&#62;中第一个匹配location的组件，且子元素只能为&#60;Route&#62;或&#60;Redirect&#62;</strong>
               </p>
               <Blockquote>

                  <ul>
                     <li><strong>location: </strong>object,</li>
                     <li><strong>children: </strong>switch的children组件只能为&#60;Route&#62;或&#60;Redirect&#62;</li>
                  </ul>
               </Blockquote>
            </Fieldset>
         </Fieldset>
      );

   }

}


