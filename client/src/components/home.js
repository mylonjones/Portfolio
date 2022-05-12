import React, { useEffect } from 'react'
import { Link } from "react-router-dom";


export default function Home (props) {


  const getTime = function() {
    const time = new Date
    let meridian = ' am'
    let hours = time.getHours()
    if(hours > 11) meridian = ' pm'
    if(hours > 12) hours -= 12
    if(hours < 10) hours = '0' + hours
    let minutes = time.getMinutes()
    if(minutes < 10) minutes = '0' + minutes
    let seconds = time.getSeconds()
    if(seconds < 10) seconds = '0' + seconds
    let clock = document.getElementById('clock')
    clock.innerHTML = (hours + ':' + minutes + ':' + seconds + meridian)
    setTimeout(getTime, 1000)
  }

  useEffect(getTime)

  return(<div className='homepage'>
    <div className='name'>
      Mylon Jones
    </div>
    <div className='title'>
      Web Developer
    </div>
    <div>
    {'AWS | Axios | CSS  | Docker | EmailJS | Express | GIT | HTML | JavaScript | MongoDB | NGINX | Node | PostgreSQL | Postman | React'}
    </div>
    <div className='title'>
      Portfolio Projects
    </div>
    <div className='portfolioButtons'>
      <Link className='project' to='Q&A'>{"Q&A Model"}</Link>
      <div id='clock'>
      </div>
      <Link className='project' to="/Connect4">Connect 4</Link>
    </div>
  </div>)
}