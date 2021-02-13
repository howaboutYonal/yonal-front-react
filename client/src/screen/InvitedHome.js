import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import BoxDescription from '../component/BoxDescription'
import icon_plan from '../image/yonal_icon_plan.png'
import icon_people from '../image/yonal_icon_people.png'
import icon_calendar from '../image/yonal_icon_calendar.png'


const InvitedHome = ({location}) => {
    const [projectTitle, setProjectTitle] = useState('덕수빈지효');
    const [memberNum, setMemberNum] = useState('3');
    const [projectDate, setProjectDate] = useState('2021.01.02 - 2021.02.28');
    //TODO - get data from server

    return (
        <div>
            <div className='gray-background'>
 
                <BoxDescription icon={icon_plan} title="프로젝트 이름" content={projectTitle}/>
                <BoxDescription icon={icon_people} title="현재 참여 인원" content={`${memberNum} 명`}/>
                <BoxDescription icon={icon_calendar} title="매칭 일정" content={projectDate}/>
                
            </div>

            <Link to='./guest'>
                <button className = 'btn'>입장하기</button>
            </Link>
        </div>
    );
}

export default InvitedHome;