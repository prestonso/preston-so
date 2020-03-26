import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Card from "../components/card"

const NewsletterSuccessPage = () => (
  <Layout>
    <SEO title="You're subscribed!" />
    <Card
      type="intro"
      orientation="no"
      title="You're subscribed!"
      body={<p>Thanks for subscribing to my newsletter. <Link to="/">Go back home</Link></p>}
    />
  </Layout>
)

export default NewsletterSuccessPage
