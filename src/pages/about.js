import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"

import OrdlydSingle from "../images/ordlyd-single-rasterized.png"

import { motion } from "framer-motion"

const Paragraph = ({children, className}) => (
    <motion.p 
      className={"w-9/12 text-justify mb-4 " + className}
      variants={textVariants}
    >
        {children}
    </motion.p>
)

const transition = {
  duration: 1,
  ease: "easeInOut",
  delay: 0.5
}

const containerVariants = {
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
const textVariants = {
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

const BackgroundPane = ({}) => {
  return(
    <motion.div className="w-full h-full absolute top-0 right-0 z-10 bg-about" 
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

const AboutPage = ({ data }) => (
      <div>
        <Layout>
          <SEO title="om projekt ordlyd" />

          <BackgroundPane></BackgroundPane>

          <div className="overflow-hidden fixed bottom-0 left-0 w-screen">
              <motion.div className="relative w-full" 
                initial={{x: "50%"}} 
                animate={{
                  x:0,
                }} 
                exit={{
                  x: "25%",
                  transition: {
                    delay: 0
                  }
                }}
                transition={transition}
              >
                <motion.img 
                  initial={{x: "-50%"}} 
                  animate={{
                    x:0,
                  }} 
                  exit={{
                    x: 0, 
                    transition: {
                      ...transition, 
                      delay: 0
                    }
                  }}
                  transition={transition}
                  className="w-40" 
                  src={OrdlydSingle} 
                  alt="Projekt Ordlyd logo"
                ></motion.img>
              </motion.div>
          </div>

          <motion.div className="mt-24" variants={containerVariants} initial="hide" animate="show" exit="exit">
            <motion.header variants={textVariants} className="fixed top-0 pt-24 w-full">

            <BackgroundPane></BackgroundPane>
                <div className="">
                    <Title>Om Projekt Ordlyd</Title>
                </div>
            </motion.header>
            <section className="flex flex-col items-end justify-center ml-auto mr-8 mt-48 pb-64">
              <Paragraph>Knausgaard taxidermy vaporware kinfolk, mixtape flannel unicorn meh 90's quinoa tbh stumptown fingerstache seitan. Vice tbh kale chips, mustache you probably haven't heard of them cold-pressed succulents craft beer glossier wolf cloud bread af lumbersexual celiac. Wayfarers flannel hell of venmo, you probably haven't heard of them art party chicharrones offal pug freegan poke. Pinterest hexagon</Paragraph>
              <Paragraph>Pinterest glossier cliche crucifix gluten-free dreamcatcher try-hard tattooed gochujang affogato hot chicken. Master cleanse slow-carb roof party, pitchfork poutine keytar yr disrupt 3 wolf moon cloud bread portland lo-fi occupy. Pok pok narwhal roof party.</Paragraph>
            </section>
          </motion.div>

        </Layout>
      </div>
)

export default AboutPage
