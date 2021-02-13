import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import JihyoPage from './screen/JihyoPage'
import DeoksooPage from './screen/DeoksooPage'
import yonal_logo from './screen/yonal_logo.png'
import HomePage from './screen/HomePage'
import CreateProject from './screen/CreateProject'
import GoogleButton from './component/GoogleButton'
import CopyLink from './screen/CopyLink'

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
        <Link to='./deoksoo'>
              <button className = 'indexBtn'>덕수</button>
        </Link>
        <Route path="/" component={this}/>
        <Route path="/jihyo" component={JihyoPage}/>
        <Route path="/deoksoo" component={DeoksooPage}/>
        <Route path="/home" component={HomePage}/>
        <Route path="/create" component={CreateProject}/>
        <Route path="/copylink" component={CopyLink}/>
      </BrowserRouter>
    </div>
  
  );
}

export default App;