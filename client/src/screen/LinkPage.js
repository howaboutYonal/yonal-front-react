import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Guest from './LinkPages/Guest'
import Vote from './LinkPages/Vote'
import CalendarComponent from './LinkPages/CalendarComponent'
import InvitedHome from './LinkPages/InvitedHome'
import ResultForGuest from './LinkPages/ResultForGuest'

const LinkPage = () => {
    return (
        <div>
        <BrowserRouter>
            <Link to='./invited'>
                <button>초대링크</button>
            </Link>
            <Link to='./totalcal'>
                <button>결과링크</button>
            </Link>
            <Route path="/link" component={this}/>
            <Route path="/invited" component={InvitedHome}/>
            <Route path="/guest/" component={Guest}/>
            <Route path="/vote" component={Vote}/>
            <Route path='/calendar' component={CalendarComponent}/>
            <Route path="/totalcal" component={ResultForGuest}/>
        </BrowserRouter>
        </div>
    );
}

export default LinkPage;