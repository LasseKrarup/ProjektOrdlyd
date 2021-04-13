import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"
import Digt from "../components/digt"

import { motion } from "framer-motion";
import {containerVariants, textVariants, transition, digtParentVariants, digtVariants} from "../components/variants"

import BackgroundPane from "../components/BackgroundPane"
import OrdlydMan from "../components/OrdlydMan"
import OrdlydCut from "../images/ordlyd-cut-xl.png"


const Digtene = ({ data }) => (
  <Layout>
    <SEO title="digtene" />
    <BackgroundPane bg="digtene" transition={transition}></BackgroundPane>

    <motion.div className="mt-24" variants={containerVariants} initial="hide" animate="show" exit="exit">
        <motion.header variants={textVariants} className="fixed top-0 pt-24 w-full">

        <BackgroundPane bg="digtene" transition={transition}></BackgroundPane>
            <div className="">
                <Title>Digtene</Title>
            </div>
        </motion.header>

        <motion.div variants={digtParentVariants} initial="hide" animate="show" exit="exit" className="flex flex-col items-start sm:items-center mt-48 md:mt-72 xl:mt-64">
          <Digt variants={digtVariants} className="ml-20 sm:ml-0" digter="Ditte Boe Sørensen" musiker="Lasse Krarup">(ingen titel)</Digt>
          <Digt variants={digtVariants} className="ml-12 sm:-ml-24" digter="Mascha Mølkjær-Hansen" musiker="Jirasol Pereira">mÅnEdAnS</Digt>
          <Digt variants={digtVariants} className="self-end mr-4 sm:mr-24 lg:self-auto lg:ml-64" digter="Rakel Fomsgaard Kragh" musiker="Casper Brændstrup">Hovedpine</Digt>
          <Digt variants={digtVariants} className="ml-24 sm:-ml-40" digter="Sigrid Marie Eltved Krogsgård" musiker="Helene Aaboe">Mit værelse</Digt>
          <Digt variants={digtVariants} className="ml-8 sm:ml-20" digter="Theodor Stoffer" musiker="Lasse Hansen">Jeg er begyndt at strikke</Digt>
        </motion.div>
      </motion.div>

      <OrdlydMan 
            initial={{
              left: "50%",
              x: "-50%"
            }} 
            animate={{
                left:"100%",
                x: "-50%"
            }} 
            exit={{
                left: "50%",
                x: "-50%",
                transition: {
                  duration: 1,
                  delay: 0
                }
            }}
            transition={transition}
      ></OrdlydMan>
      <OrdlydMan 
            initial={{
              left: 0,
              x: "-100%"
            }} 
            animate={{
                left:0,
                x: "-50%"
            }} 
            exit={{
                left: 0,
                x: "-100%",
                transition: {
                  delay: 0
                }
            }}
            transition={{
              duration: 0.28,
              delay: 1.22
            }}
            className="hidden lg:block"
      ></OrdlydMan>

      <motion.img 
        className="hidden lg:block absolute bottom-0 left-0 h-96"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1
        }}
        exit={{
          opacity: 0,
          transition: {
            ...transition,
            delay: 0
          }
        }}
        transition={{
          duration: 1.5,
          delay: 3
        }}
        src={OrdlydCut}></motion.img>
  </Layout>
)

export default Digtene
