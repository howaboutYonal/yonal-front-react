import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import yonal_logo from '../yonal_logo.png'


const InvitedHome = () => {
    return (
        <div>
            <div className='logoText'>우리 모두 일정 맞추기</div>
            <img className='Applogo' src={yonal_logo}/>

            <div className='gray-background'>
                <div>우리 모두 일정 맞추기</div>
                <div>우리 모두 일정 맞추기</div>
                <div>우리 모두 일정 맞추기</div>
            </div>

            <Link to='./1'>
                <button className = 'btn'>입장하기</button>
            </Link>
        </div>
    );
}

export default InvitedHome;