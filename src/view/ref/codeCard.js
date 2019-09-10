export const codeCard = `
import React { Component } from 'react'
export default class InputFocus extends Component{
   input = null;
   componentDidMount(){
      this.on().focus()
   }
   render(){
      return (
         <div>
            <input
               type="text" name='username'
               ref={ input => this.input = input}
               defaultValue={ this.props.value }
            />
         </div>
      )
   }
   on(){
      const vm = this;
      return{
         focus(){
            if ( vm.input ){
               vm.input.focus();
            }
         }
      }
   }
}

// 引用 
function from() {
   let input = null;
   const manualFocus = function () {
      input.on().focus();
   };
   return (
      <form>
         <button onClick={ manualFocus }>手动</button>
         <InputFocus ref={ InputFocus => input = InputFocus} value='使 input 自动聚焦' />
      </form>
   )
}`;

export const codeCard1 = `
class MyComponent extends React.Component {
   constructor(props) {
      super(props);
      this.myRef = React.createRef();
   }

   render() {
      return <div ref={this.myRef}/>;
   }
}`;


export const codeCard2 = `
const node = this.myRef.current;
`;
export const codeCard3 = `
class CustomTextInput extends React.Component {
   constructor(props) {
      super(props);
      // 创建一个 ref 来存储 textInput 的 DOM 元素
      this.textInput = React.createRef();
      this.focusTextInput = this.focusTextInput.bind(this);
   }

   focusTextInput() {
      // 直接使用原生 API 使 text 输入框获得焦点
      // 注意：我们通过 "current" 来访问 DOM 节点
      this.textInput.current.focus();
   }

   render() {
      // 告诉 React 我们想把 <input> ref 关联到
      // 构造器里创建的 \`textInput\` 上
      return (
         <div>
            <input
               type="text"
               ref={this.textInput}/>

            <input
               type="button"
               value="Focus the text input"
               onClick={this.focusTextInput}
            />
         </div>
      );
   }
}

// 引用 CustomTextInput
class AutoFocusTextInput extends React.Component {
   constructor(props) {
      super(props);
      this.textInput = React.createRef();
   }

   componentDidMount() {
      this.textInput.current.focusTextInput();
   }

   render() {
      return (
         <CustomTextInput ref={this.textInput}/>
      );
   }
}`;

export const codeCard4 = `
// an immutable object with a single mutable value
function createRef() {
   var refObject = {
      current: null
   };
   {  //Object.seal()方法被用来封闭一个对象，
      Object.seal(refObject);
   }
   return refObject;
}`;

export const codeCard5 =`
// LogProps.jsx
import { Component } from 'react';
class LogProps extends Component {
   componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
   }
   render() {
      const { refInFancyButton,  ...rest} = this.props;
      // 将自定义的 prop 属性 “refInFancyButton” 定义为 ref
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

// ref.jsx
// 使用 ForwardRef 
// 现在 forward 是 FancyButton 实例的引用, 你想干什么是你的事了;
<ForwardRef refInFancyButton={ forward => console.log( forward ) } test='test' />`;


