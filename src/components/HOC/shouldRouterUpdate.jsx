import {signComponentName} from './tool'

function shouldRouterUpdate(path) {

   return function (MenuComponent) {

      class ShouldRouterUpdate extends MenuComponent {
         shouldComponentUpdate() {

            if (window.location.pathname === path) return false;
            return true

         }
      }

      ShouldRouterUpdate.displayNmae = signComponentName('ShouldRouterUpdate', MenuComponent);
      return ShouldRouterUpdate

   }

}


export default shouldRouterUpdate