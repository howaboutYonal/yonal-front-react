import React from 'react';
import {Link} from 'react-router-dom'

<<<<<<< Updated upstream
const HomePage = ({location}) => {
    const myName = location.name;
    const myImg = location.image;
=======
const HomePage = () => {
    const inviteLink = "http://localhost:3000/invited";

>>>>>>> Stashed changes
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
            {/* 삭제 예정 */}
<<<<<<< Updated upstream
            <Link to='./invited'>
                <button className = 'indexBtn'>프로젝트입장(삭제예정)</button>
=======
            <Link to='/invited' >
                <button className = 'indexBtn'>프로젝트입장</button>
>>>>>>> Stashed changes
            </Link>
        </div>

    );
}

export default HomePage;