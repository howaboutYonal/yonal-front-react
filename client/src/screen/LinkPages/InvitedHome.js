import React, { useState } from 'react';
import {withRouter} from 'react-router-dom'
import {useMediaQuery} from 'react-responsive'
import BoxDescription from '../../component/BoxDescription'
import yonal_logo from '../../image/yonal_logo.png'
import icon_plan from '../../image/yonal_icon_plan.png'
import icon_people from '../../image/yonal_icon_people.png'
import icon_calendar from '../../image/yonal_icon_calendar.png'
import axios from 'axios';


const InvitedHome = ({location, history}) => {
    const inviteLink = document.location.href;
    console.log("링크:", inviteLink);

    const [projectId, setProjectId] = useState('');
    const [projectTitle, setProjectTitle] = useState('');
    const [memberNum, setMemberNum] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [projectDate, setProjectDate] = useState('');
    const isMobile = useMediaQuery ({
        query : "(max-width : 500px)"
    })
    const grayBackground = isMobile? 'mGrayBackground' : 'grayBackground';
    const btn = isMobile? 'mBtn' : 'btn';
    const logoText = isMobile? 'logoText' : 'pcLogoText';
        
    axios.post('http://localhost:5000/v1/get/link-data', {
        inviteLink: inviteLink
    }).then(function(res){
        setProjectId(res.data.projectId);
        setProjectTitle(res.data.projectName);
        setMemberNum(res.data.number);
        setStartDate(res.data.startDate);
        setEndDate(res.data.endDate);
        setProjectDate(res.data.startDate+' - '+res.data.endDate);
    });


    
    return (
        <div className='App'>
            <div className={logoText}>우리 모두 일정 맞추기</div>
            <img className='Applogo' src={yonal_logo}/>
            <div className={grayBackground}>
                <BoxDescription icon={icon_plan} title="프로젝트 이름" content={projectTitle}/>
                <BoxDescription icon={icon_people} title="현재 참여 인원" content={`${memberNum} 명`}/>
                <BoxDescription icon={icon_calendar} title="매칭 일정" content={projectDate}/>
            </div>

            <div >
                {/* <Link to={{pathname: '/guest', projectId: projectId, projectTitle: projectTitle}}>
                    <button className = 'btn'>입장하기</button>
                </Link> */}

                <button className = {btn} onClick={() => { 
                    history.push({pathname: "/guest", projectId: projectId, projectTitle: projectTitle, startDate:startDate, endDate:endDate});
                }}>입장하기</button>
                
            </div>
        </div>
    );
}

export default withRouter(InvitedHome);