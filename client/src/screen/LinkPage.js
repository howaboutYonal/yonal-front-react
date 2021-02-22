import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Guest from './LinkPages/Guest'
import Vote from './LinkPages/Vote'
import CalendarComponent from './LinkPages/CalendarComponent'
import InvitedHome from './LinkPages/InvitedHome'

const LinkPage = () => {
    return (
        <BrowserRouter>
            <Route path="/invited" component={InvitedHome}/>
            <Route path="/guest/" component={Guest}/>
            <Route path="/vote" component={Vote}/>
            <Route path='/calendar' component={CalendarComponent}/>
        </BrowserRouter>
    );
}

export default LinkPage;