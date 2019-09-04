import React, {Component} from 'react';
import Clock from './Clock'
import Fieldset from 'components/Fieldset'

class Spinach extends Component {

   constructor(props) {
      super(props);
      const children = this.props.children;
      this.slotName = ['radius', 'random'];
      this.slots = [];
      this.state = {
         bgColor: 'red',
         num: 12,
         aa: 22,
      };

      (children instanceof Array ? children : [children || null]).forEach(
         (el, i) => {

            if (el && this.slotName.indexOf(el.props.slot) > -1) {
               this[el.props.slot] = el
            } else {
               this.slots.push(el)
            }

         }
      )

   }

   render() {

      const on = this.on();
      const bgColor = this.state.bgColor;
      const computed = this.computed();
      const slots = this.slots;

      return (
         <Fieldset text='slot and event  in Spinach.jsx'>
            <h2 onClick={on.click} style={ { backgroundColor: bgColor } }> add </h2>
            {slots}
            <h1>{computed}</h1>
            <Clock/>
            {this.radius}
            {this.random}
         </Fieldset>
      )

   }

   computed() {

      return this.state.num + this.state.aa

   }

   on() {
      const vm = this;

      return {

         click: function (e) {

            vm.setState({
               bgColor: 'blue',
               num: ++vm.state.num
            })

         },

      }
   }
}

export default Spinach