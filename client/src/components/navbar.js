import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (<div className='navbar'>
    <img
    className='logo'
    src="Mylons logo.png"
    height="60"
    width="60" />
    <div className='navButton'>
      <Link className='link' to='/'>Home</Link>
      <Link className='link' to='About'>About</Link>
      <Link className='link' to='Contact'>Contact</Link>
      <a className='link' target='blank' href="./Mylon Jones Resume.pdf">Resume</a>
    </div>
  </div>)
}