import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Card from "../components/card"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Card
      type="intro"
      orientation="no"
      title="Contact"
      body={<p>Coming soon. <Link to="/">Back to preston.so</Link></p>}
    />
  </Layout>
)

export default ContactPage
