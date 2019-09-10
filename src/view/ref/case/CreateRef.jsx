
import { createRef, Component, forwardRef } from 'react';

export default class MyComponent extends Component {

   constructor(props) {
      super(props);

      this.myRef = {
         current: null,
      };

   }

   render() {
      const on = this.on();

      return(
         <div>
            <button onClick={ on.click }>获取 ref</button>
            <div ref={this.myRef}/>
         </div>
      )
   }

   on(...arg){

      const vm = this;
      const motion = arg[0];
      const event = {
         focus(){

            if ( vm.input ){

               vm.input.focus();

            }

         },
         click(){
            console.log(vm.myRef)
         }
      };
      if ( motion in event) {

         return event[ motion ]( arg.slice( 1 ) )

      }
      return event
   }
}