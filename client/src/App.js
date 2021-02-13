import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import InvitedHome from './screen/InvitedHome'
import Result from './screen/Result'
import yonal_logo from './image/yonal_logo.png'
import HomePage from './screen/HomePage'
import CreateProject from './screen/CreateProject'
import GoogleButton from './component/GoogleButton'
import CopyLink from './screen/CopyLink'
import Guest from './screen/Guest'
import Vote from './screen/Vote'
import CalendarComponent from './screen/CalendarComponent';

function App() {
  return (

    <div className="App">
      <div className='logoText'>우리 모두 일정 맞추기</div>
      <BrowserRouter>
        <Link to='./'>
          <img className='Applogo' src={yonal_logo}/>  
        </Link>
        <GoogleButton></GoogleButton>
        <Link to='./home'>
          <button className = 'indexBtn'>홈페이지</button>
        </Link>
        <Link to='./totalcal'>
              <button className = 'indexBtn'>투표결과</button>
        </Link>
        <Route path="/" component={this}/>
        <Route path="/invited" component={InvitedHome}/>
        <Route path="/totalcal" component={Result}/>
        <Route path="/home" component={HomePage}/>
        <Route path="/create" component={CreateProject}/>
        <Route path="/copylink" component={CopyLink}/>
        <Route path="/guest" component={Guest}/>
        <Route path="/vote" component={Vote}/>
        <Route path='/calendar' component={CalendarComponent}/>
      </BrowserRouter>
    </div>
  
  );
}

export default App;