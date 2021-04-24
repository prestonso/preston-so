import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Card from "../components/card"

const BooksPage = () => (
  <Layout>
    <SEO title="Books by Preston So" keywords={[`Preston So`, `preston.so`, `books`, `author`, `book`, `bibliography`]} />
    <Card
      type="intro"
      orientation="no"
      title="Books"
      body={<p>I write at the intersection of <strong>content strategy</strong> and <strong>content architectures</strong>, with authoritative titles on <Link to="/books/voice-content"><strong>voice content</strong></Link>, <Link to="/books/gatsby"><strong>Gatsby</strong></Link>, and <Link to="/books/decoupled-drupal"><strong>decoupled Drupal</strong></Link>.</p>}
    />
    <Card
      type="dark-sienna"
      orientation="left"
      title="Voice content for all."
      titleLink="/books/voice-content"
      body={<p>Voice is fast becoming an urgent baseline for future-proof yet accessible content. Don’t get left behind and enable your users with my new A Book Apart book, <Link to="/books/voice-content"><em>Voice Content and Usability</em></Link>.</p>}
      featureLink="https://preston.so/books/voice-content"
      featureTitle={<em>Voice Content and Usability</em>}
      featureBody={<p>The only book on voice content, and A Book Apart’s first voice title, coming <strong>June 22nd</strong>.</p>}
    />
    <Card
      type="light-blue book"
      orientation="right"
      title="Gatsby, the right way."
      titleLink="/books/gatsby"
      body={<p>Everything you need to know about the Gatsby framework, from starters to source plugins, from static queries to schema customization, is in this O'Reilly book, <Link to="/books/gatsby"><em>Gatsby: The Definitive Guide</em></Link>.</p>}
      featureLink="https://preston.so/books/gatsby"
      featureTitle={<em>Gatsby: The Definitive Guide</em>}
      featureBody={<p>The first authoritative book on developing sites with Gatsby, coming <strong>November 2021</strong>.</p>}
    />
    <Card
      type="dark-gold book"
      orientation="left"
      title="Decoupled Drupal, across the stack."
      titleLink="/books/decoupled-drupal"
      body={<p>The comprehensive authority on decoupled Drupal, with a foreword by <a href="https://dri.es/a-book-for-decoupled-drupal-practitioners" target="_blank" rel="noreferrer noopener">Dries Buytaert</a>, who called this Apress book “a must-have guide,” can only be found in <Link to="/books/decoupled-drupal"><em>Decoupled Drupal in Practice</em></Link>.</p>}
      featureLink="https://preston.so/books/decoupled-drupal"
      featureTitle={<em>Decoupled Drupal in Practice</em>}
      featureBody={<p>The first and only comprehensive guide to decoupled Drupal, <strong>available now</strong>.</p>}
    />
  </Layout>
)

export default BooksPage
