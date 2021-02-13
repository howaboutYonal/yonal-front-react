import React from 'react';
import {Link} from 'react-router-dom'
import {BtnCalendar, BtnNoCalendar} from "../component/BtnCalendar";

const Vote = ({location}) => {
    console.log(location.nickname);
    return (
        <div>
            <p>{"User: "+ location.nickname}</p>
            <h3> 구글 캘린더 연동하기 </h3>
            <Link to='./calendar'>
              <button className = 'indexBtn'>투표하기</button>
            </Link>
            <BtnCalendar/>
            <BtnNoCalendar/>
        </div>
    );
}

export default Vote;