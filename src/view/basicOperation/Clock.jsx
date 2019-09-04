import React, {Component} from 'react'


export default class Clock extends Component {
   constructor(props) {

      super(props)
      this.state = {
         data: new Date()
      }

   }

   render() {

      return (
         <fieldset disabled>
            <legend> 神奇的电子表 in Clock.jsx </legend>
            <h2>It is { this.state.data.toLocaleTimeString() }</h2>
         </fieldset>
      )
   }

   componentDidMount() {

      this.timerID = setInterval(
         () => this.tick(),
         1000
      );

   }

   componentWillUnmount() {

      clearInterval(this.timerID);

   }

   tick() {

      this.setState({
         data: new Date()
      })

   }

}
