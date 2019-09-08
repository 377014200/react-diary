import React, { Component } from 'react'
import Call from 'JS/call'

const call = new Call();
class EmailInput extends Component {
   constructor( props ){
      super( props );
      console.log(23)
      call.emit('aa',  (value) =>{

         this.state = { email: value}
      });
   }
   state = { email: '' };

   render() {

      return <input onChange={this.handleChange} value={this.state.email} />;
   }

   handleChange = event => {
      console.log(this.state.email)
      this.setState({ email: event.target.value });
   };

}

export  class Test extends Component{

   constructor(props) {
      super(props);
      this.state        = { name: '' } ;
      this.handleChange = this.handleChange.bind(this);
      call.once('aa',function (cd) {
         cd('123')
      })
   }

   handleChange(event) {
      this.setState({ name: event.currentTarget.value });
   }

   render() {
      return (
         <div>
            <input type="text" onChange={ this.handleChange } />
            <EmailInput email={ this.state.name } />
         </div>
      );
   }

}