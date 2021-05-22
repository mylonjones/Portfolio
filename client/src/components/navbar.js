import React from 'react'

import Home from './home.js'
import About from './about.js'

export default function Navbar(props) {
  return (<div className='navbar'>
    <div>
      MJ
    </div>
    <div style={{display: 'flex'}}>
      <div className='link' onClick={()=> {props.changePage(<Home/>)}}>Home</div>
      <div className='link' onClick={()=> {props.changePage(<About/>)}}>About</div>
      <a className='link' target='blank' href="./Mylon Jones Resume.pdf">Resume</a>
    </div>
  </div>)
}