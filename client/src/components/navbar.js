import React from 'react'
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (<div className='navbar'>
    <img
    className='logo'
    src="https://res.cloudinary.com/dzgsesdip/image/upload/w_60,f_auto/v1652993651/Mylons_logo_vietoh.png" />
    <div className='navButton'>
      <NavLink className={({ isActive }) => 'link' + (isActive ? ' active': '')} to='/'>Home</NavLink>
      <NavLink className={({ isActive }) => 'link' + (isActive ? ' active': '')} to='About'>About</NavLink>
      <NavLink className={({ isActive }) => 'link' + (isActive ? ' active': '')} to='Contact'>Contact</NavLink>
      <a className='link' target='blank' href="./Mylon Jones Resume.pdf">Resume</a>
      <NavLink  className={({ isActive }) => 'link' + (isActive ? ' active': '')} to='blog'>Blog</NavLink>
    </div>
  </div>)
}