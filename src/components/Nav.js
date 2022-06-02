import React, { Component } from 'react'
import About from './About'
import Contact from './Contact'
import Links from './Links'
import Projects from './Projects'
import Skills from './Skills'

class Nav extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         page: 1
      }
      this.about = this.about.bind(this)
      this.skills = this.skills.bind(this)
      this.projects = this.projects.bind(this)
      this.links = this.links.bind(this)
      this.contact = this.contact.bind(this)
    }

    about(){
      this.setState({
        page: 1
      })
    }

    skills(){
      this.setState({
        page: 2
      })
    }

    projects(){
      this.setState({
        page: 3
      })
    }

    links(){
      this.setState({
        page: 4
      })
    }

    contact(){
      this.setState({
        page: 5
      })
    }

  render() {
    return (
      <div>
        <nav>
            <ul>
                <li onClick={this.about}>About Me</li>
                <li onClick={this.skills}>Skills</li>
                <li onClick={this.projects}>Projects</li>
                <li onClick={this.links}>Links</li>
                <li onClick={this.contact}>Contact Me</li>
            </ul>
        </nav>
        <About show={this.state.page}/>
        <Skills show={this.state.page}/>
        <Projects show={this.state.page}/>
        <Links show={this.state.page}/>
        <Contact show={this.state.page}/>
      </div>
    )
  }
}

export default Nav