import React from 'react'

import { ThemeContext } from './theme-context';

function ThemeTogglerButton() {
   // Theme Toggler 按钮不仅仅只获取 theme 值，它也从 context 中获取到一个 toggleTheme 函数
   console.log('in ThemeTogglerButton')

   return (
      <ThemeContext.Consumer>
         {({theme, toggleTheme}) => {
            console.log(theme)
            return (
               <button
                  onClick={toggleTheme}
                  style={{backgroundColor: theme}}>

                  Toggle Theme
               </button>
            )
         }}
      </ThemeContext.Consumer>
   );
}

export default ThemeTogglerButton;