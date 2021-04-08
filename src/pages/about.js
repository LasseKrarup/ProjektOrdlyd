import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"

import OrdlydSingle from "../images/ordlyd-single-rasterized.png"

const Paragraph = ({children}) => (
    <p className="w-9/12 text-justify mb-4">
        {children}
    </p>
)

const AboutPage = ({ data }) => (
  <Layout bg="#57574C">
    <SEO title="Hjem" />

    <header className="relative">
        <div className="relative">
            <Title>Om Projekt Ordlyd</Title>
        </div>
    </header>

    <section className="flex flex-col items-end justify-center ml-auto mr-8 my-12">
      <Paragraph>Knausgaard taxidermy vaporware kinfolk, mixtape flannel unicorn meh 90's quinoa tbh stumptown fingerstache seitan. Vice tbh kale chips, mustache you probably haven't heard of them cold-pressed succulents craft beer glossier wolf cloud bread af lumbersexual celiac. Wayfarers flannel hell of venmo, you probably haven't heard of them art party chicharrones offal pug freegan poke. Pinterest hexagon</Paragraph>

      <Paragraph>Pinterest glossier cliche crucifix gluten-free dreamcatcher try-hard tattooed gochujang affogato hot chicken. Master cleanse slow-carb roof party, pitchfork poutine keytar yr disrupt 3 wolf moon cloud bread portland lo-fi occupy. Pok pok narwhal roof party.</Paragraph>
    </section>

    <div className="w-screen overflow-hidden absolute bottom-0 left-0">
        <img className="w-4/12" src={OrdlydSingle} alt="Projekt Ordlyd logo" ></img>
    </div>

  </Layout>
)

export default AboutPage
