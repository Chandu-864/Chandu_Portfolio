import {Html} from '@react-three/drei'

const Loading = () => {
  return (
    <Html>
        <div className='flex justify-center items-center'>
        <div className='w-20 h-20 border-2 border-opacity-20 
        border-blue-500 border-t-blue-500 rounded-full animate-spin'>
          <p className="text-center"></p>
        </div>
    </div>
    </Html>
  )
}

export default Loading