import React, {Component} from 'react';
import Modal from './Portals'


export default class Subsidiary extends Component {

   constructor(props) {
      super(props);
      this.state = {clicks: 0};
   }

   render() {

      const on = this.on();

      return (
         <div onClick={ on.handleClick } style={{ border: '1px solid red' }}>
            <p>点击数: { this.state.clicks }</p>
            <p>
               打开浏览器开发工具
               观察那个按钮(他应该在下面)
               不是 div#modal-root 的子元素吗
               使用 onClick 处理程序
            </p>
            <Modal>

               <div className="modal">
                  <button>Click</button>
               </div>

            </Modal>
         </div>
      );
   }

   on() {

      const vm = this;

      return {
         handleClick() {

            //当点击Child中的按钮时，将会触发，
            //更新父类的状态，即使是按钮
            //不是DOM中的直接后代。
            vm.setState(
               prevState => ({
                  clicks: prevState.clicks + 1
               })
            );
         }

      }
   }
}


