import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="flex flex-row items-center">
      <div style={{height: "1px"}} className="w-10 my-8 mr-4 bg-white"></div>
      <Link to="/" className="text-md text-white">hjem</Link>
    </div>
  </header>
)

export default Header
