import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"

import { motion } from "framer-motion"
import {containerVariants, textVariants, transition} from "../components/variants"

import BackgroundPane from "../components/BackgroundPane"
import OrdlydMan from "../components/OrdlydMan"

const Paragraph = ({children, className}) => (
    <motion.p 
      className={"w-9/12 text-justify md:text-lg xl:text-xl mb-4 " + className}
      variants={textVariants}
    >
        {children}
    </motion.p>
)

const AboutPage = ({ data }) => (
      <div>
        <Layout>
          <SEO title="om projekt ordlyd" />

          <BackgroundPane bg="bg-about" transition={transition}></BackgroundPane>

          <OrdlydMan 
            initial={{
              left: "50%",
              x: "-50%"
            }} 
            animate={{
                left:0,
                x: 0
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

          <motion.div className="mt-24 md:mt-64" variants={containerVariants} initial="hide" animate="show" exit="exit">
            <motion.header variants={textVariants} className="fixed top-0 pt-24 w-full">

            <BackgroundPane bg="bg-about" transition={transition}></BackgroundPane>
                <div>
                    <Title>Om Projekt Ordlyd</Title>
                </div>
            </motion.header>
            <section className="flex flex-col items-end lg:items-start justify-center ml-auto mr-8 lg:ml-48 mt-48 pb-64 xl:ml-64 xl:pt-12 xl:w-7/12 2xl:mt-80 relative z-10">
              <Paragraph>Knausgaard taxidermy vaporware kinfolk, mixtape flannel unicorn meh 90's quinoa tbh stumptown fingerstache seitan. Vice tbh kale chips, mustache you probably haven't heard of them cold-pressed succulents craft beer glossier wolf cloud bread af lumbersexual celiac. Wayfarers flannel hell of venmo, you probably haven't heard of them art party chicharrones offal pug freegan poke. Pinterest hexagon</Paragraph>
              <Paragraph className="md:pl-12 md:mt-8 xl:mt-12 lg:pl-32 xl:pl-24 lg:pr-24 lg:w-full xl:ml-48 xl:w-full">Pinterest glossier cliche crucifix gluten-free dreamcatcher try-hard tattooed gochujang affogato hot chicken. Master cleanse slow-carb roof party, pitchfork poutine keytar yr disrupt 3 wolf moon cloud bread portland lo-fi occupy. Pok pok narwhal roof party.</Paragraph>
            </section>
          </motion.div>

        </Layout>
      </div>
)

export default AboutPage
