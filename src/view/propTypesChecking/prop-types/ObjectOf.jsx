import { Component } from 'react';
import Fieldset from "@/components/Fieldset";


export default class ObjectOf extends Component{

   static defaultProps = {
      optionalObjectOf: {}
   };
   static propTypes = {
      optionalObjectOf: PropTypes.objectOf(PropTypes.string),
   };

   render(){
      return <Fieldset style={ {textAlign: 'center' } }>{ this.props.optionalObjectOf.string }</Fieldset>
   }


}