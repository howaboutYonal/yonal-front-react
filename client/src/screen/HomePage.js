import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom'
import yonal_logo from '../image/yonal_logo.png'
import GoogleButton from '../component/GoogleButton'

const HomePage = ({history}) => {
  const [, setIsLogin] = useState(null);
  const [, setUserName] = useState(null);
  const [, setUserEmail] = useState(null);
  const [, setUserImage] = useState(null);

  const sendData = (name, email, image, isLogin) => {
    setIsLogin(isLogin);
    setUserName(name);
    setUserEmail(email);
    setUserImage(image);
  };

  if(localStorage.getItem("userName")){
    history.push({
      pathname: "/loginhome", 
  });
    return null;
  }
  
  return (
  <div>
      <div className='logoText'>우리 모두 일정 맞추기</div>
      <Link to={{pathname: './loginpage'}}>
        <img className='Applogo' src={yonal_logo}/>  
      </Link>
      <GoogleButton className = 'googleBtn' sendData={(e) => sendData}/>
      <div className='loginGuide'>요날을 이용하시려면 로그인을 해주세요.</div>
      
  </div>
  );
}

export default withRouter(HomePage);