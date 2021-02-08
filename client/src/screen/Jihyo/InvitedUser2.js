import React, { Component } from 'react';
import {BtnCalendar, BtnNoCalendar} from "../../component/BtnCalendar";


function getNickname(location){
    return location.state;
}

const InvitedUser2 = ({location}) => {
    return (
        <div>
            <p>{"User: "+ getNickname(location)}</p>
            <h3> 구글 캘린더 연동하기 </h3>
            <BtnCalendar/>
            <BtnNoCalendar/>
        </div>
    );
}

export default InvitedUser2;