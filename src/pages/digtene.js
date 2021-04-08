import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"

import OrdlydSingle from "../images/ordlyd-single-rasterized.png"

const Digt = ({children, digter, musiker, className}) => (
    <div className={"inline-flex flex-col my-4 " + className}>
        <p className="text-2xl">{children}</p>
        <div className="ml-4 text-gray-300 text-base">
            <div>af {digter}</div>
            <div>musik af {musiker}</div>
        </div>
    </div>
)

const Digtene = ({ data }) => (
  <Layout bg="#4C5756">
    <SEO title="Hjem" />

    <header className="relative">
        <div className="relative">
            <Title>Digtene</Title>
        </div>
    </header>

    <div className="flex flex-col items-start">
        <Digt className="ml-20" digter="Ditte Boe Sørensen" musiker="Lasse Krarup">(ingen titel)</Digt>
        <Digt className="ml-12" digter="Mascha Mølkjær-Hansen" musiker="Jirasol Pereira">mÅnEdAnS</Digt>
        <Digt className="self-end mr-4" digter="Rakel Fomsgaard Kragh" musiker="Casper Brændstrup">Hovedpine</Digt>
        <Digt className="ml-24" digter="Sigrid Marie Eltved Krogsgård" musiker="Helene Aaboe">Mit værelse</Digt>
        <Digt className="ml-8" digter="Theodor Stoffer" musiker="Lasse Hansen">Jeg er begyndt at strikke</Digt>
    </div>

    <div className="w-4/12 overflow-hidden absolute bottom-0 right-0">
    <img className="transform translate-x-1/2" src={OrdlydSingle} alt="Projekt Ordlyd logo" ></img>
    </div>
  </Layout>
)

export default Digtene
