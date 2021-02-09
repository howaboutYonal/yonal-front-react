import React, { useState } from 'react';
import {Link} from 'react-router-dom'


const InvitedUser1 = () => {
    const [nickname, setNickname] = useState('wlgy');
    const onSubmit = () => {
        alert({nickname});
    }
    const getObject = () => {
        return `{{pathname: '/2', nickname: ${nickname}}}`;
    } 
    console.log(nickname);

    return (
        <div>
            <form>
                <label>
                    별명:
                    <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder = "별명" />
                </label>

                <Link to={{pathname: '/2', nickname: nickname}}>
                    <input type="submit" value="확인" className="btn" onSubmit={onSubmit}/>
                </Link>
            </form>
        </div>
    );
}

export default InvitedUser1;