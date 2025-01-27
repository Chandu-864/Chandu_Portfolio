import React, { Suspense, useEffect, useState } from 'react'
import './Navbar.css'
import { Canvas } from '@react-three/fiber'
import Loading from '../Loading/Loading'
import Moon from '../../models/Moon'
import Sun from '../../models/Sun'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {

  const [mode, setMode] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const sunAnime = 'Take 001';
  const moonAnime = 'moon|moonAction';

  const colorChange = () => {
    document.body.classList.toggle('dark-mode');
  }

  const nav = document.getElementById('nav');
  const about = document.getElementById('about');
  const projects = document.getElementById('projects');
  const contact = document.getElementById('contact');

  const handleScroll = (element) => {
    setScrolling(true);

    setTimeout(()=> {
      element.scrollIntoView({behavior: 'smooth'});
      setScrolling(false)
    },1200)
  }

  useEffect(()=> {
    if (showMenu) {
      document.body.classList.add('no-scroll')
    }
    else {
      document.body.classList.remove('no-scroll')
    }
  },[showMenu])

  return (
    <section className='section' id='nav'>
      <button className='icon' onClick={()=>setShowMenu(!showMenu)}>
        {!showMenu ? <GiHamburgerMenu style={{fontSize: '40px'}} /> : <MdOutlineClose style={{fontSize: '40px'}} /> }
      </button>
      { showMenu ? 
        <div className='menu-list'>
          <ul className='items'>
            <li onClick={()=>{setShowMenu(!showMenu);handleScroll(nav)}}><HashLink smooth to= '#nav'>Home</HashLink></li>
            <li onClick={()=>{setShowMenu(!showMenu);handleScroll(about)}}><HashLink smooth to="#about">About</HashLink></li>
            <li onClick={()=>{setShowMenu(!showMenu);handleScroll(projects)}}><HashLink smooth to= '#projects'>Projects</HashLink></li>
            <li onClick={()=>{setShowMenu(!showMenu);handleScroll(contact)}}><HashLink smooth to= '#contact'>Contact</HashLink></li>
            <li className="sun" onClick = {()=>{setMode(!mode);setShowMenu(!showMenu);colorChange();}}>
                    <Canvas
                      camera={{
                        position:[0,0,5],
                        fov: 75,
                        near: 0.1,
                        far: 1000,
                      }}
                    >
                      <directionalLight position={[1, 1, 1]} intensity={2.5} />
                      <ambientLight intensity={1} />
                      <pointLight position={[5, 10, 0]} intensity={2} />
                      <spotLight
                        position={[10, 10, 10]}
                        angle={0.15}
                        penumbra={1}
                        intensity={2}
                      />
                      <Suspense fallback = {<Loading />}>
                        {mode ?
                          <Moon 
                            moonAnime={moonAnime}
                            position={[0, 0, 0]}
                            rotation={[12.629, -0.6, 0]}
                            scale={[1, 1, 1]}
                          /> :
                          <Sun 
                            sunAnime = {sunAnime}
                            position={[0, 0, 0]}
                            rotation={[12.629, -0.6, 0]}
                            scale={[1, 1, 1]}
                          />}
                        </Suspense>
                      </Canvas>
              </li>
          </ul>
        </div> : ''
      }
      <div className='head' >
          <ul className='list'>
            <li onClick={()=>{handleScroll(nav)}}><HashLink smooth to= '#nav'>Home</HashLink></li>
            <li onClick={()=>{handleScroll(about)}}><HashLink smooth to="#about">About</HashLink></li>
            <li onClick={()=>{handleScroll(projects)}}><HashLink smooth to= '#projects'>Projects</HashLink></li>
            <li onClick={()=>{handleScroll(contact)}}><HashLink smooth to= '#contact'>Contact</HashLink></li>
          </ul>
      </div>
      <div className="sun-big" onClick = {()=>{setMode(!mode);colorChange();}}>
        <Canvas
          camera={{
            position:[0,0,5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[1, 1, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <Suspense fallback = {<Loading />}>
            {mode ?
              <Moon 
                moonAnime = {moonAnime}
                position={[0.5, 0.35, 0]}
                rotation={[12.629, -0.6, 0]}
                scale={[1.5, 1.5, 1.5]}
              /> :
              <Sun 
                sunAnime = {sunAnime}
                position={[0.5, 0.35, 0]}
                rotation={[12.629, -0.6, 0]}
                scale={[1.5, 1.5, 1.5]}
              />}
            </Suspense>
          </Canvas>
      </div>
            
    </section>
  )
}

export default Navbar