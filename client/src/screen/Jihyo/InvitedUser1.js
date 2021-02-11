import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import yonal_logo from '../yonal_logo.png'


const InvitedUser1 = () => {
    const [nickname, setNickname] = useState('');
    const onSubmit = () => {
        alert({nickname});
    }
    const getObject = () => {
        return `{{pathname: '/2', nickname: ${nickname}}}`;
    } 
    console.log(nickname);

    return (
        <div>
            <img className='Applogo' src={yonal_logo}/>     
            <h3 className='nicknameGuide'>별명을 입력해주세요.</h3>
                <label>
                    <input className= "inputField" type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder = "별명" />
                </label>
                <Link to={{pathname: '/2', nickname: nickname}}>
                    <input type="submit" value="확인" className="btn" onSubmit={onSubmit}/>
                </Link>
        </div>
    );
}

export default InvitedUser1;