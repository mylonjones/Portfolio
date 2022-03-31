import React from 'react'
import { Link } from "react-router-dom";

export default function Home (props) {
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
      <Link className='project' to="/Connect4">Connect 4</Link>
    </div>
  </div>)
}