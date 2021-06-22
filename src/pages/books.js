import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Card from "../components/card"

const BooksPage = () => (
  <Layout>
    <SEO title="Books" keywords={[`Preston So`, `preston.so`, `books`, `author`, `book`, `bibliography`]} />
    <Card
      type="intro"
      orientation="no"
      title="Books"
      body={<p>My books cover <strong>content strategy</strong> and <strong>content architectures</strong> and include the authoritative titles on <Link to="/books/voice-content"><strong>voice content</strong></Link>, <Link to="/books/gatsby"><strong>Gatsby</strong></Link>, and <Link to="/books/decoupled-drupal"><strong>decoupled Drupal</strong></Link>.</p>}
    />
    <Card
      type="dark-sienna"
      orientation="left"
      title="Voice content for all."
      titleLink="/books/voice-content"
      body={<p>How can we make our web-biased content ready for voice? How does voice scramble our design and content strategy? Find out in my new A Book Apart book, <a href="https://abookapart.com/products/voice-content-and-usability" rel="noopener noreferrer" target="_blank"><em>Voice Content and Usability</em></a>. <a href="https://abookapart.com/products/voice-content-and-usability" rel="noopener noreferrer" target="_blank" className="call-to-action--link">Buy now</a></p>}
      featureLink="https://abookapart.com/products/voice-content-and-usability"
      featureTitle={<em>Voice Content and Usability</em>}
      featureBody={<p>The only book on voice content, and A Book Apart’s first voice title, <strong>available now</strong>.</p>}
    />
    <Card
      type="light-blue book"
      orientation="right"
      title="Gatsby, the right way."
      titleLink="/books/gatsby"
      body={<p>Everything you need to know about the Gatsby framework, from starters to source plugins, from static queries to schema customization, is in this O’Reilly book, <Link to="/books/gatsby"><em>Gatsby: The Definitive Guide</em></Link>. <Link to="/books/gatsby" className="call-to-action--link">What’s in the book?</Link></p>}
      featureLink="https://preston.so/books/gatsby"
      featureTitle={<em>Gatsby: The Definitive Guide</em>}
      featureBody={<p>The first authoritative book on developing sites with Gatsby, coming <strong>November 2021</strong>.</p>}
    />
    <Card
      type="dark-gold book"
      orientation="left"
      title="Decoupled Drupal, across the stack."
      titleLink="/books/decoupled-drupal"
      body={<p>The comprehensive authority on decoupled Drupal, with a foreword by <a href="https://dri.es/a-book-for-decoupled-drupal-practitioners" target="_blank" rel="noreferrer noopener">Dries Buytaert</a>, who called this Apress book “a must-have guide,” can only be found in <Link to="/books/decoupled-drupal"><em>Decoupled Drupal in Practice</em></Link>. <Link to="/books/decoupled-drupal" className="call-to-action--link">What’s in the book?</Link></p>}
      featureLink="https://preston.so/books/decoupled-drupal"
      featureTitle={<em>Decoupled Drupal in Practice</em>}
      featureBody={<p>The first and only comprehensive guide to decoupled Drupal, <strong>available now</strong>.</p>}
    />
  </Layout>
)

export default BooksPage
