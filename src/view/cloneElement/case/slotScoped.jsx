import React, {Children, cloneElement} from 'react';

export function Row(props) {
   return (
      <div className={'row'} style={{textAlign: 'center'}}> {props.col} </div>
   )
}


export function SlotScoped(props) {

   const children = props.children ? Children.only(props.children) : <Row/>;


   const trs = props.data.map(
      (item, index) => {

         const columns = item.map(
            (col, num) => {

               const colNode = cloneElement(children, {col});

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




