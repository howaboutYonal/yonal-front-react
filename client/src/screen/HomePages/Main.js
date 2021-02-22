import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const Main = ({location}) => {
    const myName = location.name;
    const myEmail = location.email;
    const myImg = location.image;
    const [myProjects, ] = useState('1');

    return (
        <div>
            <div>
                {myName}
                <br></br>
                <img className='profile' src={myImg}/>
            </div>
            <div className='logoText'>내 프로젝트</div>
            <Link to='./totalcal'>
                <button className = 'indexBtn' projectId={myProjects}>아직미완</button>
            </Link>
            <Link to='./create'>
                <button className = 'indexBtn'>프로젝트 만들기</button>
            </Link>
        </div>

    );
}

export default Main;