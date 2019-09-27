import { signComponentName } from './tool';

function assistanceRedux ( Component ) {

   @signComponentName( 'AssistanceRedux', Component )
   class AssistanceRedux extends Component {

      commit( type, ...payload ) {

         const { dispatch } = this.props;

         if ( dispatch instanceof Function ) {

            dispatch( { type, ...payload } );

         }

      }

   }
   return AssistanceRedux;


}


export default assistanceRedux;