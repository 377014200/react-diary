import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@/redux';
import { AppContainer } from 'react-hot-loader';

import App from './view/App.jsx';
const render = function ( Component ) {

   const RootApp = (
      <AppContainer>
         <Provider store={store}>
            <Component />
         </Provider>
      </AppContainer>
   );

   ReactDOM.render( RootApp, document.getElementById( 'root' ) );

};

render( App );

if ( module.hot ) {

   module.hot.accept( './view/App.jsx', () => {

      console.log( 'Accepting the updated in react!' );
      render( App );

   } );

}