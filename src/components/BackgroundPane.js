import React from 'react';

import {motion} from "framer-motion";

const BackgroundPane = ({className, bg, transition}) => {
    return(
      <motion.div className={"w-full h-full absolute top-0 right-0 " + bg + " " + className} 
          initial={{width: 0}} 
          animate={{
            width: "100%"
          }} 
          exit={{
            width: 0, 
            transition: {
              duration: 0.6,
              delay: 0
            }
          }}
          transition={transition}
      >
      </motion.div>
    );
  }

export default BackgroundPane