import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Card from "../../components/card"

const DecoupledDrupalPage = () => (
  <Layout>
    <SEO title="Decoupled Drupal in Practice" keywords={[`Preston So`, `preston.so`, `book`, `author`, `Drupal`, `decoupled Drupal`, `headless Drupal`]} />
    <Card
      type="intro"
      orientation="no"
      title="Decoupled Drupal in Practice"
      body={<p>The first comprehensive guide to decoupled Drupal across the stack.</p>}
    />
    <Card
      type="dark-gold book"
      orientation="left"
      title="Decoupled Drupal, across the stack."
      body={<p>The comprehensive authority on decoupled Drupal, and a foreword by <a href="https://dri.es/a-book-for-decoupled-drupal-practitioners" target="_blank" rel="noreferrer noopener">Dries Buytaert</a>, who called this Apress book “a must-have guide,” can only be found in <a href="https://www.apress.com/gp/book/9781484240717" target="_blank" rel="noopener noreferrer"><em>Decoupled Drupal in Practice</em></a>. <a href="https://www.apress.com/gp/book/9781484240717" target="_blank" rel="noopener noreferrer" className="call-to-action--link">Available now</a></p>}
      featureLink="https://www.apress.com/gp/book/9781484240717"
      featureTitle={<em>Decoupled Drupal in Practice</em>}
      featureBody={<p>The first and only comprehensive guide to decoupled Drupal, <strong>available now</strong>.</p>}
    />
    <Card
      type="light-navy"
      orientation="right"
      title="What's in the book?"
      titleLink="/work"
      body={<p><em>Decoupled Drupal in Practice</em> has everything you need to know to architect and implement decoupled Drupal projects. Get the full-stack finesse and expert knowledge you need. <Link to="/writing/graphql-in-drupal-an-exclusive-excerpt-from-the-forthcoming-book-decoupled-drupal-in-practice" className="call-to-action--link">Read an excerpt</Link></p>}
      listing={
        <>
          <h3>Part 1: Decoupled Drupal fundamentals</h3>
          <ol>
            <li>The changing web</li>
            <li>The server side: From monolithic to decoupled CMS</li>
            <li>The client side: From static to dynamic pages</li>
            <li>Decoupled Drupal</li>
            <li>Advantages of decoupled Drupal</li>
            <li>Disadvantages of decoupled Drupal</li>
          </ol>
          <h3>Part 2: Decoupling Drupal</h3>
          <ol start="7">
            <li>Decoupling Drupal 8 core</li>
            <li>Decoupling Drupal 8 with contributed modules</li>
            <li>Authenticating requests in Drupal 8</li>
          </ol>
          <h3>Part 3: Consuming and manipulating Drupal 8</h3>
          <ol start="10">
            <li>Core REST</li>
            <li>Using Views with core REST</li>
            <li>JSON:API in Drupal</li>
            <li>RELAXed Web Services</li>
            <li><Link to="/writing/graphql-in-drupal-an-exclusive-excerpt-from-the-forthcoming-book-decoupled-drupal-in-practice">GraphQL in Drupal</Link></li>
          </ol>
          <h3>Part 4: The decoupled Drupal ecosystem</h3>
          <ol start="15">
            <li>API-first distributions</li>
            <li>SDKs and reference builds</li>
          </ol>
          <h3>Part 5: Integration with consumers</h3>
          <ol start="17">
            <li>React</li>
            <li>React Native</li>
            <li>Angular</li>
            <li>Vue.js</li>
            <li>Ember</li>
          </ol>
          <h3>Part 6: Advanced topics in decoupled Drupal</h3>
          <ol start="22">
            <li>The REST plugin system</li>
            <li>Contributed modules for advanced use cases</li>
            <li>Schemas and generated documentation</li>
            <li>Caching</li>
            <li>The future of decoupled Drupal</li>
          </ol>
        </>
      }
    />
    <Card
      type="main"
      orientation="no"
      title={<>Praise for <em>Decoupled Drupal in Practice</em></>}
      body={
        <>
          <blockquote>
            <p>“A must-have guide to decoupling Drupal ... When you finish reading, I think you will agree that decoupled Drupal is an essential element of the bright future in front of Drupal.”</p>
            <cite><a href="https://dri.es/a-book-for-decoupled-drupal-practitioners" target="_blank" rel="noopener noreferrer">Dries Buytaert</a>, Drupal project lead and Acquia founder</cite>
          </blockquote>
          <blockquote>
            <p>“This is a really great book. I’ve been reading blog posts by Preston, hearing him present, and asking him questions on decoupled every chance I can get and I’m so glad to have those thoughts in a physical form I can read through and consult whenever I have questions.”</p>
            <cite><a href="https://knaddison.com" target="_blank" rel="noopener noreferrer">Greg Knaddison</a>, Drupal Security Team member</cite>
          </blockquote>
          <blockquote>
            <p>“I believe I have found my guide by picking up the book <em>Decoupled Drupal in Practice</em> ... I found Preston’s back-to-basics approach to be very helpful and it provided the context I needed. It allowed me to look at past projects and recognize how they were the beginnings of progressive decoupling. As I move further along in the book, I’m feeling more confident and finding my place in the decoupled conversation.”</p>
            <cite><a href="https://ozonedesign.com" target="_blank" rel="noopener noreferrer">Andy Olson</a>, Senior Front-End Developer at <a href="https://www.bounteous.com/insights/2019/02/18/exploring-decoupled-drupal-through-eyes-front-end-themer/" target="_blank" rel="noopener noreferrer">Bounteous</a></cite>
          </blockquote>
          <blockquote>
            <p>“Covers pretty much everything you want to know about decoupled Drupal right now.”</p>
            <cite><a href="https://nickgs.com" target="_blank" rel="noopener noreferrer">Nick Selvaggio</a>, Director of IT at American Diagnostic</cite>
          </blockquote>
          <p className="call-to-action--block"><a href="https://www.apress.com/gp/book/9781484240717" target="_blank" rel="noopener noreferrer" className="call-to-action--link">Available now</a></p>
        </>
      }
    />
  </Layout>
)

export default DecoupledDrupalPage
