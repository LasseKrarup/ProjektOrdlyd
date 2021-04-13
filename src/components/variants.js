export const containerVariants = {
    show: {
      transition: {
        delayChildren: 2,
        staggerChildren: 0.5,
      }
    },
    exit: {
      transition: {
        delayChildren: 0,
        staggerChildren: 0
      }
    }
  }
  
export const textVariants = {
    hide: {
        opacity: 0,
        y: 40
    },
    show: {
        opacity: 1,
        y: 0
    },
    exit: {
        opacity: 0 
    }
}

export const transition = {
    duration: 1,
    ease: "easeInOut",
    delay: 0.5
}

export const digtParentVariants = {
    show: {
        transition: {
          delayChildren: 2.5,
          staggerChildren: 0.1,
        }
      },
      exit: {
        transition: {
          delayChildren: 0,
          staggerChildren: 0.1
        }
      }
}

export const digtVariants = {
    hide: {
        opacity: 0,
        y: 40
    },
    show: {
        opacity: 1,
        y: 0
    },
    exit: {
        opacity: [1,0,0],
        x: [0,100,200],
        times: [0,0.8,1]
    }
}

export const singleDigtParentVariants = {
  show: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.8,
      }
    },
    exit: {
      transition: {
        delayChildren: 0,
        staggerChildren: 0.1
      }
    }
}

export const singleDigtVariants = {
  hide: {
      opacity: 0,
      y: 40
  },
  show: {
      opacity: 1,
      y: 0
  },
  exit: {
      opacity: [1,0,0],
      x: [0,100,200],
      times: [0,0.8,1]
  }
}