
import React, { Component } from 'react';

interface Props  {
   foo: string,
   bar?: string,
}

export default class Vertical extends Component<Props>{

   state = {
      description: 'this is Vertical'
   };

   render(){

      return (<div>{ this.props.foo }</div>)

   }

}






