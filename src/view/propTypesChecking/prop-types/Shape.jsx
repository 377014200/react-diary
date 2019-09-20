import { Component } from 'react';
import Fieldset from "@/components/Fieldset";


export default class Shape extends Component{

   static defaultProps = {
      optionalObjectOf: {}
   };
   static propTypes = {
      optionalObjectWithShape: PropTypes.shape( {
         color: PropTypes.string,
         fontWeight: PropTypes.number
      } ),
      optionalObjectOf: PropTypes.objectOf( PropTypes.string ),
   };

   render(){
      return (
         <Fieldset>
            <span  style={ this.props.optionalObjectWithshape }>{ this.props.optionalObjectOf.string }</span>
         </Fieldset>
      )
   }


}