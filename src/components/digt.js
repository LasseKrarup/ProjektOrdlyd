import React from 'react';
import PropTypes from "prop-types"
import { Link } from "gatsby"
import slugify from "../script/slugify"

import { motion } from "framer-motion";

const fontSize = "text-2xl 2xl:text-4xl"

const Digt = ({children, digter, musiker, className, nolink, variants, titleClassName, subtitleClassName}) => (
    <motion.div variants={variants} className={"inline-flex flex-col my-4 " + className}>
        { nolink ? 
            <h1 className={fontSize + " " + titleClassName}>{children}</h1>    
            :
            <Link to={slugify(children)} className={fontSize + " hover:text-gray-200 transition-colors " + titleClassName}>{children}</Link>
        }
        <div className={"ml-4 text-gray-300 text-base 2xl:text-xl leading-none " + subtitleClassName}>
            <div>af {digter}</div>
            <div>musik af {musiker}</div>
            {nolink && <div>animation af Lasse Herold Krarup</div>}
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