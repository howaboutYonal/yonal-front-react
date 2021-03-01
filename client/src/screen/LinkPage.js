import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Guest from './LinkPages/Guest'
import CalendarComponent from './LinkPages/CalendarComponent'
import InvitedHome from './LinkPages/InvitedHome'
import VoteFinished from './LinkPages/VoteFinished';

const LinkPage = () => {
    return (
        <div>
        <BrowserRouter>
            <Route path="/link" component={InvitedHome}/>
            <Route path="/guest/" component={Guest}/>
            <Route path='/calendar' component={CalendarComponent}/>
            <Route path='/voteFinished' component={VoteFinished}/>
        </BrowserRouter>
        </div>
    );
}

export default LinkPage;