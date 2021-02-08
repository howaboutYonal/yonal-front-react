import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import InvitedHome from './Jihyo/InvitedHome'
import InvitedUser1 from './Jihyo/InvitedUser1'
import InvitedUser2 from './Jihyo/InvitedUser2'

const JihyoPage = () => {
    return (
        <BrowserRouter>
            <Route path="/jihyo" component={InvitedHome}/>
            <Route path="/1" component={InvitedUser1}/>
            <Route path="/2" component={InvitedUser2}/>
        </BrowserRouter>
    );
}

export default JihyoPage;