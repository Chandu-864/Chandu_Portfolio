import React, { useEffect, useRef } from 'react'
import './Project.css'
import { projects, extras } from '../../projectInfo'
import { color } from 'three/tsl';

const Project = () => {

  const headRef = useRef();
  const layoutRef = useRef();

  useEffect( ()=> {
    if (headRef){
      const observerPro = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry)=> {
            if (entry.isIntersecting) {
              entry.target.classList.add('open')
            }
            else {
              entry.target.classList.remove('open')
            }
          })
        }, {threshold:0.03}
      )
      observerPro.observe(headRef.current)
    }
  },[])

  return (
    <div className='proj-page' id='projects' ref={headRef}>
      <h1>Projects</h1>
      <div className="layout">
        {projects.map( (project, index) => {
          return (
            <div key={index} className='box-proj'>
              <img src={project.img} draggable = {false}/>
              <h2>{project.head}</h2>
              <p>{project.desc}</p>
              <a href = {project.link} target='_blank'>Live Link →</a>
            </div>
          )
        })}
      </div>
      <div className="layout">
        {extras.map( (extra, index) => {
          return (
            <div key={index} className='box-proj'>
              <img src={extra.img} draggable = {false}/>
              <h2>{extra.head}</h2>
              <p>{extra.desc}</p>
            </div>
          )
        })}
      </div>
      <hr  style={{marginTop: '10px', borderStyle: 'dotted', color:'var(--greyColor)'}}/>
    </div>
  )
}

export default Project