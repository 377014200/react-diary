import { connect } from 'react-redux';
import Fieldset from '@/components/Fieldset';
import assistanceRedux from '@/components/HOC/assistanceRedux';
import { ADD_TODO, TOGGLE_TODO } from '@/redux/actionsTypes';


const H1=  connect()(function ( props ) {

   console.log( props );
   return <h1> 会不会跟新 </h1>

})



@connect( function ( state, ownProps) {

   console.log( ownProps );

   return state

} )
@assistanceRedux
export default class Reducer extends React.Component {

   render() {

      const { todos } = this.props;

      console.log( this );

      return (
         <div>
            <Fieldset title={<h2>redux</h2>}>
               <a href='http://cn.redux.js.org/' target='_blank'> 寻找失去的官网</a>
               <Fieldset title='测试区'>
                  <button onClick={ ()=> this.commit( 'ADD_TODO', { text: 123 } ) }>添加</button>

                  {
                     todos.map( ( todo, index ) =>
                        <React.Fragment key={ index }>
                           <input
                              type='checkbox'
                              onChange={() => this.commit( 'TOGGLE_TODO', { index } )}
                              defaultChecked={ todo.completed }/>
                           <label >{ todo.text } { '_' +  todo.completed }</label>
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
   console.log( this.length )
}

var o  = {
   length: 5,
   payload: function (fn) {
      arguments[0]()
   }
};
o.payload(fn, 1)