import { FaAws, FaNodeJs } from "react-icons/fa"
import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb, SiMysql, SiJira, SiTypescript, SiTableau } from "react-icons/si"
import { FaJava } from "react-icons/fa"
import { FaPython } from "react-icons/fa"
import { FaAngular, FaGitAlt } from "react-icons/fa"
import { SiPostman } from "react-icons/si"
import { SiSpringboot } from "react-icons/si"
import { SiDocker } from "react-icons/si"
import { BiLogoPostgresql } from "react-icons/bi"
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration, ease: "linear", repeat: Infinity, repeatType: "reverse"
        }
    }
})
const Technologies = () => {
    return (
        <div className="pb-24">
            <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100 }} transition={{duration: 1.5}} className="my-20 text-center text-4xl">Technologies</motion.h2>
            <motion.div whileInView={{opacity: 1, x: 0}} initial={{ opacity: 0, x: -100}} transition={{duration: 1.5 }} className="flex flex-wrap items-center justify-center gap-4">
            <motion.div initial="initial" animate="animate" variants={iconVariants(2)}>
                <FaJava className="text-7xl text-orange-500" />
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)}>
                <FaPython className="text-7xl text-blue-400" />
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(4)}>
                <SiSpringboot className="text-7xl text-green-600" />
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(3)}>
                <FaAngular className="text-7xl text-red-600" />
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(3)}>
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(4)}>
                <SiMysql className="text-7xl text-blue-600" />
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(4)}>
                <BiLogoPostgresql className="text-7xl text-sky-700" />
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(4)}>
                <SiMongodb className="text-7xl text-cyan-500" />
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(2)}>
                <FaNodeJs className="text-7xl text-green-500" />
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(4)}>
                <FaAws className="text-7xl text-blue-700" />
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)}>
                <SiDocker className="text-7xl text-blue-500" />
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)}>
                <SiTypescript className="text-7xl text-blue-500" />
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(4)}>
                <SiTableau className="text-7xl text-blue-500" />
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(4)}>
                <FaGitAlt className="text-7xl text-orange-600" />
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(3)}>
                <SiPostman className="text-7xl text-orange-400" />
            </motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(4)}>
                <SiJira className="text-7xl text-blue-500" />
            </motion.div>
            </motion.div>     
        </div>
    )
}
export default Technologies