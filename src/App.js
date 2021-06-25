
import './App.css';
import UsersList from './components/UsersList';
import {Link,Route,Switch} from 'react-router-dom'
import Profile from './components/Profile'
import Post from './components/Post'
function App() {
  return (
    <div className="App">
    <Switch>
      
      <Route exact path="/" component={UsersList} />
      <Route exact path="/profile/:id" component={Profile} />
      <Route path="/profile/post/:id" component={Post} />
      
   </Switch>
    </div>
  );
}

export default App;
