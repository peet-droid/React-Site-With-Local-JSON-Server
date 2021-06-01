import Nav from './Nav';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <div className="content">
        <Switch>
        <Route path="/detail/:id">
            <BlogDetails/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
