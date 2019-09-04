import React from 'react';
import {PrismLight  as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';

import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism';
SyntaxHighlighter.registerLanguage('jsx', jsx);

/*
*     # 一个代码高亮的插件
*        ! 这个是他的官网: https://github.com/conorhastings/react-syntax-highlighter
*        ! 你可以在这查看效果: https://conorhastings.github.io/react-syntax-highlighter/demo/index.html
*
* */
export default class Code extends React.Component {

   render() {

      return (
         <div style={ this.props.style }>
            <SyntaxHighlighter
               showLineNumbers={ this.props.lineNumber === undefined ? true : this.props.lineNumber }
               startingLineNumber={ 1 }
               language={this.props.lang || 'jsx'}
               style={ dark }
               lineNumberStyle={{color: '#ddd', userSelect: 'none', lineHeight: '1.5'} }
               customStyle={ { maxWidth: '900px'} }
               wrapLines={ true }
               lineProps={
                  (num) => {

                  }
               }>
               { this.props.children.trim() }
            </SyntaxHighlighter>
         </div>
      )

   }

}
