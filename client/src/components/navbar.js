import React from 'react'

import Home from './home.js'
import About from './about.js'
import Contact from './contact.js'
import Board from './board.js'

export default function Navbar(props) {
  return (<div className='navbar'>
    {/* <div style={{marginLeft: 10}}>
      😊 Smilin' Mylon
    </div> */}
    <img
    src="smile.svg"
    height="60"
    width="60" />
    <div style={{display: 'flex'}}>
      <div className='link' onClick={()=> {props.changePage(<Home/>)}}>Home</div>
      <div className='link' onClick={()=> {props.changePage(<About/>)}}>About</div>
      <a className='link' target='blank' href="./Mylon Jones Resume.pdf">Resume</a>
      <div className='link' onClick={()=> {props.changePage(<Contact/>)}}>Contact</div>
      <div className='link' onClick={()=> {props.changePage(<Board/>)}}>Game</div>
    </div>
  </div>)
}