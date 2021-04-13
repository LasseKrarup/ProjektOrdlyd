/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"

const Layout = ({ children, bg, header }) => {

  return (
    <>
      <div style={{backgroundColor: bg}} className="w-screen min-h-screen overflow-auto font-sans text-white relative">
        { header ? <Header></Header> : <></> }
        <main className="w-screen min-h-screen">{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  header: true
}

export default Layout
