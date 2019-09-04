
import React,{ Component } from 'react'
import Fieldset from 'components/Fieldset'
function BoilingVerdict(props) {

   if ( props.celsius >= 100 ) {

      return <p>The water would boil</p>

   } else {

      return <p>The water would not boil</p>

   }

}

export default class Calculator extends Component {

   constructor( props ){
      super( props );

      this.state = { temperature: '' }
   }

   render(){

      const temperature = this.state.temperature;
      const on = this.on();

      return (
         <Fieldset
            style={{ textAlign: 'center' }}
            text='父组件向子组件通讯 in Calculator.jsx'
         >
            <input value={ temperature } onChange={ on.change } />
            <BoilingVerdict celsius={ parseFloat( temperature ) } />
         </Fieldset>
      )

   }

   on(){

      const vm = this;

      return {
         change: function ( e ) {

            vm.setState( { temperature: e.target.value } )

         }
      }

   }

}
