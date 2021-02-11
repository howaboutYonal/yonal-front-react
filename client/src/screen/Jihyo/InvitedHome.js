import React, { useState } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import yonal_logo from '../yonal_logo.png'
import icon_plan from './yonal_icon_plan.png'
import icon_people from './yonal_icon_people.png'
import icon_calendar from './yonal_icon_calendar.png'



const InvitedHome = () => {
    const [projectTitle, setProjectTitle] = useState('덕수빈지효');
    const [memberNum, setMemberNum] = useState('3');
    const [projectDate, setProjectDate] = useState('2021.01.02 - 2021.02.28');
    //TODO - get data from server

    return (
        <div>
            <div className='logoText'>우리 모두 일정 맞추기</div>
            <img className='Applogo' src={yonal_logo}/>

            <div className='gray-background'>
                <div className='descriptionLine'>
                    <img className='descriptionIcon' src={icon_plan}/>
                    <div className = "descriptionTitle">프로젝트 이름</div>
                    <div className = "descriptionContent">{projectTitle}</div>
                </div>   

                <div className='descriptionLine'>

                <img className='descriptionIcon' src={icon_people}/>
                <div className = "descriptionTitle">현재 참여 인원</div>
                <div className = "descriptionContent">{memberNum} 명</div>
                </div>   
                <div className='descriptionLine'>

                <img className='descriptionIcon' src={icon_calendar}/>
                <div className = "descriptionTitle">매칭 일정</div>
                <div className = "descriptionContent">{projectDate}</div>
                </div>   

            </div>

            <Link to='./1'>
                <button className = 'btn'>입장하기</button>
            </Link>
        </div>
    );
}

export default InvitedHome;