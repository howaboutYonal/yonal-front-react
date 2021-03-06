import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {useMediaQuery} from 'react-responsive'
import BoxDescription from '../../component/BoxDescription'
import yonal_logo from '../../image/yonal_logo.png'
import icon_plan from '../../image/yonal_icon_plan.png'


import '../calendar.css';
import axios from 'axios';

/*  사용자가 참여 가능한 날짜를 선택할 수 있는 달력 컴포넌트
    사용자가 날짜를 선택하면 해당 날짜가 days에 date형식으로 저장된다.
    이어서 버튼을 누르면, days에 저장된 데이터가 db로 업로드된다. */

// nickname은 props를 통해 전달되어야 한다.
// projectId는 링크를 통해 유추한다.

const CalendarComponent = ({location, history}) => {
    const projectId = location.projectId;
    const nickname = location.nickname;
    const projectTitle = location.projectTitle;
    const startDate = location.startDate;
    const endDate = location.endDate;
    const userId = location.userId;
    const isMobile = useMediaQuery ({
        query : "(max-width : 500px)"
    })
    const btn = isMobile? 'mBtn' : 'btn';
    const logoText = isMobile? 'logoText' : 'pcLogoText';

    const [days, setDays] = useState([]); 

    function check_selected_days(nextValue){
        var flag = -1;
        if(nextValue.valueOf() === startDate.valueOf()) return;
        for(var day in days){
            if(days[day].valueOf() === nextValue.valueOf()){
                flag = day;
                break;
            }
        }
        if(flag===-1){
            setDays(days.concat(nextValue));
        }else{
            var fore = days.splice(0, flag);
            var back = days.splice(1, days.length);
            var tmp = fore.concat(back);
            setDays(tmp);
        }
    }
    
    const fetchApi = async() =>{
        await axios.post('http://localhost:5000/v1/save/project-userId-date',{
            projectId : projectId,
            userId :userId,
            date:days
        });
        history.push({pathname: "/voteFinished", nickname:nickname, projectTitle:projectTitle});
    }

    function tileClassName(params){
        if(params.view === 'month' && !(days.length ===0))
            if(days.some(x => x.valueOf() === params.date.valueOf()))
                return 'selected_day'
    }
    function parse(str) {
        var y = str.substr(0,4);
        var m = str.substr(4,2);
        var d = str.substr(6,2); 
        return  new Date(y,m-1,d);
    };
    
    return (
        <div>
            <BoxDescription icon={icon_plan} title={location.projectTitle}/>

            <div className={logoText}>우리 모두 일정 맞추기</div>
            <img className='Applogo' src={yonal_logo}/>

            <h3 className='calendarGuide'>가능한 날짜를 선택해 주세요.</h3>
            {parse(startDate)?            
            <Calendar
                className="calendar"
                onChange={check_selected_days} 
                minDate={parse(startDate.replaceAll('-',''))}
                maxDate={parse(endDate.replaceAll('-',''))}
                tileClassName={tileClassName}
            />:'loading'
            }

            <button className = {btn} onClick={fetchApi}>제출하기</button>
        </div>
    );
}

export default CalendarComponent;