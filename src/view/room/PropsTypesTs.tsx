
import React, { Component } from 'react';

interface Props  {
   foo: string,
   bar?: string,
}

class Vertical extends Component<Props>{

   state = {
      description: 'this is Vertical'
   };

   render(){

      return (<div>{ this.props.foo }</div>)

   }

}

export default function () {

   return (
      <div>
         <Vertical foo='使用 typescript 进行 props 检查很舒服在配合 tsx 爽歪歪' />
      </div>
   )

}




