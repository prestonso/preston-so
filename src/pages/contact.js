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
      body={
        <form
          method="post"
          action="#"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div className="card__field">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="card__field">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="card__field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6" />
          </div>
          <ul className="card__actions">
            <li>
              <input type="submit" value="Send message" className="card__field--special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
        </form>
      }
    />
  </Layout>
)

export default ContactPage
