import React, { useState, useEffect } from 'react';
import {withRouter} from 'react-router-dom'
import BoxDescription from '../../component/BoxDescription'
import icon_plan from '../../image/yonal_icon_plan.png'
import axios from 'axios';

function saveData(projectId, nickname) {
    axios.post('http://localhost:5000/v1/link/new-user', {
        project_id:projectId,
        user_nickname:nickname
    });

}

const Guest = ({location, history}) => {
    const [nickname, setNickname] = useState('');
    const projectTitle = location.projectTitle;
    const onClick = () => {
        if(nickname == ''){
            alert("닉네임을 입력해주세요.");
        }else{
            saveData(location.projectId, nickname);
            history.push({
                pathname: "/calendar", 
                nickname:nickname, 
                projectId: location.projectId, 
                projectTitle:projectTitle, 
                startDate:location.startDate, 
                endDate:location.endDate
            });
        }
    }


    return (
        <div>
            <BoxDescription icon={icon_plan} title={location.projectTitle}/>

            <h3 className='nicknameGuide'>별명을 입력해주세요.</h3>
            <form>
            <label>
                <input className= "inputField" type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder = "별명" />
            </label>
            <input type="button" value="투표하러 가기" className="btn" onClick={onClick}/>
            </form>
        </div>
    );
}

export default withRouter(Guest);