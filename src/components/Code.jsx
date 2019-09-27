import React, { Children } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

SyntaxHighlighter.registerLanguage( 'jsx', jsx );

/*
*     # 一个代码高亮的插件
*        ! 这个是他的官网: https://github.com/conorhastings/react-syntax-highlighter
*        ! 你可以在这查看效果: https://conorhastings.github.io/react-syntax-highlighter/demo/index.html
*
* */
import './code-style.css';

export default function Code( props ) {

   const { children } = props;
   const codeCard = Children.toArray( children ).join( '' ).trim();

   return (
      <div style={ props.style } className='code'>
         <SyntaxHighlighter
            showLineNumbers={ props.lineNumber === undefined ? true : props.lineNumber }
            startingLineNumber={ 1 }
            language={ props.lang || 'jsx' }
            style={ dark}
            lineNumberStyle={ { color: '#ddd', userSelect: 'none', } }
            customStyle={ { maxWidth: '800px' } }
            wrapLines={ true }
            lineProps={
               ( num ) => {

               }
            }>
            { codeCard }
         </SyntaxHighlighter>
      </div>
   );

}
