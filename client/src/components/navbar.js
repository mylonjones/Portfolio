import React from 'react'

import Home from './home.js'
import About from './about.js'
import Contact from './contact.js'

export default function Navbar(props) {
  return (<div className='navbar'>
    <img
    className='smile'
    src="smile.svg"
    height="60"
    width="60" />
    <div className='navButton'>
      <div className='link' onClick={() => {props.changePage(<Home changePage={props.changePage}/>)}}>Home</div>
      <div className='link' onClick={() => {props.changePage(<About/>)}}>About</div>
      <div className='link' onClick={() => {props.changePage(<Contact/>)}}>Contact</div>
      <a className='link' target='blank' href="./Mylon Jones Resume.pdf">Resume</a>
    </div>
  </div>)
}