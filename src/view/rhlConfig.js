import { setConfig } from 'react-hot-loader';
// react-hot-loader 配置
// 参考: https://github.com/gaearon/react-hot-loader/blob/master/index.d.ts#L62-L133
setConfig( {
   logLevel: 'error',
   // 显示“hot-loader / react-dom”警告
   showReactDomPatchNotification: false,
} );