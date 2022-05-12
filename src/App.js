import logo from './logo.svg';
import kolomentor from './kolomentor.png';
import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Nav from './Navigation';
import Mentee_Login from './Mentee_Login'
import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home_Page from './Home_Page'
import reactRouterDom from 'react-router-dom';
import Mentee_Signup from './Mentee_Signup';
import Mentor_Profile from './Mentor_Profile';

function App() {
  return (
    <Router>
      <div className='home'>
        <Nav />
      </div>

      <div>
        <Switch>
          <Route exact path='/'>
            <Home_Page/>
            
          </Route>

          <Route exact path='/menteeLogin'>
            <Mentee_Login/>
            
          </Route>

          <Route exact path='/menteeSignup'>
            <Mentee_Signup/>
            
            </Route>

            <Route exact path='/mentorProfile'>
                <Mentor_Profile />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
