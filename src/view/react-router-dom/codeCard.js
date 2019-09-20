export const codeCard = `
<BrowserRouter basename="/calendar"/>
<Link to="/today"/> // renders <a href="/calendar/today">
`;



export const codeCard1 = `
<BrowserRouter 
   basename={'/home'} 
   getUserConfirmation={setConfirmation}
>
   <div>
    <Prompt message={'Are you sure to leave'}/>
   <Link to={'/test'}>ceshi</Link>
   <Route path={'/test'} component={Test}/>
   </div>
 </BrowserRouter>`;

export const codeCard2 = `
// 仅当事件id为奇数时才考虑活动的事件
const oddEvent = (match, location) => {
  if (!match) {
    return false
  }
  const eventID = parseInt(match.params.eventID)
  return !isNaN(eventID) && eventID % 2 === 1
}

<NavLink
  to="/events/123"
  isActive={oddEvent}
>Event 123</NavLink>`;

