/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import chanduScene from '../assets/3d_models/chandu.glb'
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import * as THREE from 'three'; // Import THREE.js

const Avatar = (props) => {

  const cursorFollow = true;
  const headFollow = true;

  const avatarRef = useRef();

  const { nodes, materials } = useGLTF(chanduScene);
  const { animations: typingAnimation } = useFBX('animations/Typing.fbx');
  const { animations: waving } = useFBX('animations/Waving.fbx');
  const { animations: sitting } = useFBX('animations/Sitting.fbx');
  const { animations: looking } = useFBX('animations/Looking.fbx');

  typingAnimation[0].name = 'typing';
  waving[0].name = 'waving';
  sitting[0].name = 'sitting'
  looking[0].name = 'looking'

  const {actions} = useAnimations([typingAnimation[0],waving[0], sitting[0], looking[0]], avatarRef);

  useEffect( ()=>{
    actions['typing'].play();
    // setTimeout(() => {
    //     actions['waving'].stop();
    //     actions['sitting'].play();
    //     setTimeout( ()=> {
    //         actions['sitting'].stop();
    //         actions['typing'].stop();
    //     },4000)
    // }, 4000);
  },[actions])  

  useFrame( (state)=> {
    if (headFollow) {
      const head = avatarRef.current.getObjectByName('Head');
      if (head) {
        head.lookAt(state.camera.position)
      }
      }
      // if (cursorFollow) {
      //   const spine2 = avatarRef.current.getObjectByName('Spine2');
      //   if (spine2) {
      //     const target = new THREE.Vector3(state.mouse.x*2.5, state.mouse.y*2.5,1)
      //     spine2.lookAt(target);
      //     spine2.rotation.x = THREE.MathUtils.lerp(spine2.rotation.x, target.x, 0.1); // Smooth interpolation
      //     spine2.rotation.y = THREE.MathUtils.lerp(spine2.rotation.y, target.y, 0.1);
      //   }
      // }
      if (cursorFollow) {
        const neck = avatarRef.current.getObjectByName('Neck');
        if (neck) {
          const target = new THREE.Vector3(state.mouse.x*1, state.mouse.y*1,1)
          neck.lookAt(target);
          neck.rotation.x = THREE.MathUtils.lerp(neck.rotation.x, target.x, 0.1); // Smooth interpolation
          neck.rotation.y = THREE.MathUtils.lerp(neck.rotation.y, target.y, 0.1);
        }
      }
  })

  return (
    <group {...props} dispose={null} ref={avatarRef} rotation={[-Math.PI / 2, 0, 0]}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
    </group>
  )
}

export default Avatar
