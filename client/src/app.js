import React from 'react'
import Navbar from './components/navbar.js'
import Home from './components/home.js'
import About from './components/about.js'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      page: <Home></Home>
    }
    this.changePage = this.changePage.bind(this)
  }

  changePage (page) {
    this.setState({
      page
    })
  }

  render() {
    return (
      <div>
        <Navbar changePage={this.changePage}></Navbar>
        {this.state.page}
      </div>
    )
  }
}