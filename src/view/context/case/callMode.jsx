import React from 'react'
import Call from "@/assets/javascript/call";
import Fieldset from "@/components/Fieldset";

const call = new Call();

class Children_d extends React.Component {
   state = {
      colors: ['red', 'blue', 'green', 'pink'],
      index: 0
   };

   render() {
      console.log('this is children4')
      const {index, colors} = this.state;

      return (
         <Fieldset>
            <p style={{color: colors[index]}}> 这是第一代 children</p>
         </Fieldset>
      )

   }

   componentDidMount() {
      call.on('click', ( cd ) =>{
            const i = cd(this.state.colors.length);
            console.log(i)
            this.setState( { index: i } )
         }
      );
   }

}


function Children_c() {
   console.log('this is Children_c')
   return (
      <Fieldset>
         <p> 这是第仨代 children</p>
         <Children_d/>
      </Fieldset>
   )

}
const Children_b = React.memo(
   function () {
      console.log('this is Children_b')
      return (
         <Fieldset>
            <p> 这是第二代 children</p>

            <Children_c/>

         </Fieldset>
      )

   }
);



class Children_a extends React.PureComponent{

   state ={
     text: '寻找失去的未来'
   };
   render(){
      console.log('this is Children_a');
      const handleClick = ()=>{
         this.setState( {text: '手起刀落人抬走'} )
      };

      return (
         <Fieldset>
            <p > 这是第一代 children</p>
            <p>{ this.props.n }</p>
            <button onClick={ handleClick }>{ this.state.text }</button>
            <Children_b n={ this.props.n}/>
         </Fieldset>
      )
   }

}

export default class App extends React.PureComponent{

   state = {
      n: 0,
      length: 0
   };

   render() {

      const handleClick = (e) => {
         this.setState( { n:  1 + this.state.n  }, () => call.emit('click', (length)=> this.state.n%length ) )
      };

      return (
         <Fieldset>
            <button onClick={handleClick}>
               点鸡 children_d 的字体颜色会变
            </button>
            <p> { this.state.n }</p>
            <Children_a n={ this.state.n }/>
         </Fieldset>
      )

   }

}