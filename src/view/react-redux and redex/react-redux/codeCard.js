export const codeCard = `
mport { addTodo } from './actionCreators'
// ... Component
export default connect(
   null,
   { addTodo }
)(Component)`;

export const codeCard1 = `
connect(
   mapStateToProps?: Function<state, ownProps>, 
   mapDispatchToProps?: Function<dispatch> | Object
)(Component)
`;
export const codeCard2 = `
import * as actionCreators from './actionCreators'
// ... Component
const mapStateToProps = state => state.partOfState
export default connect(
   mapStateToProps,
   actionCreators
)(Component)`;

