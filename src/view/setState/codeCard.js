export const codeCard = `
// Wrong ( 错误的 )
this.state.comment = 'Hello';

// Correct ( 正确的 )
this.setState( {comment: 'Hello'} );
`;
export const codeCard2 = `
this.setState(
   ( state, props ) => {
      console.log( this.state.counter ); // => 10
      console.log( state.counter ); // => 10
      return {
         counter: state.counter + 10
      }
   }
);
`;
export const codeCard3 = `
constructor( props ) {
   super( props );
   this.state = {
      posts: [],
      comments: []
   };
}`;
export const codeCard4 = `
componentDidMount() {
   fetchPosts().then( response => {
      this.setState( {
        posts: response.posts
      } );
   } );
      
   fetchComments().then( response => {
      this.setState({
        comments: response.comments
      } );
   } );
}`;

export const codeCard5 = `
import React, { Component } from 'react';
export default class Case extends Component {
   constructor( props ){
      super( props );
      this.state = {
         counter: 0
      }
   }
   render (){
      return(
         <h2> { this.state.counter } </h2>
      )
   }
   componentDidMount (){
      // 你可以猜想一下 在页面中 this.state.counter 的最终结果是多少;
      // 如果你认为是 20 的话, 那真实的结果不是你想要的结果；
      // 没错 this.state.counter = 10
      this.setState( {
         counter: 10,
      } );
      console.log( this.state.counter ) // => 0
      this.setState( {
         counter: this.state.counter + 10,
      } );
      console.log( this.state.counter ) // => 0
   } 
}`;

export const codeCard6 = `
this.setState( { counter: 10, }, ()=> {
      console.log( this.state.counter ); // => 10
      this.setState( { counter: this.state.counter + 10 } )
   }
)`;

export const codeCard7 = `
async componentDidMount() {
   await this.setState( { counter: 10 } );
   console.log( this.state.counter ); // =>10
   this.setState( { counter: this.state.counter + 10 } )
}`;