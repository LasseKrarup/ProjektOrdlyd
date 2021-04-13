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
      className={"w-9/12 text-justify mb-4 " + className}
      variants={textVariants}
    >
        {children}
    </motion.p>
)

const AboutPage = ({ data }) => (
      <div>
        <Layout>
          <SEO title="om projekt ordlyd" />

          <BackgroundPane bg="about" transition={transition}></BackgroundPane>

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
                  delay: 0
                }
            }}
            transition={transition}
          ></OrdlydMan>

          <motion.div className="mt-24" variants={containerVariants} initial="hide" animate="show" exit="exit">
            <motion.header variants={textVariants} className="fixed top-0 pt-24 w-full">

            <BackgroundPane bg="about" transition={transition}></BackgroundPane>
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
