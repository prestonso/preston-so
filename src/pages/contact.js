import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Card from "../components/card"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Preston So" />
    <Card
      type="intro"
      orientation="no"
      title="Contact"
      body={<p>Under construction. <Link to="/">Back to preston.so</Link></p>}
    />
  </Layout>
)

export default ContactPage
