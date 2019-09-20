import { Component } from 'react';
import Fieldset from "@/components/Fieldset";


export default class ArrayOf extends Component{

   static defaultProps = {
      optionalArrayOf: []
   };
   static propTypes = {
      optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
   };

   render(){
      return <Fieldset style={ {textAlign: 'center' } }>{ (this.props.optionalArrayOf).join('--')}</Fieldset>
   }


}