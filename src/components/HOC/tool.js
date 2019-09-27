export function signComponentName( HocName, component ) {

   return function ( target ) {

      target.displayName = `${HocName} (${ component.displayName || component.name || 'Component' })`;
      return target;

   };

}