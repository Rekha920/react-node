// import Login from './Components/Login/login';
import Registration from './Components/Registration/registration';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Sample from '../src/Components/Sample/sample';
import Home from '../src/Components/Home/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route  path="/registration" element={<Registration/>}/>
          <Route path="/sample" element={<Sample/>}/>
        </Routes>
      </Router>
     
      {/* <Login/> */}
    </div>
  );
}

export default App;
