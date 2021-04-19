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

const headerList = [
  {title: "hjem", path: "/"},
  {title: "digtene", path: "/digtene"},
]

const AboutPage = ({ data }) => (
      <div>
        <Layout headerList={headerList}>
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
            <section className="flex flex-col items-end lg:items-start justify-center ml-auto mr-8 lg:ml-48 mt-48 pb-64 xl:ml-64 xl:pt-12 xl:w-7/12 2xl:mt-80 relative z-10">
              <Paragraph>Ordlyd er et projekt, der giver plads til at reflektere eller assimilere noget af det, vi oplevede under pandemien, specifikt isolationen, øjeblikke af social stilhed, men også øjeblikke med indre støj, der spredte sig i forskellige retninger og er skitseret i forskellige polariteter. Vi har alle  oplevet dystopiske øjeblikke under pandemien, svære og overraskede øjeblikke, negative og positive øjeblikke, øjeblikke af inspiration og total tomhed.</Paragraph>
              <Paragraph className="md:pl-12 md:mt-8 xl:mt-12 lg:pl-32 xl:pl-24 lg:pr-24 lg:w-full xl:ml-48 xl:w-full">Ordlyd er et glimt af øjeblikke fanget af 5 forskellige digtere og musiker, hvor ord og lyd er sammenflettet i impulser af poesi og lyd, følelser af inspiration og refleksion. Ord af digtere fra Brønderslev Forfatterskole og lyd fra Det Jyske Musikkonservatoriums studerende smelter sammen til en Ordlyd af isolation, eftertænksomhed og forventning. </Paragraph>
            </section>

            <motion.header variants={textVariants} className="fixed top-0 pt-24 w-full z-20">

            <BackgroundPane bg="bg-about" transition={transition}></BackgroundPane>
                <div>
                    <Title>Om Projekt Ordlyd</Title>
                </div>
            </motion.header>
          </motion.div>

        </Layout>
      </div>
)

export default AboutPage
