import React, {Component} from 'react'

export default class Fieldset extends Component {

   legendStyle = {
      textAlign: 'center',
   };

   render() {

      const { children, styleIndex, legendStyle, title } = this.props;

      return (
         <div style={ { margin:'10px 0', width: '100%'} }>
            <fieldset>
               <legend style={legendStyle ? legendStyle : this.legendStyle }> { title } </legend>
               {children}
            </fieldset>
         </div>
      )

   }

}