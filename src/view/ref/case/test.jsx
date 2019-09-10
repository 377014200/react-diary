import { Component } from 'react'

export default class TestComp extends Component{
   state = { visible: true };

   changeVisible=()=>{
      this.setState({visible: !this.state.visible});
   };

   refCb(instance){
   }

   render (){
      return(
         <div>
            <button type="button" onClick={this.changeVisible}>{this.state.visible ? '卸载' : '挂载'}ConfirmPass
            </button>
            {
               this.state.visible ?
                  <div ref={this.refCb} onChange={this.handleChange}> aaa</div>: null
            }
         </div>
      )
   }
}