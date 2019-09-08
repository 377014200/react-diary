export const codeCard = `
React.cloneElement(
	element,       // =>  DOM 元素或者 React 组件;
	[props],       //  =>  传给 slot 的 props, 这里 不要使用 { children : *** }; 
	[...child]      //  =>   穿个 slot 的 children 
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