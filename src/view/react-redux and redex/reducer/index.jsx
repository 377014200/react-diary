import { connect } from 'react-redux';
import Fieldset from '@/components/Fieldset';
import assistanceRedux from '@/components/HOC/assistanceRedux';
import { addTodo, toggleTodo } from '@/redux/actions';
import mapStateToProps from '@/assets/javascript/mapStateToProps';


const H1 = connect()( function ( props ) {

   console.log( props );
   return <h1> 会不会跟新 </h1>;

} );

@connect( mapStateToProps( 'todos' ), { addTodo, toggleTodo } )
export default class Reducer extends React.Component {

   render() {

      const {
         todos,
         addTodo: onAddTodo,
         toggleTodo: onToggleTodo
      } = this.props;

      console.log( this );
      return (
         <div>
            <Fieldset title={<h2>redux</h2>}>
               <a href='http://cn.redux.js.org/' target='_blank'> 寻找失去的官网</a>
               <a href='https://www.cntofu.com/book/4/index.html' target='_blank'> 中文文档 </a>
               <Fieldset title='测试区'>
                  <button onClick={ ()=> onAddTodo( 123 ) }>添加</button>

                  {
                     todos.map( ( todo, index ) =>
                        <React.Fragment key={ index }>
                           <input
                              type='checkbox'
                              onChange={() => onToggleTodo( index )}
                              defaultChecked={ todo.completed }/>
                           <label >{ todo.text } { '_' + todo.completed }</label>
                        </React.Fragment>
                     )
                  }
                  <H1 />
               </Fieldset>
            </Fieldset>
         </div>
      );

   }

}

function fn() {

   console.log( this.length );

}

var o = {
   length: 5,
   payload: function ( fn ) {

      arguments[0]();

   }
};

o.payload( fn, 1 );