import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Automation from './Components/Automation/Automation';
import Cloud from './Components/Cloud/Cloud';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import Productivity from './Components/Productivity/Productivity';
import Products from './Components/Products/Product';
import Services from './Components/Services/Services';

function App() {
  return (
    <Fragment>
      <Router>
        <div className="App">
          <div class="sidebar">
            <Nav />
          </div>

          <div class="content">
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/automation' exact component={Automation} />
              <Route path='/productivity' exact component={Productivity} />
              <Route path='/cloud' exact component={Cloud} />
              <Route path='/products' exact component={Products} />
              <Route path='/services' exact component={Services} />
            </Switch>
          </div>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
