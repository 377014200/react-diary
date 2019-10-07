export default function mapStateToProps ( coat ) {

   return function ( state ) {

      const props = {};

      if ( typeof coat === 'string' ) {

         props[coat] = state[coat];
         return props;

      }
      coat.forEach( function ( key ) {

         if ( typeof key !== 'string' ) {

            console.error( '参数必须是字符串在 maoStateToProps 中' );
            return;

         }
         props[key] = state[key];

      } );
      return coat.length === 0 ? null : props;

   };

}