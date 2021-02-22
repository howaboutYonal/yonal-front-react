import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import GoogleButton from '../component/GoogleButton'

const LoginPage = () => {
    return (
        <BrowserRouter>
            <GoogleButton></GoogleButton>
        </BrowserRouter>
    );
}

export default LoginPage;