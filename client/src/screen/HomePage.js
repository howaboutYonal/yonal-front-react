import React from 'react';
import {Link} from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <Link to='./create'>
                <button className = 'indexBtn'>프로젝트 만들기</button>
            </Link>
            {/* 삭제 예정 */}
            <Link to='./invited'>
                <button className = 'indexBtn'>프로젝트입장</button>
            </Link>
            <div className='logoText'>내 프로필</div>
            {/* DB에서 받아온 프로필 정보 표시 */}
            <div className='logoText'>내 프로젝트</div>
            {/* DB에서 받아온 프로젝트 정보 표시 */}
        </div>

    );
}

export default HomePage;