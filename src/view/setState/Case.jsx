import React, {Component} from 'react';

export default class Case extends Component {

   constructor(props) {

      super(props);
      this.state = {
         counter: 0
      }

   }

   render() {

      return (
         <h2> {this.state.counter} </h2>
      )

   }

   async componentDidMount() {

      // this.setState({
      //    counter: 10,
      // });
      // // this.setState({
      // //    counter: this.state.counter + 10,
      // // });
      // this.setState(
      //    (state, props) => {
      //
      //       console.log(this.state.counter); // => 10
      //       console.log(state.counter); // => 10
      //       return {
      //          counter: state.counter +10
      //       }
      //
      //    }
      // );

      // // 其实 this.setState() 方法可以接受第二参数, 他表示数据更新后执行的一个回调;
      //
      // this.setState({ counter: 10, }, ()=> {
      //    console.log(this.state.counter); // => 10
      //    this.setState({counter: this.state.counter + 10})
      //    }
      // )

      // 没错我们可以用 async/await 特性把 this.setState() 方法转换成同步
      await this.setState( { counter: 10 } );
      console.log( this.state.counter ); // =>10
      this.setState( { counter: this.state.counter + 10 } )
   }


}






