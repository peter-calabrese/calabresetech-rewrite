import { motion } from "framer-motion"

const Homepage = ({ setRedirect }) => {
    return (
        <motion.div className="text-white flex flex-col justify-center items-center h-screen"
            animate={{
                opacity: [0, 1],
                y: [-100, 0],
                transition: {
                    duration: 1.4,
                }
            }}>
            <div className="text-center">
                <h1 className="flex justify-center text-6xl pb-4">Hey there <motion.div className="space-x-1" animate={{ rotate: [0, 70, -30, 70, -30, 0] }} transition={{ delay: 1, duration: 2 }} >👋</motion.div>, my name&apos;s Peter. </h1>
                <h2 className="text-5xl 2xl:px-80 px-20">I&apos;m a <span className="text-Sunset-Orange ">Full Stack Software Developer</span> based out of New York and have a passion for building clean, performant, and responsive web applications.</h2>
            </div>
            <button className="mt-32 px-12 py-4 border-2 rounded hover:bg-react-logo hover:text-stone-700" onClick={() => { setRedirect('About.html') }} >Learn More</button>
        </motion.div>
    );
}
export default Homepage;