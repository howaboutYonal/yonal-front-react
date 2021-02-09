import React, { Component } from 'react';
import {BtnCalendar, BtnNoCalendar} from "../../component/BtnCalendar";



const InvitedUser2 = ({location}) => {
    console.log(location.nickname);
    return (
        <div>
            <p>{"User: "+ location.nickname}</p>
            <h3> 구글 캘린더 연동하기 </h3>
            <BtnCalendar/>
            <BtnNoCalendar/>
        </div>
    );
}

export default InvitedUser2;