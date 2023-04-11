import React from 'react'
import Navbar from './components/navbar.js'
import Home from './components/home.js'
import QandA from './Q&A/q&a.jsx'
import Board from './components/board.js'
import Contact from './components/contact.js'
import About from './components/about.js'
import AllPosts from "./components/AllPosts.js"
import OnePost from "./components/OnePost.js"
import SheetMusic from "./sheetmusic/components/more.js"
import { Routes, Route, Link } from "react-router-dom";

export default class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Routes>
          <Route path="/sheetmusic" element={<SheetMusic />} />
          <Route path="/*" element={
            <div>
              <Navbar changePage={this.changePage}/>
              <div className='spacer'>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Connect4" element={<Board />} />
                  <Route path="/Q&A" element={<QandA />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/Contact" element={<Contact />} />
                  <Route path="blog" element={<AllPosts />} exact />
                  <Route path=":slug" element={<OnePost />} />
                </Routes>
              </div>
            </div>
          } />
        </Routes>

      </div>
    )
  }
}