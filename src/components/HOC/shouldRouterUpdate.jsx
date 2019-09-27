import { signComponentName } from './tool';

function shouldRouterUpdate( path ) {

   return function ( MenuComponent ) {

      @signComponentName( 'ShouldRouterUpdate', MenuComponent )
      class ShouldRouterUpdate extends MenuComponent {

         shouldComponentUpdate() {

            if ( window.location.pathname === path ) {

               return false;

            }
            return true;

         }

      }
      return ShouldRouterUpdate;

   };

}


export default shouldRouterUpdate;