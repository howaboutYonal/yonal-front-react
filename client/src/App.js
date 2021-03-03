import './App.css';
import React from 'react';
import { Route,BrowserRouter } from 'react-router-dom';
import LoginHome from './screen/LoginHome';
import InvitedHome from './screen/LinkPages/InvitedHome';
import Guest from './screen/LinkPages/Guest';
import CalendarComponent from './screen/LinkPages/CalendarComponent';
import VoteFinished from './screen/LinkPages/VoteFinished';
import ResultForGuest from './screen/LinkPages/ResultForGuest';
import LoginUserMain from './screen/HomePages/LoginUserMain';
import CreateProject from './screen/HomePages/CreateProject';
import CopyLink from './screen/HomePages/CopyLink';
import ResultForManager from './screen/HomePages/ResultForManager';
import HomePage2 from './screen/HomePage2';

function App() {

  return (
    <BrowserRouter>
      <Route path="/loginpage" component={HomePage2}/>
      <Route path="/loginhome" component={LoginHome}/>
      <Route path="/invite" component={InvitedHome}/>
      <Route path="/guest/" component={Guest}/>
      <Route path='/calendar' component={CalendarComponent}/>
      <Route path='/voteFinished' component={VoteFinished}/>
      <Route path="/share" component={ResultForGuest}/>
      <Route path="/create" component={CreateProject}/>
      <Route path="/copylink" component={CopyLink}/>
      <Route path="/totalcal" component={ResultForManager}/>
    </BrowserRouter>
  );
}

export default App;