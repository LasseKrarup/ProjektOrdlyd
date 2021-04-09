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
      <div style={{backgroundColor: bg}} className="min-w-screen min-h-screen font-sans text-white relative inset-0">
        { header ? <Header></Header> : <></> }
        <main>{children}</main>
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
