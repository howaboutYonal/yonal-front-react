import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <div className='logoText'>내 프로필</div>
            <div className='logoText'>내 프로젝트</div>

            <Link to='./create'>
                <button className = 'indexBtn'>프로젝트 만들기</button>
            </Link>

        </div>

    );
}

export default HomePage;