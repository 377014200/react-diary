import React, {Component} from 'react'

export default class Fieldset extends Component {



   render() {

      const { children, legendStyle, title } = this.props;
      const _legendStyle = {
         textAlign: title && title.type === 'h2' ? 'center' : 'left',
      };
      console.log( title.type === 'h2')
      return (
         <div style={ { margin:'10px 0', width: '100%'} }>
            <fieldset>
               <legend style={legendStyle ? legendStyle : _legendStyle }> { title } </legend>
               {children}
            </fieldset>
         </div>
      )

   }

}