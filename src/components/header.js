import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import {motion} from "framer-motion"

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
      transition={{delay: 2.5}} 
      className="fixed top-0 left-0 flex flex-row items-center z-20"
    >
      <div style={{height: "1px"}} className="w-10 my-8 mr-4 bg-white"></div>
      { digt ? 
        <Link to="/digtene" className="text-md text-white">tilbage</Link>
        :
        <Link to="/" className="text-md text-white">hjem</Link>
      }
    </motion.div>
  </header>
)

export default Header
