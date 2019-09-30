import { Component } from 'react';
import Fieldset from '@/components/Fieldset';

export default class Array extends Component {

   static defaultProps = {
      optionsArray: []
   };
   static propTypes = {
      optionsArray: PropTypes.array.isRequired,
   };

   render() {

      return <Fieldset>{ this.props.optionsArray.join( '--' )}</Fieldset>;

   }

}