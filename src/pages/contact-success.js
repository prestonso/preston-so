import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Card from "../components/card"

const ContactSuccessPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Card
      type="intro"
      orientation="no"
      title="Contact"
      body={<p>Thank you for your message! I'll be in touch soon.</p>}
    />
  </Layout>
)

export default ContactSuccessPage
