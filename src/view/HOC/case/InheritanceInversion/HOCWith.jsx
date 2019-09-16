import {Component, cloneElement} from 'react';

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

      componentDidMount() {
         // console.log( "didMountHoc" );
         // console.log( this )
      }

      onClick() {
         this.setState({hocNum: this.state.hocNum + 1});
      }

      render() {

         const buttonNode = super.render();
         const hocProps = {
            onClick: () => this.onClick(),
            poyfills: '寻找失去的未来'
         };
         const newButton = cloneElement(buttonNode, hocProps, "强化 +" + this.state.hocNum + buttonNode.props.children);
         const incompleteButton =  cloneElement(this.props.children, { licnk: '123' });
         console.log(newButton, incompleteButton);
         return (
            <div>
               { newButton }
               { incompleteButton }
            </div>
         )

      }

   }
   HOCWith.displayName = `HOCWith (${ WrappedButton.displayName || WrappedButton.name || 'Component' })`;
   console.dir(HOCWith);
   return HOCWith

}












