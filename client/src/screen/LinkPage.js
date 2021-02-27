import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Guest from './LinkPages/Guest'
import Vote from './LinkPages/Vote'
import CalendarComponent from './LinkPages/CalendarComponent'
import InvitedHome from './LinkPages/InvitedHome'

const LinkPage = () => {
    return (
        <div>
        <BrowserRouter>
            <Route path="/link" component={InvitedHome}/>
            <Route path="/guest/" component={Guest}/>
            <Route path="/vote" component={Vote}/>
            <Route path='/calendar' component={CalendarComponent}/>
        </BrowserRouter>
        </div>
    );
}

export default LinkPage;