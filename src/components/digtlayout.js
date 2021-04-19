
import React from "react"
import PropTypes from "prop-types"
 
import Header from "./header"

import OrdlydSingle from "../images/ordlyd-single-rasterized.png"
 
 const DigtLayout = ({ children, bg, headerList }) => {

 
   return (
       <div style={{backgroundColor: bg}} className="min-w-screen min-h-screen font-sans text-white absolute inset-0">
         <Header digt={true} headerList={headerList}></Header>
         <main>{children}</main>

        <div className="w-screen overflow-hidden fixed bottom-0 flex justify-center">
            <img className="w-1/3" src={OrdlydSingle} alt="Projekt Ordlyd logo" ></img>
        </div>
       </div>
   )
 }
 
 DigtLayout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default DigtLayout
 