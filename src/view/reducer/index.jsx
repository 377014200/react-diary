import shouldRouterUpdate from "@/components/HOC/shouldRouterUpdate";
import Fieldset from "@/components/Fieldset";


@shouldRouterUpdate('/redux')
export default class Reducer extends React.Component{
   
   render(){
      
      return (
         <div>
            <Fieldset title={<h2>redux</h2>}>
               <a href="http://cn.redux.js.org//docs/introduction/index.html" target="_blank"> 寻找失去的官网</a>
            </Fieldset>
         </div>
      )
      
   }
   
}


