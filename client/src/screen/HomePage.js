import React from 'react';
import {Link} from 'react-router-dom'

const HomePage = ({location}) => {
    const profileImg = location.image;
    return (
        <div>
            <div>
                <img className='profile' src={profileImg}/>
            </div>
            <div className='logoText'>내 프로젝트</div>
            {/* DB에서 받아온 프로젝트 정보 표시 */}
            <Link to='./create'>
                <button className = 'indexBtn'>프로젝트 만들기</button>
            </Link>
            {/* 삭제 예정 */}
            <Link to='./invited'>
                <button className = 'indexBtn'>프로젝트입장(삭제예정)</button>
            </Link>
        </div>

    );
}

export default HomePage;