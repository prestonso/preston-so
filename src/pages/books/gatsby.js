import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Card from "../../components/card"

const GatsbyPage = () => (
  <Layout>
    <SEO title="Gatsby: The Definitive Guide" keywords={[`Preston So`, `preston.so`, `book`, `author`, `gatsbyjs`, `Gatsby`, `jamstack`]} />
    <Card
      type="intro"
      orientation="no"
      title="Gatsby: The Definitive Guide"
      body={<p>The first full book on Gatsby for developers ever to hit bookshelves.</p>}
    />
    <Card
      type="light-blue book"
      orientation="left"
      title="Gatsby, the right way."
      body={<p>Everything you need to know about the Gatsby framework, from starters to source plugins, from static queries to schema customization, is in this O’Reilly book, <a href="https://www.oreilly.com/library/view/gatsby-the-definitive/9781492087502/" target="_blank" rel="noopener noreferrer"><em>Gatsby: The Definitive Guide</em></a>. <a href="https://www.oreilly.com/library/view/gatsby-the-definitive/9781492087502/" target="_blank" rel="noopener noreferrer" className="call-to-action--link">Get early access</a></p>}
      featureLink="https://www.oreilly.com/library/view/gatsby-the-definitive/9781492087502/"
      featureTitle={<em>Gatsby: The Definitive Guide</em>}
      featureBody={<p>The first authoritative book on developing sites with Gatsby, coming <strong>November 2021</strong>.</p>}
    />
    <Card
      type="light-navy"
      orientation="right"
      title="What's in the book?"
      body={<p><a href="https://www.oreilly.com/library/view/gatsby-the-definitive/9781492087502/" target="_blank" rel="noopener noreferrer"><em>Gatsby: The Definitive Guide</em></a> is your end-to-end teacher for Gatsby and the Jamstack, with full coverage to get you up and running quickly and all set for advanced requirements. <a href="https://www.oreilly.com/library/view/gatsby-the-definitive/9781492087502/" target="_blank" rel="noopener noreferrer" className="call-to-action--link">Get early access</a></p>}
      listing={
        <>
          <h3>Part 1: Elementary Gatsby</h3>
          <ol>
            <li>Gatsby fundamentals</li>
            <li>Core elements of Gatsby</li>
            <li>Adding features to Gatsby sites</li>
          </ol>
          <h3>Part 2: Data in Gatsby</h3>
          <ol start="4">
            <li>GraphQL and the Gatsby data layer</li>
            <li>Source plugins and sourcing data</li>
            <li>Programmatic page creation</li>
            <li>Assets in Gatsby</li>
            <li>Adding data-driven features to Gatsby sites</li>
          </ol>
          <h3>Part 3: Extending Gatsby</h3>
          <ol start="9">
            <li>Gatsby plugins and starters</li>
            <li>Gatsby themes</li>
          </ol>
          <h3>Part 4: Production Gatsby</h3>
          <ol start="11">
            <li>Debugging and testing Gatsby</li>
            <li>Deploying Gatsby</li>
          </ol>
          <h3>Part 5: Advanced Gatsby</h3>
          <ol start="13">
            <li>Advanced topics in Gatsby</li>
            <li>Gatsby internals</li>
          </ol>
        </>
      }
    />
  </Layout>
)

export default GatsbyPage
