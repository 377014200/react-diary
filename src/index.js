import ReactDOM from 'react-dom';
import App from './view/App.jsx';
import { Provider } from 'react-redux';
import store from '@/redux';

const app = (
   <Provider store={store}>
      <App />
   </Provider>
);

ReactDOM.render( app, document.getElementById( 'root' ) );

