import React from 'react'

export class CustomButtonEs6 extends React.Component {
   static defaultProps = {
      color: 'blue'
   };
   render(){
      return (
         <div>
            <p style={ { color: this.props.color } }>props 默认值( es6 )</p>
         </div>
      );
   }
}

export const CustomButtonFunction = function(props){
   return (
      <div>
         <p style={ { color: props.color } }>props 默认值(函数值)</p>
      </div>
   );
};

CustomButtonFunction.defaultProps={
   color: 'green'
};
