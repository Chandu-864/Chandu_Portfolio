import React, { useEffect, useRef, useState } from 'react'
import './About.css'
import { logos } from '../../aboutInfo'
import resume from '../../assets/resume.pdf'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

const About = () => {

  const aboutRef = useRef();
  const imageRef = useRef();

  const [bioState, setBioState] = useState('bio');

  useEffect( ()=> {
    // if (aboutRef.current) {
    //   const observer = new IntersectionObserver( 
    //     (entries) => {
    //       entries.forEach((entry) => {
    //         console.log(entries)
    //         const rectTop = entry.boundingClientRect.top;
    //         const rectBottom = entry.boundingClientRect.bottom;
    //         if (entry.intersectionRatio >= 0.1 && rectBottom >= window.innerHeight*0.1) {
    //           entry.target.classList.add('anime')
    //         }
    //         else if (entry.intersectionRatio >= 0.01 && rectTop >= window.innerHeight*0.01) {
    //           entry.target.classList.remove('anime')
    //         }
    //         if (entry.intersectionRatio === 0 && rectBottom < 0 || rectTop > window.innerHeight) {
    //           entry.target.classList.remove('anime')
    //         }
    //       })  
    //     }, {threshold: [0.1,0.01]}
    //   );
    //   observer.observe(aboutRef.current);
    // }
    if (aboutRef){
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry)=> {
            if (entry.isIntersecting) {
              entry.target.classList.add('anime')
            }
            else {
              entry.target.classList.remove('anime')
            }
          })
        }, {threshold:0.1}
      )
      observer.observe(aboutRef.current)
    }
    if (imageRef.current) {
      const observer1 = new IntersectionObserver( 
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('popups')
            }
          })
        }, {threshold: 0.8}
      );
      const images = document.querySelectorAll('.box');
      images.forEach((image)=>observer1.observe(image));
      
    }
  },[])


  return (
    <section id='about' className='about-section' ref={aboutRef}>
      <h1  className='head-about' >About Me</h1>
      <div className="biodata">
        <div className="all-btns">
          <button onClick={()=>setBioState('bio')} className={bioState === 'bio' ? 'active' : ''}>Bio</button>
          <button onClick={()=>setBioState('edu')} className={bioState === 'edu' ? 'active' : ''}>Education</button>
          <button onClick={()=>setBioState('exp')} className={bioState === 'exp' ? 'active' : ''}>Experience</button>
          <button onClick={()=>setBioState('hob')} className={bioState === 'hob' ? 'active' : ''}>Hobbies</button>
        </div>
      </div>
      <div className="data">
        {bioState === 'bio' &&  <p> My name is Chandu Thalati. I'm originally from India <span>🇮🇳</span> but 
          moved to the United States <span>🇺🇸</span> in January 2023 and have been living here ever since. </p>}
        {bioState === 'edu' && <p>Master's in Information Technology at Marist University.</p>}
        {bioState === 'exp' && <p>
          Inventechs(full-time, 2019-2022): Designed and developed responsive web applications using React.js, optimizing performance and improving load times by 30%.
          Integrated RESTful APIs and used Axios for data fetching. Wrote unit tests with Jest and React Testing Library, and deployed apps via Vercel and Netlify. 
          Collaborated closely with designers and backend teams to deliver seamless user experiences.
          </p>}
        {bioState === 'hob' && <p> I enjoy playing badminton and watching anime. I'm a regular at the gym and have a big appetite for good food. 
          I’m an animal lover, and visiting a safari in Africa has been a dream of mine since childhood. </p>}
      </div>

      <h1 className='skill-head'>Skills</h1>
      <div className="box-container">
        {logos.map((logo, index) =>{
          return (
            <div key={index} className='box' style={{'--delay': `${index*0.2}s`}} ref={imageRef}>
              <img src= {logo.img} draggable = {false} />
              <p>{logo.text}</p>
            </div>
          )
        })}
      </div>
      <button className='resume'>
        <a href={resume} target='_blank' style={{ textDecoration: 'none', color: 'inherit' }}>
          Resume
        </a>
      </button>
      <div className="icons">
        <a href='https://www.linkedin.com/in/chandu-thalati-268839267/' target='_blank'>
          <FaLinkedin  style={{color: '#0A66C2', background:'white', fontSize: '27px'}} />
        </a>
        <a href='https://github.com/Chandu-864/My-Web-Projects' target='_blank'>
          <FaGithubSquare  style={{color: '#6e5494', background:'white', fontSize: '27px'}} />
        </a>
      </div>
    </section>
  )
}

export default About
