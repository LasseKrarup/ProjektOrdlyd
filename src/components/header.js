import { Link } from "gatsby"
import React from "react"

import {motion} from "framer-motion"

const linkClassNames = "text-white md:text-lg 2xl:text-xl"

const Header = ({ digt, headerList }) => { 
  const parentVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: digt ? 1.5 : 2.5
      }
    }
  }
  
  const childVariants = {
    initial: {opacity:0, y: 20},
    animate: {opacity: 1, y:0},
    exit: {
      opacity: 0,
      transition: {
        delay: 0
      }
    } 
  }

  return(
      <motion.header variants={parentVariants} initial="initial" animate="animate" exit="exit" className="fixed top-0 left-0 z-50 flex flex-col mt-8 md:mt-12">
        {
          headerList && headerList.map(
            (val, i) =>
              <motion.div 
                variants={childVariants}
                className="flex flex-row items-center"
              >
                <div className="w-10 h-1px 2xl:h-0.5 mr-4 bg-white"></div>
        
                <Link key={i} to={val.path} className={linkClassNames}>{val.title}</Link>
              </motion.div>
          )
        }
      </motion.header>
  )
}

export default Header
