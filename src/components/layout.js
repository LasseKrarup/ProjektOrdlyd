/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"

const Layout = ({ children, bg, header, digt }) => {

  return (
    <>
      <div style={{backgroundColor: bg}} className="w-screen min-h-screen overflow-auto overflow-x-hidden flex flex-row font-sans text-white relative">
        { header ? <Header digt={digt}></Header> : <></> }
        <main className="w-screen flex-grow">{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  header: true,
  digt: false
}

export default Layout
