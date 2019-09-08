export const codeCard = `
var SetIntervalMixin = {
   componentWillMount: function () {
      this.intervals = [];
   },
   setInterval: function () {
      this.intervals.push(setInterval.apply(null, arguments));
   },
   componentWillUnmount: function () {
      this.intervals.forEach(clearInterval);
   }
};

// 必须使用非 es6 的方式
var createReactClass = require('create-react-class');

var TickTock = createReactClass( {
   mixins: [SetIntervalMixin], // 使用 mixin
   getInitialState: function () { // 在这里初始化 state
      return {seconds: 0};
   },
   componentDidMount: function () {
      this.setInterval(this.tick, 1000); // 调用 mixin 上的方法
   },
   tick: function () {
      this.setState( {seconds: this.state.seconds + 1} );
   },
   render: function () {
      return (
         <p>
            React has been running for {this.state.seconds} seconds.
         </p>
      );
   }
} );

ReactDOM.render(
   <TickTock/>,
   document.getElementById('example')
);`;
