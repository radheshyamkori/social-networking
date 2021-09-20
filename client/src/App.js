import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Screens/Home';
import Profile from './components/Screens/Profile';
import Login from './components/Screens/Login';
import Signup from './components/Screens/Signup';
import CreatePost from './components/Screens/CreatePost';
import './App.css';



function App() {
  return (
    <Router>
        <div className="App">
            <Navbar />
            {/* <Home />
            <Login />
            <Profile />
            <Signup /> */}
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/profile" component={Profile}/>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup}/>
              <Route exact path="/create/post" component={CreatePost} />
            </Switch>
        </div>
    </Router>
    
  );
}

export default App;
