import React from 'react';

import { motion } from "framer-motion";

import OrdlydSingle from "../images/ordlyd-single-rasterized.png"

const OrdlydMan = ({initial, animate, exit, transition, className}) => {
    return (
    <div className="h-48 tall:h-auto overflow-hidden fixed bottom-0 left-0 w-screen pointer-events-none z-50">
            <motion.div className="relative w-full" 
                
            >
                <motion.img 
                    initial={initial} 
                    animate={animate} 
                    exit={exit}
                    transition={transition}
                    className={"w-40 2xl:w-52 relative bottom-0 z-10 " + className } 
                    src={OrdlydSingle} 
                    alt="Projekt Ordlyd logo"
                ></motion.img>
            </motion.div>
        </div>
    );
}

export default OrdlydMan;