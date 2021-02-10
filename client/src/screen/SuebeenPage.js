import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import CreateProject from './Suebeen/CreateProject';


const SuebeenPage = () => {
    return (
        <BrowserRouter>
            <Route path="/suebeen" component={CreateProject}/>
        </BrowserRouter>
    );
}

export default SuebeenPage;