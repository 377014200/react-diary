import test from './test';
import { selectorsTypes as ST } from '@/redux/state';

function reducer( actionsManifests, placeholder ) {

   return function ( state = placeholder, action ) {

      const commit = actionsManifests[action.type ];

      return commit ? commit( { state, action } ) : state;

   };

}
export default {
   [ST.visibilityFilter]: reducer( test, 'SHOW_ALL' ),
   [ST.todos]: reducer( test, [] )
};