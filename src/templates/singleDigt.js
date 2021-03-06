import React from 'react';
import Digt from '../components/digt';
import Layout from '../components/layout';
import SEO from '../components/seo';

import path from "path"

import { graphql } from "gatsby"

import {motion} from "framer-motion"
import {singleDigtVariants, singleDigtParentVariants} from "../components/variants"
import BackgroundPane from '../components/BackgroundPane';
import OrdlydMan from '../components/OrdlydMan';

import moment from "moment"
moment().format();


const fastTransition = {
    duration: 0.6,
    ease: "easeInOut"
}

const headerList = [
  {title: "tilbage", path: "/digtene"},
  {title: "hjem", path: "/"},
  {title: "om", path: "/about"},
]

const PreReleaseContent = ({props}) => {
    return (
        <>
            <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 absolute p-8 text-xl lg:text-3xl">
                <h3>RELEASE LØRDAG 24/4 16:00</h3>
            </div>
            { props.thumbnail ?
                <div className="w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96 overflow-hidden flex items-center justify-center">
                    <img className="object-cover min-h-full" src={path.join("/", props.thumbnail)} alt={`${props.titel} af ${props.digter}. Musik af ${props.musiker}. Animation af Lasse Herold Krarup`}></img>
                </div>
                :
                <div className="bg-red-400 w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96"></div>
            }
        </>
    );
}

const PostReleaseContent = ({youtubeID}) => {
    return (
        <>
            <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + youtubeID} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; modest-branding" allowFullScreen></iframe>
        </>
    );
}

const SingleDigt = ({data}) => {

    const { digteneJson: {digter, musiker, titel, thumbnail, youtubeID} } = data

    return(
        <Layout digt headerList={headerList}>
            <SEO title={titel}></SEO>

            <BackgroundPane bg="bg-single-digt" transition={fastTransition}></BackgroundPane>

            <motion.div 
            className="pt-24 flex flex-col" 
            variants={singleDigtParentVariants} 
            initial="hide" 
            animate="show" 
            exit="exit">            
                <BackgroundPane bg="bg-single-digt" transition={fastTransition}></BackgroundPane>
                <Digt variants={singleDigtVariants} className="ml-20 md:ml-36 2xl:ml-52 relative" titleClassName="md:text-4xl 2xl:text-5xl" subtitleClassName="md:text-xl 2xl:text-2xl 2xl:mt-2" digter={digter} musiker={musiker} nolink>{titel}</Digt>

                <motion.div variants={singleDigtVariants} className="relative flex mx-4 items-center justify-center flex-grow md:pt-24 xl:pt-12">
                    {
                        moment().isBefore("2021-04-24 16+02") ?
                            <PreReleaseContent props={{digter, musiker, titel, thumbnail}}></PreReleaseContent>
                            :
                            <PostReleaseContent youtubeID={youtubeID}></PostReleaseContent>
                    }
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
            thumbnail
            youtubeID
        }
    }
`