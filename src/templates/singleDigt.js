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

            <motion.div className="mt-24" variants={singleDigtParentVariants} initial="hide" animate="show" exit="exit">            
                <BackgroundPane bg="single-digt" transition={fastTransition}></BackgroundPane>
                <Digt variants={singleDigtVariants} className="ml-20" digter={digter} musiker={musiker} nolink>{titel}</Digt>

                <motion.div variants={singleDigtVariants} className="flex my-12 mx-4 items-center justify-center">
                    <div className="bg-red-400 w-64 h-64"></div>
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