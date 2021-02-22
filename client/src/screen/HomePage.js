import React from 'react';
import {Link} from 'react-router-dom'

const HomePage = ({location}) => {
    const myName = location.name;
    const myImg = location.image;
    return (
        <div>
            <div>
                {myName}
                <br></br>
                <img className='profile' src={myImg}/>
            </div>
            <div className='logoText'>내 프로젝트</div>
            {/* DB에서 받아온 프로젝트 정보 표시 */}
            <Link to='./create'>
                <button className = 'indexBtn'>프로젝트 만들기</button>
            </Link>
        </div>

    );
}

export default HomePage;