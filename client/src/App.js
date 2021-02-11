import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import JihyoPage from './screen/JihyoPage'
import SuebeenPage from './screen/SuebeenPage'
import DeoksooPage from './screen/DeoksooPage'


function App() {
  return (

    <div className="App">
      <BrowserRouter>

        <Link to='./jihyo'>
              <button className = 'indexBtn'>지효</button>
        </Link>

        <Link to='./suebeen'>
              <button className = 'indexBtn'>수빈</button>
        </Link>

        <Link to='./deoksoo'>
              <button className = 'indexBtn'>덕수</button>
        </Link>
        <div>--------------------------------------</div>
        <Route path="/jihyo" component={JihyoPage}/>
        <Route path="/suebeen" component={SuebeenPage}/>
        <Route path="/deoksoo" component={DeoksooPage}/>

      </BrowserRouter>
    </div>
  
  );
}

export default App;