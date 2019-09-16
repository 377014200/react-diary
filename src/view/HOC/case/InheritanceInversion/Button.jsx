
import { Component } from 'react';

export default class Button extends Component {
   static polfillry = '123';
   state = {
      style: {
         backgroundColor:  'pink',
         color: 'blue'
      },
      value: '普通的按钮'
   };

   componentDidMount(){
      // console.log( '寻找失去的未来 in Button 中' )
   }

   render(){

      const { value, style } = this.state;
      const { num } = this.props;
      console.log( this );
      return <button style={ style }>{ value + num  }</button>

   }

}





