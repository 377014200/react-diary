/*
*     # Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。
*
*     ## ReactDOM.createPortal(child, container)
*
*          第一个参数（child）是任何可渲染的 React 子元素，例如一个元素，字符串或 fragment。
*          第二个参数（container）是一个 DOM 元素。
*
* */

// 这是一个弹窗的案例, 使用 ReactDom.portal 是英明的选择

import React, { Component } from 'react'
import ReactDOM from 'react-dom'


export default class Modal extends Component{
   constructor( props ){

      super( props )
      this.el = document.createElement('div');
      this.modalRoot = document.getElementById('modal-root')

   }

   componentDidMount(){

      const { el, modalRoot } = this;
      modalRoot.appendChild(el)

   }

   componentWillUnmount(){

      const { el, modalRoot } = this;
      modalRoot.removeChild(el)

   }

   render(){
      return ReactDOM.createPortal( this.props.children, this.el )
   }

}






