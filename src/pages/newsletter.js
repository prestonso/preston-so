import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Card from "../components/card"

const NewsletterPage = ({ data }) => (
  <Layout>
    <SEO title="Newsletter" keywords={[`newsletter`, `subscribe`, `news`, `monthly`, `updates`]} />
    <Card
      type="intro"
      orientation="no"
      title="Newsletter"
      body={<p>No spam. <strong>Be the first to know</strong> when my new book <Link to="/books/immersive-content"><em>Immersive Content and Usability</em></Link> is out. Also, <strong>occasional resources</strong> and <strong>exclusive content</strong>.</p>}
    />
    <Card
      type="main"
      orientation="no"
      title="Subscribe"
      body={
        <form
          name="newsletter"
          method="post"
          action="/newsletter-success"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="newsletter" />
          <div className="card__field">
            <label htmlFor="email">Preferred name</label>
            <input type="text" name="preferredname" id="preferredname-newsletter" />
          </div>
          <div className="card__field">
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" id="email" />
          </div>
          <input type="submit" value="Subscribe" className="card__field--special" />
        </form>
      }
    />
  </Layout>
)

export default NewsletterPage
