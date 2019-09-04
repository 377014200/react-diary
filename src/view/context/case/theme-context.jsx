// 确保传递给 createContext 的默认值数据结构是调用的组件（consumers）所能匹配的！
import React from 'react'

export const ThemeContext = React.createContext({
   theme: 'reb',
   toggleTheme: () => {
   },
});

export const themes = {
   dark: 'red',
   light: 'blue'
}