import { PureComponent, Children } from 'react';
import './blockquote-style.scoped.css';

export default class Blockquote extends PureComponent {

   render() {

      const childrens = Children.toArray( this.props.children );

      return (
         <blockquote>
            { childrens }
         </blockquote>
      );

   }

}


