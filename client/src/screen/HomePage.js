import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <Link to='./create'>
                <button className = 'indexBtn'>프로젝트 만들기</button>
            </Link>
            <Link to='./jihyo'>
                <button className = 'indexBtn'>프로젝트입장</button>
            </Link>
            <div className='logoText'>내 프로필</div>
            <div className='logoText'>내 프로젝트</div>
        </div>

    );
}

export default HomePage;