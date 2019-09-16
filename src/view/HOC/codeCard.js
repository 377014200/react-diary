export const codeCard = `
import React, {Component} from 'react';

const MyContainer = (WraooedComponent) => (

   class extends Component {
      render() {
         return <WrappedComponent {...this.props} />
      }
   }
);`;

export const codeCard1 = `

class MyComponent extends Component {
   //...

}

export default MyContainer(MyComponent);`;

export const codeCard2 = `
const MyContainer = (WrappedComponent) => {
   class extends WrappedComponent {
      render() {
         return super.render();
      }
   }
}`;
export const codeCard3 = `
import React from 'react'

function HOCFactoryFactory(...params) {
   return function HOCFactory(WrappedComponent) {
      return class HOC extends Component {
         render() {
            return <WrappedComponent {...this.props} />
         }
      }
   }
}

// 当你使用的时候，可以这么写：

HOCFactoryFactory(params)(WrappedComponent)

// or

@HOCFactoryFactory(params)
class WrappedComponent extends React.Component{}

`;

export const codeCard4 = `
function withSubscription(WrappedComponent) {
   class WithSubscription extends React.Component {
      /* ... */
   }

   WithSubscription.displayName = \`WithSubscription(\${getDisplayName(WrappedComponent)})\`;
   return WithSubscription;
}

function getDisplayName(WrappedComponent) {
   return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}`;




