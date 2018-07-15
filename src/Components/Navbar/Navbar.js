import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { withRouter, Link } from 'react-router-dom'

import './Navbar.css'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      homeActive: true,
      projectsActive: false,
      techActive: false,
      aboutActive: false,
      contactActive: false
    }
    this.toggleHome = this.toggleHome.bind(this)
    this.toggleProjects = this.toggleProjects.bind(this)
    this.toggleTech = this.toggleTech.bind(this)
    this.toggleAbout = this.toggleAbout.bind(this)
    this.toggleContact = this.toggleContact.bind(this)
  }

  toggleHome() {
    this.setState({
      homeActive: true,
      projectsActive: false,
      techActive: false,
      aboutActive: false,
      contactActive: false
    })
    this.props.history.push('/')
  }

  toggleProjects() {
    this.setState({
      homeActive: false,
      projectsActive: true,
      techActive: false,
      aboutActive: false,
      contactActive: false
    })
    this.props.history.push('/projects')
  }

  toggleTech() {
    this.setState({
      homeActive: false,
      projectsActive: false,
      techActive: true,
      aboutActive: false,
      contactActive: false
    })
    this.props.history.push('/technical-blogs')
  }

  toggleAbout() {
    this.setState({
      homeActive: false,
      projectsActive: false,
      techActive: false,
      aboutActive: true,
      contactActive: false
    })
    this.props.history.push('/about')
  }

  toggleContact() {
    this.setState({
      homeActive: false,
      projectsActive: false,
      techActive: false,
      aboutActive: false,
      contactActive: true
    })
    this.props.history.push('/contact')
  }

  render() {
    console.log(this.props.history)
    return (
      <Menu fixed="top" pointing inverted stackable>
        <Menu.Menu position="left">
          <Menu.Item
            className={this.state.homeActive ? 'active' : ''}
            onClick={this.toggleHome}
          >
            Home
          </Menu.Item>
          <Menu.Item
            className={this.state.projectsActive ? 'active' : ''}
            onClick={this.toggleProjects}
          >
            Projects
          </Menu.Item>
          <Menu.Item
            className={this.state.techActive ? 'active' : ''}
            onClick={this.toggleTech}
          >
            Technical Blogs
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
          <Menu.Item
            className={this.state.aboutActive ? 'active' : ''}
            onClick={this.toggleAbout}
          >
            About Me
          </Menu.Item>
          <Menu.Item
            className={this.state.contactActive ? 'active' : ''}
            onClick={this.toggleContact}
          >
            Contact
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default withRouter(Nav)
