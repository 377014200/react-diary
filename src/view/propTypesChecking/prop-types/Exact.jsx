import { Component } from 'react';
import Fieldset from "@/components/Fieldset";


export default class Exact extends Component{

   static defaultProps = {
      optionalObjectWithStrictExact: {}
   };
   static propTypes = {
      optionalObjectWithStrictExact: PropTypes.exact({
         name: PropTypes.string.isRequired,
         quantity: PropTypes.number.isRequired,
      }),
   };

   render(){
      const { name, quantity } = this.props.optionalObjectWithStrictExact;
      return (
         <Fieldset>
            <span>{ name + '--' + quantity }</span>
         </Fieldset>
      )
   }


}