import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import OrdlydImg from "../images/ordlyd-raster-sm.png"

import { motion } from "framer-motion"

const transition = {
    duration: 1,
    ease: [.59,-0.06,.83,1.06]
  }

const container = {
  animate: {
    transition: {
      staggerChildren: 1,
    }
  }
}


// Change this to include different directions as variants, then define them in the children (lines) as eg. animate="leftToRight"
const lineVariant = {
  initial: {width: "100%"}, 
  animate: {width: 0}
}

const IndexPage = () => (
        <Layout bg="#4C4F57" header={false}>
          <SEO title="Hjem" />
          <div className="flex items-center justify-center flex-col">
            <motion.div variants={container} animate="animate" className="relative mx-auto mt-12 mb-8">
              <div className="border-white border-4 p-4">
                <h1 className="text-6xl uppercase text-justify inline-flex flex-col"><div>Projekt</div><div>Ordlyd</div></h1>
              </div>
              <motion.div key="1" variants={lineVariant} transition={transition} className="border-t-4 border-pink-500 absolute w-full top-0"></motion.div>
              <motion.div key="2" variants={lineVariant} transition={transition} className="border-pink-500 border-b-4 absolute inset-0"></motion.div>
              <div className="border-r-4 border-pink-500 absolute inset-0"></div>
              <div className="border-l-4 border-pink-500 absolute inset-0"></div>
            </motion.div>
            <h3 className="lowercase text-2xl">Unges velværde i en pandemi</h3>
          </div>
          <section className="flex flex-row w-10/12 items-center justify-center mx-auto my-12">
            <div className="justify-between flex flex-row w-full">
              <Link to="/about" className="lowercase text-link" exit={{state: {opacity: 0}, delay: 0.2, ease: "easeInOut", duration: 0.6}}>Om projekt ordlyd</Link>
              <Link to="/digtene" className="lowercase text-link">Digtene</Link>
            </div>
          </section>
          <div className="w-screen overflow-hidden absolute bottom-0">
            <div style={{width: "150%"}} className="relative inset-0 -left-1/4">
              <img src={OrdlydImg} alt="Projekt Ordlyd logo" ></img>
            </div>

            <motion.div className="w-full h-full absolute inset-0 bg-main"
              transition={{...transition, delay: 0.5}}
              initial={{top: 0}}
              animate={{top: "100%"}}
            ></motion.div>
          </div>
        </Layout>
)

export default IndexPage
