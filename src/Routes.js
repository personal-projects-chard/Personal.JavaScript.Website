import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { LandingPage, Navbar } from './Components'

class Routes extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </div>
    )
  }
}

export default Routes
