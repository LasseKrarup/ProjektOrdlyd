import React from 'react';
import Digt from '../components/digt';
import Layout from '../components/layout';
import SEO from '../components/seo';

import { graphql } from "gatsby"

import {motion} from "framer-motion"
import {singleDigtVariants, singleDigtParentVariants} from "../components/variants"
import BackgroundPane from '../components/BackgroundPane';
import OrdlydMan from '../components/OrdlydMan';


const fastTransition = {
    duration: 0.6,
    ease: "easeInOut"
}

const SingleDigt = ({data}) => {

    const { digteneJson: {digter, musiker, titel} } = data

    return(
        <Layout digt>
            <SEO title="(ingen titel)"></SEO>

            <BackgroundPane bg="single-digt" transition={fastTransition}></BackgroundPane>

            <motion.div 
            className="pt-24 flex flex-col" 
            variants={singleDigtParentVariants} 
            initial="hide" 
            animate="show" 
            exit="exit">            
                <BackgroundPane bg="single-digt" transition={fastTransition}></BackgroundPane>
                <Digt variants={singleDigtVariants} className="ml-20 md:ml-36 2xl:ml-52" titleClassName="md:text-4xl 2xl:text-5xl" subtitleClassName="md:text-xl 2xl:text-2xl 2xl:mt-2" digter={digter} musiker={musiker} nolink>{titel}</Digt>

                <motion.div variants={singleDigtVariants} className="flex mx-4 items-center justify-center flex-grow md:pt-24 xl:pt-12">
                    <div className="bg-red-400 w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96"></div>
                </motion.div>
            </motion.div>

            <OrdlydMan className="left-1/2 transform -translate-x-1/2"></OrdlydMan>
        </Layout>
    );
}

export default SingleDigt;

export const query = graphql`
    query ($slug: String!) {
        digteneJson(fields: {slug: {eq: $slug}}) {
            titel
            digter
            musiker
        }
    }
`