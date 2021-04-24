import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Card from "../../components/card"

const DecoupledDrupalPage = () => (
  <Layout>
    <SEO title="Books by Preston So" keywords={[`Preston So`, `preston.so`, `books`, `author`, `book`, `bibliography`]} />
    <Card
      type="intro"
      orientation="no"
      title={<em>Decoupled Drupal in Practice</em>}
      body={<p>The first comprehensive guide to decoupled Drupal across the stack.</p>}
    />
    <Card
      type="dark-gold book"
      orientation="left"
      title="Decoupled Drupal, across the stack."
      body={<p>The comprehensive authority on decoupled Drupal, and a foreword by <a href="https://dri.es/a-book-for-decoupled-drupal-practitioners" target="_blank" rel="noreferrer noopener">Dries Buytaert</a>, who called this Apress book “a must-have guide,” can only be found in <Link to="/newsletter"><em>Decoupled Drupal in Practice</em></Link>.</p>}
      featureLink="https://preston.so/books/voice-content"
      featureTitle={<em>Decoupled Drupal in Practice</em>}
      featureBody={<p>The first and only comprehensive guide to decoupled Drupal, <strong>available now</strong>.</p>}
    />
    <Card
      type="main"
      orientation="no"
      title={<>Praise for <em>Decoupled Drupal in Practice</em></>}
      body={
        <>
          <p>"A must-have guide to decoupling Drupal ... When you finish reading, I think you will agree that decoupled Drupal is an essential element of the bright future in front of Drupal."<br />
          —<em><a href="https://dri.es/a-book-for-decoupled-drupal-practitioners" target="_blank" rel="noopener noreferrer">Dries Buytaert</a>, Drupal project lead and Acquia founder</em></p>
          <p>"This is a really great book. I've been reading blog posts by Preston, hearing him present, and asking him questions on decoupled every chance I can get and I'm so glad to have those thoughts in a physical form I can read through and consult whenever I have questions."<br />
          —<em><a href="https://knaddison.com" target="_blank" rel="noopener noreferrer">Greg Knaddison</a>, Drupal Security Team member</em></p>
          <p>"I believe I have found my guide by picking up the book <em>Decoupled Drupal in Practice</em> ... I found Preston’s back-to-basics approach to be very helpful and it provided the context I needed. It allowed me to look at past projects and recognize how they were the beginnings of progressive decoupling. As I move further along in the book, I’m feeling more confident and finding my place in the decoupled conversation."<br />
          —<em><a href="https://ozonedesign.com" target="_blank" rel="noopener noreferrer">Andy Olson</a>, Senior Front-End Developer at <a href="https://www.bounteous.com/insights/2019/02/18/exploring-decoupled-drupal-through-eyes-front-end-themer/" target="_blank" rel="noopener noreferrer">Bounteous</a></em></p>
          <p>"Covers pretty much everything you want to know about decoupled Drupal right now."<br />
          —<em><a href="https://nickgs.com" target="_blank" rel="noopener noreferrer">Nick Selvaggio</a>, Director of IT at American Diagnostic</em></p>
        </>
      }
    />
  </Layout>
)

export default DecoupledDrupalPage
