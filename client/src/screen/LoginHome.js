import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Link, withRouter} from 'react-router-dom'
import yonal_logo from '../image/yonal_logo.png'
import LoginUserMain from './HomePages/LoginUserMain'
import {useMediaQuery} from 'react-responsive'

const LoginHome = ({location, history}) => {
  const [isLogin, setIsLogin] = useState(null);
  const [userName, setUserName] = useState(localStorage.getItem("userName") || null);
  const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail") || null);
  const [userImage, setUserImage] = useState(localStorage.getItem("userImage") || null);
  const isMobile = useMediaQuery ({
    query : "(max-width : 500px)"
  })
  const projectStyle = isMobile? 'mNicknameGuide' : 'nicknameGuide';


  useEffect(() => {

  })
  
  const Logout = () => {
    localStorage.clear();
  };


  return (
      <div>
        <div className='alignRight'>
          <Link to='./loginpage'> 
            <button className = 'logoutBtn' onClick={Logout}>로그아웃</button>
          </Link>
        </div>

        <div className='alignCenter'>
          <div className='logoText'>우리 모두 일정 맞추기</div>
          <Link to={{pathname: './home', name:userName, email:userEmail, image:userImage}}>
            <img className='Applogo' src={yonal_logo}/>
          </Link>
          <LoginUserMain name={userName} email={userEmail} image={userImage}/>
        </div>
      </div>
  );
}

export default withRouter(LoginHome);