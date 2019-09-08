export const codeCard = `
class CustomButton extends React.Component {
   static defaultProps = {
      color: 'blue'
   }
   render(){
      return (
          <div>
               <p style={ { color: this.props.color } }>props 默认值( es6 )</p>
          </div>
      );
   }
}`;

export const codeCard1 = `
const CustomButton=(props)=>{
    return (
        <div>
            <p style={ { color: props.color } }>props 默认值(函数值)</p>
        </div>
    );
}
CustomButton.defaultProps={
    color: 'green'
};`;

export const codeCard2 = `
var createReactClass = require('create-react-class');
var CustomButton = createReactClass({
   getDefaultProps: function() {
      return {
         name: 'Mary'
      };
   },
   render: function() {
      return <h1  style={ { color: this.props.color } }>props 默认值(不使用 es6)</h1>;
   }

});`