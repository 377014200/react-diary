export const codeCard = `
import React, { Component, Children } from 'react';
export default class IgnoreFirstChild extends React.Component {
   render() {
      const children = this.props.children;
      return (
         <div>
            {
               React.Children.map( children, ( child, i ) => {
                  // Ignore the first child
                  if ( i < 1 ) return;
                  return child
               } )
            }
         </div>
      )
   }
}`;

export const codeCard1 = `
<IgnoreFirstChild>
   <h1>First</h1>
   <h1>Second</h1> // <- 只有这个被渲染
   { ()=> <h2> test React.Children.map </h2> } {/*忽略函数节点, 包含注释节点*/}
</IgnoreFirstChild>`;

export const codeCard2 = `
class ChildrenCounter extends React.Component {
   render() {
      return <p>React.Children.count(this.props.children)</p>
   }
}

<ChildrenCounter>
   <h2> test React.Children.count </h2>
   <h2> test React.Children.count </h2>
   <h2> test React.Children.count </h2>
   { ()=> <h2> test React.Children.count </h2> } {/*忽略函数节点, 包含注释节点*/}
</ChildrenCounter>

`;

export const codeCard3 =`
class Executioner extends React.Component {
   render() {
      return React.Children.only(this.props.children)
   }
}`;
