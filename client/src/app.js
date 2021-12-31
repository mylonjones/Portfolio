import React from 'react'
import Navbar from './components/navbar.js'
import Home from './components/home.js'
import QandA from './Q&A/q&a.jsx'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.changePage = this.changePage.bind(this)
    this.state = {
      page: <Home changePage={this.changePage}></Home>
    }

  }

  changePage (page) {
    this.setState({
      page
    })
  }

  render() {
    return (
      <div>
        <Navbar changePage={this.changePage}/>
        <div className='spacer'>
          {this.state.page}
        </div>
      </div>
    )
  }
}