import Button from "@/view/HOC/case/InheritanceInversion/Button";

export const codeCard = `
React.cloneElement(
	element,       // =>  DOM 元素或者 React 组件;
	[props],       //  =>  传给 slot 的 props, 这里 不要使用 { children : *** }; 
	...[...child]      //  =>   传给 slot 的 children 
)`;

export const codeCard1 = `
import React, { Children, cloneElement, Component } from 'react';
export function Row(props) {

   return (
      <div
         className={'row'}
         style={ {textAlign: 'center', cursor: 'pointer', color: props.color} }
         onClick={ props.onClick }
      >
         { props.col }
      </div>
   )
}
export class SlotScoped  extends Component{
   state = {
      _index: -1,
   };
   render(){
      const { children, data } = this.props;
      // 如果提供了插槽,只能有一个
      const _children = children ? Children.only(children) : <Row/>;
      const on = this.on();
      const { _index } = this.state;
      const trs = data.map(
         (item, index) => {
            const columns = item.map(
               (col, num, row) => {
                  const tabIndex =  index * row.length + num ;
                  const props = { // 向插槽提供 props
                     col , 
                     onClick: on.click( tabIndex ), 
                     color: tabIndex === _index ? '#fff' : '#000' 
                  };
                  const colNode = cloneElement(_children,  props);
                  return index === 0 ?
                     <th key={num}>{colNode}</th> :
                     <td key={num}>{colNode}</td>
                  ;
               }
            );
            return <tr key={index}>{columns}</tr>
         }
      );
      return (
         <table className='slot-scoped' border="1" width="100">
            <tbody>
               { trs }
            </tbody>
         </table>
      )
   }
   on(){    
      const vm = this;
      return {
         click: function ( clickIndex ) {            
            return ()=>{
               vm.setState( { _index: clickIndex } )
            }
         }
      }
   }
}`;

export const codeCard2 = `
// 数据结构
const data = [
   [ 1, 2, 3 ],
   [ 4, 5, 6 ],
   [ 7, 8, 9 ]
];
// 在你的组件中引用 
// 现在 Row 是不是很像 vue 中 slotScoped 
<SlotScoped data={ data }>
   <Row />  
</SlotScoped>`;

export const codeCard3 = `
import { cloneElement } from 'react';
// HOCwith.jsx
// 这是一个高阶组件: 反向继承的方法
export default function (WrappedButton) {
   class HOCWith extends WrappedButton {
      constructor() {
         super();
         const { state } = this;
         state.hocNum = 1;
         state.style = {
            backgroundColor: 'black',
            color: '#fff'
         };
         state.value = '的按钮';
      }
      onClick() {
         this.setState({hocNum: this.state.hocNum + 1});
      }
      render() {
         /* 下面说的 Button 是一个组件 */
         const buttonNode = super.render();
         const hocProps = {
            // 这个点击事件会绑定到 Button 根节点的
            onClick: () => this.onClick(),
            // Button 通过 this.props.poyfills 不会拿到 '寻找失去的未来' 这个值
            poyfills: '寻找失去的未来'
         };

         // 继承了 Button
         const newButton = cloneElement(
            buttonNode,    // => 父类的 render 返回的结果
            hocProps,       // => 这 props 会转换为 Button 根节点的 Attribute 的属性
            "强化 +" + this.state.hocNum + buttonNode.props.children
         );
         // 作为子组件的 Button
         const incompleteButton =  cloneElement(
            this.props.children,  // => num={123465} 的 Button 组件;
            { licnk: '123' }       // => Button 会通过 this.props.lick 拿到这个值
         );
         return (
            <div>
               { newButton }
               { incompleteButton }
            </div>
         )
      }
   }
   return HOCWith
}

// 另一个.jsx
// 引用这个高级组件
import HOCWith from "@/view/HOC/case/InheritanceInversion/HOCWith";
import Button from "@/view/HOC/case/InheritanceInversion/Button";
const HocButton = HOCWith( Button );
export default function () {

   return (
      <HocButton num={123}>
         <Button  num={123465}/>
      </HocButton>
   )
}`;
























