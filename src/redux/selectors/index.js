import visibilityFilter from './visibilityFilter';
import todos from './todos';
import { selectorsTypes as ST } from '@/redux/state';

function reducer( actionsManifests, placeholder ) {

   return function ( state = placeholder, action ) {

      const commit = actionsManifests[action.type ];

      return commit instanceof Function ? commit( { state, action } ) : state;

   };

}
export default {
   [ST.visibilityFilter]: reducer( visibilityFilter, 'SHOW_ALL' ),
   [ST.todos]: reducer( todos, [] )
};