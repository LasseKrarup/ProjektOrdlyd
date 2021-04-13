import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"
import Digt from "../components/digt"

import { motion } from "framer-motion";
import {containerVariants, textVariants, transition, digtParentVariants, digtVariants} from "../components/variants"

import BackgroundPane from "../components/BackgroundPane"
import OrdlydMan from "../components/OrdlydMan"


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

        <motion.div variants={digtParentVariants} initial="hide" animate="show" exit="exit" className="flex flex-col items-start mt-48">
          <Digt variants={digtVariants} className="ml-20" digter="Ditte Boe Sørensen" musiker="Lasse Krarup">(ingen titel)</Digt>
          <Digt variants={digtVariants} className="ml-12" digter="Mascha Mølkjær-Hansen" musiker="Jirasol Pereira">mÅnEdAnS</Digt>
          <Digt variants={digtVariants} className="self-end mr-4" digter="Rakel Fomsgaard Kragh" musiker="Casper Brændstrup">Hovedpine</Digt>
          <Digt variants={digtVariants} className="ml-24" digter="Sigrid Marie Eltved Krogsgård" musiker="Helene Aaboe">Mit værelse</Digt>
          <Digt variants={digtVariants} className="ml-8" digter="Theodor Stoffer" musiker="Lasse Hansen">Jeg er begyndt at strikke</Digt>
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
                  delay: 0
                }
            }}
            transition={transition}
      ></OrdlydMan>
  </Layout>
)

export default Digtene
