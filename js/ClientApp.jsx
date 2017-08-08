import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';

const NotFound = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      {/* Switch = render exactly one component  */}
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/search" component={Search} />
        {/* if nothing else matches  */}
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));
