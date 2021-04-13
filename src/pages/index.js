import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import OrdlydSingle from "../images/ordlyd-single-rasterized.png"
import OrdlydBg from "../images/ordlyd-blur.png"

import { motion } from "framer-motion"

const IndexPage = () => {

  const transition = {
    duration: .6,
    ease: [.59,-0.06,.83,1.06]
  }

  const variantsContainer = {
    animate: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.5
      }
    }
  }

  const maskVariants = {
    initial: {
      height: "100%",
      width: "100%"
    },
    animate: {
      height: 0,
      width: 0,
      transition: {
        ...transition,
        duration: 0.5
      }
    }
  }

  const titleParentVariants = {
    animate: {
      transition: {
        delayChildren: 3,
        staggerChildren: 0.1
      }
    }
  }
  const titleVariants = {
    initial: {
      y: 40,
      opacity: 0
    },
    animate: {
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
  }

  return(
        <Layout bg="#4C4F57" header={false}>
          <SEO title="Hjem" />
          <motion.div initial="initial" exit={{opacity: 0}} className="flex items-center justify-center flex-col overflow-hidden">
            <motion.div variants={variantsContainer} animate="animate" className="box-content relative mx-auto mt-12 md:mt-32 mb-8 overflow-hidden">
              <div className="border-white border-4 p-4 lg:p-8 2xl:p-12 overflow-hidden pointer-events-none">
                <motion.h1 variants={titleParentVariants} initial="initial" animate="animate" className="text-6xl md:text-7xl 2xl:text-8xl uppercase text-justify inline-flex flex-col">
                  <div className="overflow-hidden"><motion.span className="block" variants={titleVariants}>Projekt</motion.span></div>
                  <div className="overflow-hidden"><motion.span className="block" variants={titleVariants}>Ordlyd</motion.span></div>
                </motion.h1>
              </div>
              <motion.div variants={maskVariants} className="lines border-t-4 right-0 top-0"></motion.div>
              <motion.div variants={maskVariants} className="lines border-r-4 right-0 bottom-0"></motion.div>
              <motion.div variants={maskVariants} className="lines border-b-4 left-0 bottom-0"></motion.div>
              <motion.div variants={maskVariants} className="lines border-l-4 left-0 top-0"></motion.div>
            </motion.div>
            <motion.h3 initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}} transition={{...transition, delay: 3.2}} className="lowercase text-2xl md:text-3xl 2xl:text-5xl">Unges velvære i en pandemi</motion.h3>
          </motion.div>
          <motion.section initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {delay:0}}} transition={{...transition, delay: 3.8}} className="flex flex-row w-10/12 items-center justify-center mx-auto my-12">
            <div className="justify-between flex flex-row w-full sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl sm:px-16 lg:px-12 xl:px-24 2xl:px-40 lg:-mt-48">
              <Link to="/about" className="lowercase text-link block p-4" exit={{state: {opacity: 0}, delay: 0.2, ease: "easeInOut", duration: 0.6}}>Om projekt ordlyd</Link>
              <Link to="/digtene" className="block lowercase text-link p-4 2xl:pb-16 lg:transform lg:-translate-x-20">Digtene</Link>
            </div>
          </motion.section>
          <div className="w-screen overflow-hidden fixed bottom-0">
            <div style={{width: "150%"}} className="relative -left-1/4">
              <motion.img initial={{opacity: 0}} animate={{opacity: 1,}} exit={{opacity: 0, transition: {delay: 0.5}}} className="w-full relative sm:h-96 2xl:h-giant sm:w-auto sm:mx-auto" src={OrdlydBg} alt="Projekt Ordlyd logo" ></motion.img>
              <motion.img transition={{...transition, duration: 1, delay: 0.5}} className="w-40 2xl:w-52 absolute bottom-0 left-1/2 transform -translate-x-1/2" src={OrdlydSingle} alt="Projekt Ordlyd logo" ></motion.img>
            </div>
          </div>
        </Layout>
  );
}

export default IndexPage
