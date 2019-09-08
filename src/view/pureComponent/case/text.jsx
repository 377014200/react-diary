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
      arr: [1,2,3],
      index: 0,
   };
   render(){
      // 如果你使用了错误的方法, 调用 this.forceUpdate() 方法来触发跟新但是不推荐这样去做;
      const increasing = () =>{
         // this.setState( {index:  (++this.state.index)  % this.state.arr.length  } ) //这是错误的
         // this.forceUpdate()
         this.setState( {index: ( this.state.index + 1 ) % this.state.arr.length } )// 这是正确的(推荐)
      };
      const addArr = () =>{
         // this.state.arr.push( this.state.arr.length + 1); //这是错误的
         // this.setState( { arr: this.state.arr  } ) //这是错误的
         // this.forceUpdate()
         this.setState( { arr: this.state.arr.concat( this.state.arr.length + 1 ) } )// 这是正确的(推荐)
      };
      return (
         <div>
            <button onClick={ increasing }>递增 index</button>
            <button onClick={ addArr }>arr 添加数据</button>
            <Children arr={ this.state.arr } index={ this.state.index }/>
         </div>
      )
   }
}



