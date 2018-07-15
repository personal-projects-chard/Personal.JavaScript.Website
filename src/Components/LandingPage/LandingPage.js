import React, { Component } from 'react'
import { Button, Icon } from 'react-materialize'
import './LandingPage.css'

class Landing extends Component {
  render() {
    return (
      <div className="landing-container">
        <div className="landing-content">
          <h1>Welcome to my website!</h1>
          <p>
            Use the navbar to see descriptions and links to my major projects,
            blog posts on tech, to learn a bit more about me, or to contact me
            directly!
          </p>
          {/* <Button waves="light">
            <Icon>thumb_up</Icon>
          </Button> */}
        </div>
      </div>
    )
  }
}

export default Landing
