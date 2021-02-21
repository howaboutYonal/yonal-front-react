import './App.css';
import React, {useState} from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import InvitedHome from './screen/InvitedHome'
import Result from './screen/Result'
import yonal_logo from './image/yonal_logo.png'
import HomePage from './screen/HomePage'
import CreateProject from './screen/CreateProject'
import CopyLink from './screen/CopyLink'
import Guest from './screen/Guest'
import Vote from './screen/Vote'
import CalendarComponent from './screen/CalendarComponent';

const clientId = "88721696570-626294ccdp8h1vthmb7sce60mep2i15q.apps.googleusercontent.com";
// 클라이언트 보안 비밀번호 Z4L3SvyZM_xL7YyhLN4sufuB

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userImage, setUserImage] = useState(null);

  const onSuccess = async(response) => {
    console.log(response);
    setUserName(response.getBasicProfile().getName());
    setUserEmail(response.getBasicProfile().getEmail());
    setUserImage(response.getBasicProfile().getImageUrl());

    const res = await axios.post('http://localhost:5000/v1/register/google-login', {
        user_name:userName,
        user_email:userEmail,
        user_image:userImage
    });
    setIsLogin(true);
  }

  const onFailure = (error) => {
    console.log(error);
  }

  return (
    isLogin==true?
    <div className="App">
      
      <BrowserRouter>
        <Link to='./'>
            <button onClick={()=>setIsLogin(false)}>로그아웃</button>
        </Link>
        <div className='logoText'>우리 모두 일정 맞추기</div>
        <Link to={{pathname: './home', name: userName, email: userEmail, image: userImage}}>
          <img className='Applogo' src={yonal_logo}/>  
        </Link>
        <Route path="/" component={this}/>
        <Route path="/invited" component={InvitedHome}/>
        <Route path="/totalcal" component={Result}/>
        <Route path="/home" component={HomePage}/>
        <Route path="/create" component={CreateProject}/>
        <Route path="/copylink" component={CopyLink}/>
        <Route path="/guest/" component={Guest}/>
        <Route path="/vote" component={Vote}/>
        <Route path='/calendar' component={CalendarComponent}/>
      </BrowserRouter>
    </div>
    :
    <div className="App">
        <BrowserRouter>
          <div className='logoText'>우리 모두 일정 맞추기</div>
          <Link to='./'>
            <img className='Applogo' src={yonal_logo}/>  
          </Link>
          <div>
          <GoogleLogin
                    clientId={clientId}
                    responseType={"id_token"}
                    onSuccess={onSuccess}
                    onFailure={onFailure}
          />
          </div>
          <Link to='./totalcal'>
                <button className = 'indexBtn'>투표결과(삭제예정)</button>
          </Link>
          <Route path="/totalcal" component={Result}/>
        </BrowserRouter>
      </div>
  );
}

export default App;