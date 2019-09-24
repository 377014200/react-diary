import { createStore } from 'redux'


function reducer( state = 0, { type } ) {

   console.log( type );

   return {

      LOGIN: '123'

   }[ type ]

}

const state = createStore( reducer );

state.dispatch({
   type: 'LOGIN'
});

console.log( state.getState() );




