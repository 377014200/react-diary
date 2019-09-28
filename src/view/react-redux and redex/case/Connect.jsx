import { connect } from 'react-redux';
import { addTodoAsync } from '@/redux/actions';
import mapStateToProps from '@/assets/javascript/mapStateToProps';

@connect( mapStateToProps( 'todos', 'visibilityFilter' ), { addTodoAsync } )
export class MapDispatchToProps extends React.PureComponent {

   render() {

      console.log( this );
      return (
         <button onClick={ ()=> this.props.addTodoAsync( 123 ) }> 测试 connect 的第二参数</button>
      );

   }

}