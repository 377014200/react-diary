export const codeCard = `
// 人家写的比你的高级多了,何必做无用的操作, 十倍等于一毫秒这有意义吗;
shouldComponentUpdate( nextProps, nextProps ){
   if (nextProps.index !== this.props.index) {
      return true
   }
   return false
}`;

export const codeCard1 = `
import React, { PureComponent } from 'react'

export class Children extends PureComponent{
   render(){
      return (
         <div>
            <h1>{ this.props.arr[ this.props.index ] }</h1>
         </div>
      )
   }
}

export class Parent extends PureComponent{
   state = {
      arr: [ 1, 2, 3 ],
      index: 0,
   };
   render(){
      // 如果你使用了错误的方法, 调用 this.forceUpdate() 方法来触发更新, 
      // 避免使用错误的方法这是最理智的选择;
      const increasing = () =>{
          //这是错误的
         // this.setState( {index:  (++this.state.index)  % this.state.arr.length  } )
         // this.forceUpdate()
         // 这是正确的
         this.setState( {index: ( this.state.index + 1 ) % this.state.arr.length } )
      };
      const addArr = () =>{
         //这是错误的
         // this.state.arr.push( this.state.arr.length + 1); 
         // this.setState( { arr: this.state.arr  } ) 
         // this.forceUpdate()
         // 这是正确的
         this.setState( { arr: this.state.arr.concat( this.state.arr.length + 1 ) } )
      };
      return (
         <div>
            <button onClick={ increasing }>递增 index</button>
            <button onClick={ addArr }>arr 添加数据</button>
            <Children arr={ this.state.arr } index={ this.state.index }/>
         </div>
      )
   }
}`;

export const codeCard2 = `
   // Children 真的是无状态的组件应避免传递 props 这会触发 Children 组件的更新
   <Children arr={ this.state.arr } index={ this.state.index }/> // 错误的
   <Children  /> // 正确的
`;