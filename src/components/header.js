import { Link } from "gatsby"
import React from "react"

import {motion} from "framer-motion"

const linkClassNames = "text-white md:text-lg 2xl:text-xl"

const Header = ({ digt }) => (
  <header>
    <motion.div 
      initial={{opacity:0, y: 20}} 
      animate={{opacity: 1, y:0}} 
      exit={{
        opacity: 0,
        transition: {
          delay: 0
        }
      }} 
      transition={{delay: digt ? 1.5 : 2.5}} 
      className="fixed top-0 left-0 flex flex-row items-center z-50"
    >
      <div className="w-10 h-1px 2xl:h-0.5 my-8 md:my-12 mr-4 bg-white"></div>
      { digt ? 
        <Link to="/digtene" className={linkClassNames}>tilbage</Link>
        :
        <Link to="/" className={linkClassNames}>hjem</Link>
      }
    </motion.div>
  </header>
)

export default Header
