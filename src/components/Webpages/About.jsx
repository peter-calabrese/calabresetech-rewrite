import { Canvas, useFrame } from '@react-three/fiber'
import { TrackballControls } from '@react-three/drei'
import { useRef } from 'react'
import Cloud from '../Cloud'
const About = () => {

    return (
        <div className='flex justify-center items-center'>
            <div className="text-white flex flex-col justify-center items-start h-screen pl-10 ">
                <h1 className="text-4xl pb-2 font-bold">About Me</h1>
                <p className="text-2xl ">I am a full stack developer who has a great mind for solving problems of any calibre. I have created solutions such as <a className="text-react-logo" href="https://github.com/peter-calabrese/rtxbot">an inventory monitoring bot</a> with python to helping out friends get RTX graphics cards at MSRP. Developed <a className="text-react-logo " href="https://luciafootwearco.vercel.app">a ReactJS website</a> for LuciaFootwearCo's rapidly growing buisness. In addtion to creating I thuroughly enjoy learning new frameworks and languages! The challange of being placed outside my comfort zone, coupled with the benefit of being able to apply my newly aquired knowledge on the job or on my next project, gives me the drive to firther improve and apply myself as a developer.</p>
            </div>
            <div className="mr-10 ml-40 h-screen w-[5000px]">
                <Canvas camera={{ position: [0, 0, 35], fov: 90 }}>
                    <fog attach="fog" args={['#202025', 0, 90]} />
                    <Cloud count={5} radius={16} />
                    <TrackballControls noPan={true} />
                </Canvas>
            </div>
        </div >


    );
}
export default About;