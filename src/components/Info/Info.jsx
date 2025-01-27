import React, { Suspense } from 'react'
import './Info.css'
import chandu from '../../assets/chandu.png';
import { Canvas } from '@react-three/fiber'
import Loading from '../../components/Loading/Loading'
import Avatar from '../../models/Avatar'

const Info = () => {
  return (
    <div className='info'>
      <h1>Hi, I am Chandu Thalati</h1>
      <div className='content'>
        <div className="image-cont">
          <img src = {chandu} alt="Chandu Thalati" draggable = {false} />
          </div>
        <div className="text-cont">
          <p>
            An innovative and motivational Full Stack Web Developer with a passion for building efficient, scalable, and robust web applications. 
            I excel at exploring new technologies and solving complex problems to deliver impactful, user-friendly solutions. 
            Eager to learn and grow, I actively seek opportunities to expand my skills and embrace challenges that drive development. 
            Committed to writing clean, maintainable code and optimizing performance, 
            I aim to inspire those around me and contribute to high-quality software development.
          </p>
        </div>
      </div>
      <div className="chandu" style={{ width: '100%', height: '450px', marginTop: '-60px'}}>
        <Canvas
          camera={{
            position: [0,0,5],
          }}
        >
          <directionalLight position={[2, 2, 2]} intensity={3} />
          <ambientLight intensity={1.5} />
          <hemisphereLight skyColor={'#ffffff'} groundColor={'#444444'} intensity={1.2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.3}
            penumbra={1}
            intensity={3}
            castShadow
          />
          <Suspense fallback = {<Loading />}>
            <Avatar
              position={[0, -1.35, 0]}
              rotation={[0, 0, 0]}
              scale={[2.3, 2.3, 2.3]}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}

export default Info