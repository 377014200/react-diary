import { connect } from 'react-redux';
import { addTodo } from '@/redux/actions/index';
import mapStateToProps from '@/assets/javascript/mapStateToProps';

@connect( mapStateToProps( 'todos', 'visibilityFilter' ), { addTodo } )
export class MapDispatchToProps extends React.PureComponent {

   render() {

      console.log( this );
      return (
         <button onClick={ ()=> this.props.addTodo( 123 ) }> 测试 connect 的第二参数</button>
      );

   }

}