import React from 'react';

import {motion} from "framer-motion";

const BackgroundPane = ({className, bg, transition}) => {
    return(
      <motion.div className={"w-full h-full absolute top-0 right-0 z-10 bg-" + bg + " " + className} 
          style={{zIndex: "-10"}} 
          initial={{width: 0}} 
          animate={{
            width: "100%"
          }} 
          exit={{
            width: 0, 
            transition: {
              delay: 0
            }
          }}
          transition={transition}
      >
      </motion.div>
    );
  }

export default BackgroundPane