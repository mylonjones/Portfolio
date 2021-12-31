import React from 'react'
import QandA from '../Q&A/q&a.jsx'
import Board from './board.js'

export default function Home (props) {
  console.log(props.changePage)
  return(<div className='homepage'>
    <div style={{fontSize: 40}}>
      Mylon Jones
    </div>
    <div style={{fontSize: 25, margin: 30}}>
      Web Developer
    </div>
    <div>
    {'AWS | Axios | CSS  | Docker | EmailJS | Express | GIT | HTML | JavaScript | MongoDB | NGINX | Node | PostgreSQL | Postman | React'}
    </div>
    <div style={{fontSize: 25, margin: 30}}>
      Portfolio Projects
    </div>
    <div className='portfolioButtons'>
      <div className='project' onClick={()=> {props.changePage(<QandA/>)}}>{"Q&A Model"}</div>
      <div className='project' onClick={()=> {props.changePage(<Board/>)}}>Connect 4</div>
    </div>
  </div>)
}