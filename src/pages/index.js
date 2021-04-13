import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import OrdlydImg from "../images/ordlyd-raster-sm.png"

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


  return(
        <Layout bg="#4C4F57" header={false}>
          <SEO title="Hjem" />
          <div className="flex items-center justify-center flex-col overflow-hidden">
            <motion.div variants={variantsContainer} animate="animate" className="box-content relative mx-auto mt-12 mb-8 overflow-hidden">
              <div className="border-white border-4 p-4 overflow-hidden">
                <motion.h1 initial={{y: 40, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{type: "spring", stiffness: 240, damping: 12, delay: 3}} className="text-6xl uppercase text-justify inline-flex flex-col"><div>Projekt</div><div>Ordlyd</div></motion.h1>
              </div>
              <motion.div variants={maskVariants} className="lines border-t-4 right-0 top-0"></motion.div>
              <motion.div variants={maskVariants} className="lines border-r-4 right-0 bottom-0"></motion.div>
              <motion.div variants={maskVariants} className="lines border-b-4 left-0 bottom-0"></motion.div>
              <motion.div variants={maskVariants} className="lines border-l-4 left-0 top-0"></motion.div>
            </motion.div>
            <motion.h3 initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}} transition={{...transition, delay: 3.2}} className="lowercase text-2xl">Unges velværde i en pandemi</motion.h3>
          </div>
          <motion.section initial={{opacity: 0}} animate={{opacity: 1}} transition={{...transition, delay: 3.8}} className="flex flex-row w-10/12 items-center justify-center mx-auto my-12">
            <div className="justify-between flex flex-row w-full">
              <Link to="/about" className="lowercase text-link" exit={{state: {opacity: 0}, delay: 0.2, ease: "easeInOut", duration: 0.6}}>Om projekt ordlyd</Link>
              <Link to="/digtene" className="lowercase text-link">Digtene</Link>
            </div>
          </motion.section>
          <div className="w-screen overflow-hidden absolute bottom-0">
            <motion.div initial={{opacity: 0}} animate={{opacity: 1,}} transition={{...transition, duration: 1, delay: 0.5}} style={{width: "150%"}} className="relative inset-0 -left-1/4">
              <img src={OrdlydImg} alt="Projekt Ordlyd logo" ></img>
            </motion.div>
          </div>
        </Layout>
  );
}

export default IndexPage
