import React, { Component, Children } from 'react';


export default class IgnoreFirstChild extends Component {
   render() {

      const children = this.props.children;
      return (
         <div>
            {
               Children.map( children, ( child, i ) => {
                  // Ignore the first child
                  if ( i < 1 ) return;
                  return child

               } )
            }
         </div>
      )

   }
}