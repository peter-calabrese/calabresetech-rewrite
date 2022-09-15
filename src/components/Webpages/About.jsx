import { Canvas, useFrame } from '@react-three/fiber'
import { TrackballControls } from '@react-three/drei'
import { useRef } from 'react'
import Cloud from '../Cloud'
const About = () => {

    return (
        <div className='flex justify-center items-center'>
            <div className="text-white flex flex-col justify-center items-start h-screen pl-10 ">
                <h1 className="text-4xl pb-2 font-bold">About Me</h1>
                <p className="text-2xl ">I am a full stack developer who has a great mind for solving problems of all different calibres. Creating solutions such as <a className="text-Sunset-Orange" href="https://github.com/peter-calabrese/rtxbot">my RTX stock monitoring bot</a> to helping out friends who need <a className="text-Sunset-Orange" href="https://luciafootwearco.vercel.app">a new website for their company</a>. Learning new frameworks and languages is also something I enjoy! The challange of learning something new, coupled with the ability of being able to walk away from a project with more knowledge than when I started, creates a level of excitement and enjpyment in what I do.</p>
            </div>
            <div className="mr-10 ml-40 h-screen w-[5000px]">
                <Canvas camera={{ position: [0, 0, 35], fov: 90 }}>
                    <fog attach="fog" args={['#202025', 0, 80]} />
                    <Cloud count={5} radius={16} />
                    <TrackballControls noPan={true} />
                </Canvas>
            </div>
        </div >


    );
}
export default About;