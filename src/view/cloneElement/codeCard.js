export const codeCard = `
React.cloneElement(
	element,       // =>  DOM 元素或者 React 组件;
	[props],       //  =>  传给 slot 的 props, 这里 不要使用 { children : *** }; 
	[...child]      //  =>   穿个 slot 的 children 
)`;

export const codeCard1 = `
import React, { Children, cloneElement } from 'react';

export function Row( props ) { // slot 候选
   return (
      <div 
         className={ 'row' } 
         style={ { textAlign: 'center' } } 
      >
         { props.col } 
      </div>
   )
}

export  function SlotScoped ( props ){
   // 是否传入的 children ,是的话必须只能有一个节点,否则使用默认的
   const children = props.children ? Children.only( props.children ) : <Row /> ;
   const trs = props.data.map(
      ( item, index ) =>{
         const columns = item.map(
            ( col, num ) =>{
               // 不管哪种,都会给 children 传递 props
               const colNode = cloneElement( children, { col } ); 
               return index === 0 ? 
                  <th key={ num }>{ colNode }</th> : 
                  <td key={ num }>{ colNode }</td>
               ;
            }
         );
         return <tr key={index}>{ columns }</tr>
      }
   );
   return (
      <table className='slot-scoped' border="1" width="100" >
         <tbody>
            { trs }
         </tbody>
      </table>
   )
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