import { Component } from 'react';

   class LogProps extends Component {
      componentDidUpdate(prevProps) {
         console.log('old props:', prevProps);
         console.log('new props:', this.props);
      }
      render() {
         const { refInFancyButton,  ...rest} = this.props;

         // 将自定义的 prop 属性 “forwardedRef” 定义为 ref
         return <FancyButton ref={ refInFancyButton } {...rest} />;

      }
   }

class FancyButton extends Component {
   focus() {

      if (this.oInput) this.oInput.focus()

   }
   oInput = null;
   render(){

      return (
         <div>
            <button onClick={ ()=> this.focus()}> forward 转发测试 </button>
            <input type="text" ref={ inputEl => this.oInput = inputEl }/>
         </div>
      )

   }
}

export default LogProps;



