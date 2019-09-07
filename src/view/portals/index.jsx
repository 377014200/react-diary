import React from 'react';

import Subsidiary from './Subsidiary'
import Fieldset from 'components/Fieldset'
import Code from 'components/Code'

var card = `
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
export default class Modal extends Component {
   constructor( props ){
      super( props )
      this.el = document.createElement( 'div' );
      this.modalRoot = document.getElementById( 'modal-root' )
   }
   componentDidMount(){
      const { el, modalRoot } = this;
      modalRoot.appendChild( el )
   }
   componentWillUnmount(){
      const { el, modalRoot } = this;
      modalRoot.removeChild( el )
   }
   render(){
      return ReactDOM.createPortal( this.props.children, this.el )
   }
}`;

export default function () {

   return (
      <Fieldset title={ (<h2>ReactDOM.portal <i> in portal</i></h2>)}>
         <Subsidiary />
         <Fieldset title="概述" style={ { textAlign: 'left' } }>
            <p>Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。</p>
            <p>语法: ReactDOM.createPortal(child, container)</p>
            <p>第一个参数（child）是任何可渲染的 React 子元素，例如一个元素，字符串或 fragment。</p>
            <p>第二个参数（container）是一个 DOM 元素。</p>
            <p>虽然看起来脱离了根节点但是 他的父组件还是能触发冒泡事件</p>
            <p>这个很适合做弹窗用</p>
         </Fieldset>
         <Fieldset title="一个案例" style={ { textAlign: 'left' } }>
            <Code>
               { card }
            </Code>
         </Fieldset>
      </Fieldset>
   )

}