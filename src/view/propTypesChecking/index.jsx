import Vertical from "@/view/propTypesChecking/typescript/PropsTypesTs";
import Fieldset from "@/components/Fieldset";
import Array from '@/view/propTypesChecking/prop-types/Array'
import Code from "@/components/Code";
import { codeCard, codeCard1} from "@/view/propTypesChecking/codeCard";
import ArrayOf from "@/view/propTypesChecking/prop-types/ArrayOf";
import ObjectOf from "@/view/propTypesChecking/prop-types/ObjectOf";
import Shape from "@/view/propTypesChecking/prop-types/Shape";
import Exact from "@/view/propTypesChecking/prop-types/Exact";


export default function () {

   return (
      <Fieldset title={<h2>类型检测</h2>}>

         <Fieldset title={<h3>使用 Typescript</h3>}>
            <Vertical foo='使用 typescript 进行 props 检查很舒服在配合 tsx 爽歪歪' />
            <Code> { codeCard }</Code>
         </Fieldset>
         <Fieldset title={<h3>React 内置的检测工具</h3>}>
            <p><strong>随着你的应用程序不断增长，你可以通过类型检查捕获大量错误。对于某些应用程序来说，你可以使用 Flow 或 TypeScript 等 JavaScript 扩展来对整个应用程序做类型检查。但即使你不使用这些扩展，React 也内置了一些类型检查的功能。要在组件的 props 上进行类型检查，你只需配置特定的 propTypes 属性</strong></p>
            <Code> { codeCard1 }</Code>

            <Fieldset title='测试区域'>
               <p>PropTypes.array</p>
               <Array optionsArray={ ['欲','上','青','天','揽','明','月'] }/>
               <p>PropTypes.arrayOf(PropTypes.number)</p>
               <ArrayOf optionalArrayOf={ [1,2,3,4,5,6] }/>
               <p>PropTypes.objectOf(PropTypes.string),</p>
               <ObjectOf optionalObjectOf={ { string: '为美好的世界献上祝福' } } />
               <p>PropTypes.shape()</p>
               <Shape
                  optionalObjectWithshape={{ color: '#bc26fa', fontWeight: 700}}
                  optionalObjectOf={ { string: '为美好的世界献上祝福' } }
               />
               <p>PropTypes.exact()</p>
               <Exact optionalObjectWithStrictExact={{ name: '李白', quantity: 18 }} />
            </Fieldset>
         </Fieldset>
      </Fieldset>
   )

}