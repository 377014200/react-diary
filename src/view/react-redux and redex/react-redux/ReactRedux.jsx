import Fieldset from '@/components/Fieldset';
import Blockquote from '@/components/Blockquote';
import Code from '@/components/Code';
import { codeCard, codeCard1, codeCard2 } from '@/view/react-redux and redex/react-redux/codeCard';
import { MapDispatchToProps } from '../case/Connect'

export default class ReactRedux extends React.PureComponent {


   render() {

      return (
         <Fieldset title={<h2>react-redux</h2>}>
            <h1>API 介绍 </h1>
            <Fieldset title={<h3>Provide</h3>}>

            </Fieldset>
            <Fieldset title={<h3>connect</h3>}>
               <p><strong>connect函数有两个参数，都是可选的:</strong></p>
               <Blockquote>
                  <p><strong>mapStateToProps:</strong> : 每次存储状态更改时调用。它接收整个存储状态，并应该返回该组件需要的数据对象。</p>
                  <div style={ { borderTop: 'none ' } }>
                     <strong>mapDispatchToProps :</strong>
                     这个参数可以是函数，也可以是对象。
                     <p>如果它是一个函数，则在组件创建时将调用它一次。它将接收dispatch作为参数，并且应该返回一个对象，其中包含使用dispatch来调度操作的函数。</p>
                     <p>如果它是一个满是动作创建器的对象，那么每个动作创建器都将被转换成一个道具函数，当调用该函数时，该函数将自动分派其动作。注意:我们建议使用这种“对象简写”形式</p>
                  </div>
               </Blockquote>
               <Code>{ codeCard1 }</Code>
               <p><strong>如果您调用connect而不提供任何参数，则您的组件将:</strong></p>
               <p>1. 当存储更改时不重新呈现</p>
               <p>2. 获得道具。可以用于手动分派操作的分派</p>
               <Code>export default connect()(Component)</Code>
               <p><strong>如果你只调用连接mapStateToProps，你的组件将:</strong></p>
               <p>1. 订阅mapStateToProps从存储中提取的值，只有当这些值发生更改时才重新呈现</p>
               <p>2. 获得道具。可以用于手动分派操作的分派</p>
               <Code>{
                  'const mapStateToProps = state => state.partOfState \nexport default connect(mapStateToProps)(Component)'
               }</Code>
               <p><strong>如果只调用connect with mapDispatchToProps，则组件将:</strong></p>
               <p>1. 当存储更改时不重新呈现</p>
               <p>2. 接收您注入mapDispatchToProps的每个动作创建器，将其作为道具，并在调用时自动分派动作</p>
               <Code>{ codeCard }</Code>
               <p><strong>如果同时调用mapStateToProps和mapDispatchToProps，则组件将:</strong></p>
               <p>1. 订阅mapStateToProps从存储中提取的值，只有当这些值发生更改时才重新呈现</p>
               <p>2. 接收您使用mapDispatchToProps注入的所有动作创建器，将其作为道具，并在调用时自动分派动作。</p>
               <Code>{ codeCard2 }</Code>
               <Fieldset title={<h3>测试区域</h3>}>
                  <MapDispatchToProps />
               </Fieldset>
            </Fieldset>
         </Fieldset>
      );

   }


}


