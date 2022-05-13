import React from 'react'
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (<div className='navbar'>
    <img
    className='logo'
    src="Mylons logo.png"
    height="60"
    width="60" />
    <div className='navButton'>
      <NavLink className={({ isActive }) => 'link' + (isActive ? ' active': '')} to='/'>Home</NavLink>
      <NavLink className={({ isActive }) => 'link' + (isActive ? ' active': '')} to='About'>About</NavLink>
      <NavLink className={({ isActive }) => 'link' + (isActive ? ' active': '')} to='Contact'>Contact</NavLink>
      <a className='link' target='blank' href="./Mylon Jones Resume.pdf">Resume</a>
    </div>
  </div>)
}