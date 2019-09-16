import Fieldset from "@/components/Fieldset";
import Code from "@/components/Code";
import { codeCard, codeCard1, codeCard2, codeCard3, codeCard4 } from "@/view/HOC/codeCard";
import Button from "@/view/HOC/case/InheritanceInversion/Button";
import HOCWith from "@/view/HOC/case/InheritanceInversion/HOCWith";

const HocButton = HOCWith(Button);
export default function () {

   return (
      <div className="hoc">
         <Fieldset title={<h2>高阶组件(High order component)</h2>}>
            <Fieldset title={<h3>实现高阶组件的方法有如下两种：</h3>}>
               <p><strong>属性代理: </strong>高阶组件通过被包裹的React组件来操作props</p>
               <p><strong>反向继承(Inheritance Inversion): </strong>高阶组件继承于被包裹的React组件</p>
            </Fieldset>
         </Fieldset>

         <Fieldset title={<h3>属性代理</h3>}>
            <p>属性代理是我们react中常见高阶组件的实现方法，我们通过一个例子来说明：</p>
            <Code>{ codeCard }</Code>
            <p>从这里看到最重要部分是render 方法中返回了传入 WrappedComponent的React组件。这样，我们就可以通过高阶组件来传递props。这种方法即为属性代理。</p>
            <p>自然，我们想要使用MyContainer这个高阶组件就变得非常容易：</p>
            <Code>{ codeCard1 }</Code>
            <p>这样组件就可以一层层地作为参数被调用，原始组件就具备了高阶组件对它的修饰。就这么简单，保持单个组件封装性的同时还保留了易用性。当然，我们也可以用decorator来转换。</p>
            <p>当使用属性代理构建高阶组件时，调用顺序不同于mixin。上述执行生命周期的过程类似于堆栈调用：</p>
            <p><strong>didmount ->HOC didmount ->(HOCs didmount)->(HOCs will unmount)->HOC will unmount -> unmount</strong></p>
            <h3>组件参数</h3>
            <p>有时，我们调用高阶组件需要传入一些参数，这可以用非常简单的方式来实现。</p>
            <Code>{ codeCard3 }</Code>
         </Fieldset>


         <Fieldset title={<h3>反向继承</h3>}>
            <p>另一种构建高阶组件的方法称为反向继承，从字面意思上看，它一定与继承性相关。我们同样来看一个简单的实现。</p>
            <Code>{ codeCard2 }</Code>
            <p>如上代码。高阶组件返回的组件继承于 WrappedComponent 。因为被动地继承了 WrappedComponent，所有的调用都会反向，这也是种方法的由来</p>
            <p>这种方法与属性代理不太一样。它通过继承WrappedComponent来实现，方法可以通过super来顺序调用。因为依赖于继承机制。HOC的调用顺序和队列是一样的。</p>
            <p><strong>didmount -> HOC didmount ->(HOCs didmount) -> will unmount ->HOC will unmount ->(HOCs will unmount)</strong></p>
            <p>在反向继承方法中，高阶组件可以使用 WrappedComponent 引用，这意味着它可以使用 WrappedComponent 的state 、props。生命周期和render方法。但它不能保证完整的子组件树被解析。它有两个比较大的特点，下面我们展开来讲一讲。</p>
            <h3>渲染劫持</h3>
            <p>渲染劫持就是指的是高阶组件可以控制 WrappedComponent的渲染过程，并渲染各种各样的结果。我们可以在这个过程中在任何React元素输出的结果中读取、增加、修改、删除props，或读取或修改React元素树，或条件显示。又或者用样式包裹元素树</p>
            <h3>控制state</h3>
            <p>高阶组件可以读取、修改或删除WrappedComponent实例中的state，如果需要的话，也可以增加state</p>
            <h3>组件命名</h3>
            <p>当包裹一个高阶组件时，我们失去了原始 WrappedComponent的displayName，而组件名字是方便我们开发与调试的重要属性</p>
            <Code>{ codeCard4 }</Code>
            <p>这也是利用了函数式编程的特征。可见，在React抽象的过程中，处处可见它的影子</p>
            <Fieldset title='测试案例区域'>
               <HocButton num={123} >
                  <Button  num={123465}/>
               </HocButton>
            </Fieldset>

         </Fieldset>
      </div>

   )

}