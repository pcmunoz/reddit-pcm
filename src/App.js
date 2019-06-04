import React from 'react';
import HomeRouter from './routes/HomeRouter';
import DetailRouter from './routes/DetailRouter';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/detail/:id" component={DetailRouter} />
        <Route path="/:sort" component={HomeRouter} />
        <Route exact path="/" component={HomeRouter}/>
      </Switch>
    </Router>
  );
}

export default App;
