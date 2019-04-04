import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Card from "../components/card"

const WritingPage = () => (
  <Layout>
    <SEO title="Writing" keywords={[`blog`, `articles`, `writing`, `tutorials`]} />
    <Card
      type="intro"
      orientation="no"
      title="Writing"
      body={<p>Coming soon. <Link to="/">Back to preston.so</Link></p>}
    />
  </Layout>
)

export default WritingPage
