import React, { useState, useEffect } from 'react';
import {withRouter} from 'react-router-dom'
import BoxDescription from '../component/BoxDescription'
import icon_plan from '../image/yonal_icon_plan.png'


const Guest = ({location, history}) => {
    const [nickname, setNickname] = useState('');
    const onClick = () => {
        if(nickname == ''){
            alert("닉네임을 입력해주세요.");
        }else{
            console.log("넘어간다~~~~~~~")
            history.push({pathname: "/calendar", nickname:nickname});
        }
    }
    const checkForm = () => {
        console.log("CHECKCHECKCHECKCHECKCHECKCHECKCHECKCHECKCHECK")

        alert({nickname});
    }
    const getObject = () => {
        return `{{pathname: '/vote', nickname: ${nickname}}}`;
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