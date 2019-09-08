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
      const _children = children ? Children.only(children) : <Row/>;
      const on = this.on();
      const { _index } = this.state;

      const trs = data.map(
         (item, index) => {

            const columns = item.map(
               (col, num, row) => {
                  const tabIndex =  index * row.length + num ;
                  const props = {
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

}




