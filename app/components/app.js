import React, { Component } from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from './main';
import Timer from './timer';
import Countdown from './countdown'

//load foundation (esto es una mierda, pero es lo que hay, por ahora)
$(document).foundation();

//App css
require('style!css!sass!../styles/app.scss');

class App extends Component{
  render() {
    return(
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={Timer}/>
          <Route path="countdown" component={Countdown}/>
        </Route>
      </Router>
    );
  }
}

export default App;
