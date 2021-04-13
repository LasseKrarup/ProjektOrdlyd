import React from 'react';
import PropTypes from "prop-types"
import { Link } from "gatsby"
import slugify from "../script/slugify"

import { motion } from "framer-motion";

const Digt = ({children, digter, musiker, className, nolink, variants}) => (
    <motion.div variants={variants} className={"inline-flex flex-col my-4 " + className}>
        { nolink ? 
            <h1 className="text-2xl">{children}</h1>    
            :
            <Link to={slugify(children)} className="text-2xl hover:text-gray-200 transition-colors">{children}</Link>
        }
        <div className="ml-4 text-gray-300 text-base leading-none">
            <div>af {digter}</div>
            <div>musik af {musiker}</div>
        </div>
    </motion.div>
)

Digt.propTypes = {
    children: PropTypes.string.isRequired,
}

Digt.defaultProps = {
    nolink: false
}

export default Digt