import { Component } from 'react'


export default class InputFocus extends Component{
   input = null;

   componentDidMount(){

      this.on('focus')

   }

   render(){

      return (
         <div>
            <input
               type="text" name='username'
               ref={ input => this.input = input}
               defaultValue={ this.props.value }
            />
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

         }
      };
      if ( motion in event) {

         return event[ motion ]( arg.slice( 1 ) )

      }
      return event
   }
   
}

