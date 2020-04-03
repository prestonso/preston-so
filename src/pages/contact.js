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
      body={<p>Interested in hiring me for a <strong>talk</strong>, <strong>webinar</strong>, <strong>workshop</strong>, <strong>podcast</strong>, or <strong>article</strong>? Please contact me through the form below.</p>}
    />
    <Card
      type="main"
      orientation="no"
      title="Contact Preston So"
      body={
        <form
          name="contact"
          method="post"
          action="/contact-success"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div className="card__field">
            <label htmlFor="name">First name</label>
            <input type="text" name="firstname" id="firstname-contact" />
          </div>
          <div className="card__field">
            <label htmlFor="name">Last name</label>
            <input type="text" name="lastname" id="lastname" />
          </div>
          <div className="card__field">
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="card__field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6" />
          </div>
          <div className="card__field">
            <input type="checkbox" id="newsletter" name="newsletter" />
            <label for="newsletter">Subscribe to my monthly newsletter. No spam, just musings.</label>
          </div>
          <ul className="card__actions">
            <li>
              <input type="submit" value="Send message" className="card__field--special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
          <p>
            <Link to="/">Go back home</Link>
          </p>
        </form>
      }
    />
  </Layout>
)

export default ContactPage
