
import React, { Component, memo } from 'react'
import {ThemeContext, themes} from './theme-context';
import ThemeTogglerButton from './theme-toggler-button';


const Content = memo(function Content() {
   console.log('in Content')

   return (
      <div className='content'>
         <ThemeTogglerButton />
      </div>
   );
}) ;

export default class App extends Component {
   constructor(props) {
      super(props);

      this.toggleTheme = () => {
         this.setState(state => ({
            theme:
               state.theme === themes.dark
                  ? themes.light
                  : themes.dark,
         }));
      };

      // State 也包含了更新函数，因此它会被传递进 context provider。
      this.state = {
         theme: themes.light,
         toggleTheme: this.toggleTheme,
      };
   }

   render() {
      // 整个 state 都被传递进 provider
      console.log('in app')
      return (
         <ThemeContext.Provider value={this.state} aa={'3333'}>
            <Content />
         </ThemeContext.Provider>
      );
   }
}



