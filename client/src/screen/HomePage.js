import React, {useState} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import yonal_logo from '../image/yonal_logo.png'
import Main from '../screen/HomePages/Main'
import LinkPage from '../screen/LinkPage'
import CreateProject from '../screen/HomePages/CreateProject'
import CopyLink from '../screen/HomePages/CopyLink'
import ResultForManager from '../screen/HomePages/ResultForManager'
import GoogleButton from '../component/GoogleButton'
import ResultForGuest from './LinkPages/ResultForGuest'
import VoteFinished from './LinkPages/VoteFinished'
import {withRouter} from 'react-router-dom'

import { Button } from '@material-ui/core';

const HomePage = ({history}) => {
  const [isLogin, setIsLogin] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userImage, setUserImage] = useState(null);

  const sendData = (name, email, image, isLogin) => {
    setIsLogin(isLogin);
    setUserName(name);
    setUserEmail(email);
    setUserImage(image);
  };

  const Logout = () => {
    setIsLogin(false);
    setUserName(null);
    setUserEmail(null);
    setUserImage(null);
  };

  return (
    isLogin?
    <div className="App">
      <BrowserRouter>
        <Link to='./' align='left'> 
          <button className = 'logoutBtn' onClick={Logout}>로그아웃</button>
        </Link>
        <div className='logoText'>우리 모두 일정 맞추기</div>
        <Link to={{pathname: './home', name:userName, email:userEmail, image:userImage}}>
          <img className='Applogo' src={yonal_logo}/>
        </Link>

        <Route path="/homepage" component={this}/>
        <Route path="/home" component={Main}/>
        <Route path="/create" component={CreateProject}/>
        <Route path="/copylink" component={CopyLink}/>
        <Route path="/totalcal" component={ResultForManager}/>
      </BrowserRouter>
    </div>
    :
    <div className="App">
        <BrowserRouter>
          <div className='logoText'>우리 모두 일정 맞추기</div>
          <Link to={{pathname: '../'}}>
              <img className='Applogo' src={yonal_logo}/>  
          </Link>
          <div className='gray-background'>
          요날을 이용하시려면 로그인을 해주세요.
          <div> <GoogleButton sendData={sendData}/></div>
          </div>
          <Link to='./link'>
              <button>임시초대링크</button>
          </Link>
          <Route path="/homepage" component={this}/>
          <Route path="/link" component={LinkPage}/>
          <Route path="/share" component={ResultForGuest}/>
        </BrowserRouter>
  </div>
  );
}

export default withRouter(HomePage);