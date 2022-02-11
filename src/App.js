import './App.css';
import HomePage from './components/HomePage';
import BlogPost from './components/BlogPost';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div class="App">
          <div class="container">         
            <div class="grid_4">
              <h3><Link to="/">TBEducation</Link></h3>
            </div>
            <div class="grid_2 last">
            	<p>Technology Business Education</p>
			      </div>

          <Switch>
            <Route path="/" component={HomePage} exact />           
            <Route path="/:id" component={BlogPost} />
          </Switch> 

            <div class="grid_6">
				      <p>&copy; TBEducation</p>
			      </div>
          </div>          
        </div>       
      </Router>
  );
}
export default App;