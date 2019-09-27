export default function mapStateToProps ( ...arg ) {

   return function ( state ) {

      const props = {};

      arg.forEach( function ( key ) {

         if ( typeof key !== 'string' ) {

            console.log( '参数必须是字符串在 maoStateToProps 中' );
            return;

         }
         props[key] = state[key];

      } );
      return arg.length === 0 ? null : props;

   };

}