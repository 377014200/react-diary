import React, { Component } from 'react';

class Clone extends Component {

   render() {

      const on = this.on();

      this.slot = 'header';
      return (
         <div>
            <h1 onClick={ on.click } >{ this.props.children || this.props.slot }</h1>
         </div>
      )

   }

   on() {

      return {
         click: function () {
            console.log("123342")
         }
      }
   }
}

export default Clone