import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import OrdlydImg from "../images/ordlyd-raster-sm.png"

const IndexPage = ({ data }) => (
  <Layout bg="#4C4F57" header={false}>
    <SEO title="Hjem" />

    <div className="flex items-center justify-center flex-col">
      <h1 className="text-6xl uppercase text-justify border-white border-4 mx-auto mt-12 mb-8 p-4 inline-flex flex-col"><div>Projekt</div><div>Ordlyd</div></h1>
      <h3 className="lowercase text-2xl">Unges velværde i en pandemi</h3>
    </div>

    <section className="flex flex-row w-10/12 items-center justify-center mx-auto my-12">
      <div className="justify-between flex flex-row w-full">
        <Link to="/about" className="lowercase text-link">Om projekt ordlyd</Link>  
        <Link to="/digtene" className="lowercase text-link">Digtene</Link>
      </div>
    </section>

    <div className="w-screen overflow-hidden absolute bottom-0">
      <div style={{width: "150%"}} className="relative inset-0 -left-1/4">
        <img src={OrdlydImg} alt="Projekt Ordlyd logo" ></img>
     </div>
    </div>

  </Layout>
)

export default IndexPage
