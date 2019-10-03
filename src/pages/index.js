import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Card from "../components/card"

const IndexPage = () => (
  <Layout>
    <SEO title="Preston So" keywords={[`Preston So`, `preston.so`, `prestonso`, `developer`, `product manager`, `developer advocate`]} />
    <Card
      type="intro"
      orientation="no"
      title="Hi! I'm Preston."
      body={<p>I work, speak, and write on topics like <strong>digital experiences</strong>, <strong>headless CMS</strong>, <strong>the decentralized web</strong>, <strong>conversational design</strong>, and <strong>the future of content</strong>.</p>}
    />
    <Card
      type="voice"
      orientation="right"
      title="I ran an innovation lab."
      body={<p>I launched <a href="https://acquia.com/resources/acquia-labs" target="_blank" rel="noopener noreferrer">Acquia Labs</a>, an innovation lab at <a href="https://www.acquia.com/" target="_blank" rel="noopener noreferrer">Acquia</a>, the open-source digital experience company, where I also did product strategy and developer evangelism.</p>}
      featureLink="https://www.acquia.com/blog/ask-georgiagov-alexa-skill-citizens-georgia-acquia-labs/12/10/2017/3312516"
      featureTitle="Alexa, ask GeorgiaGov"
      featureBody={<p>Ask GeorgiaGov is the first-ever Alexa skill for citizens of the state of Georgia.</p>}
    />
    <Card
      type="work"
      orientation="left"
      title="I design experiences."
      body={<p>Since 2004, I've designed experiences and consulted on user experience for clients across the United States, including work in web, print, brand, and conversational along the way.</p>}
      featureLink="https://thecrimson.com/"
      featureTitle="The Harvard Crimson"
      featureBody={<p>The first student-designed responsive college newspaper site in the Ivy League.</p>}
    />
    <Card
      type="writing"
      orientation="right"
      title="I write books & blogs."
      body={<p>I wrote <a href="https://www.amazon.com/Decoupled-Drupal-Practice-Architect-Architectures/dp/1484240715/ref=sr_1_1" target="_blank" rel="noopener noreferrer">the book on decoupled Drupal</a> (with a foreword by <a href="https://dri.es/a-book-for-decoupled-drupal-practitioners" target="_blank" rel="noopener noreferrer">Dries</a>) and created <em>Experience Express</em>, a column of travelogues and tutorials for developers building digital experiences.</p>}
      featureLink="https://www.amazon.com/Decoupled-Drupal-Practice-Architect-Architectures/dp/1484240715/ref=sr_1_1"
      featureTitle={<em>Decoupled Drupal in Practice</em>}
      featureBody={<p>The first and only comprehensive guide to decoupled Drupal across the stack.</p>}
    />
    <Card
      type="speaking"
      orientation="left"
      title="I talk shop worldwide."
      body={<p>I've been a speaker for more than a decade at over <Link to="/speaking/">fifty conferences</Link> on four continents. If you'd like me to speak at your event or your organization, <Link to="/contact/">I'd love to hear from you</Link>.</p>}
      listing={
        <>
          <h3>Upcoming</h3>
          <ul>
            <li>
              <h4><a href="https://reactconf.com.br/" target="_blank" rel="noopener noreferrer">Gatsby hoje em dia e no futuro</a></h4>
              <p>ReactConf Brazil 2019</p>
              <p>São Paulo</p>
            </li>
          </ul>
          <h3>Latest</h3>
          <ul>
            <li>
              <h4><a href="https://www.gatsbyjs.com/resources/gatsby-days/" target="_blank" rel="noopener noreferrer">Live preview with Gatsby and decoupled Drupal</a></h4>
              <p>Gatsby Days London 2019</p>
              <p>London</p>
            </li>
            <li>
              <h4><a href="https://www.cascadiaphp.com/schedule" target="_blank" rel="noopener noreferrer">Blazing fast websites with Gatsby and Drupal</a></h4>
              <p>Cascadia PHP Portland 2019</p>
              <p>Portland</p>
            </li>
          </ul>
          <h3>Recent keynotes</h3>
          <ul>
            <li>
              <h4><a href="http://camp2019.drupalpune.com/schedule" target="_blank" rel="noopener noreferrer">The distributed CMS: From system to stack</a></h4>
              <p>DrupalCamp Pune 2019</p>
              <p>Pune</p>
            </li>
            <li>
              <h4><a href="https://drupalnorth.org/en/decoupled-drupal-summit" target="_blank" rel="noopener noreferrer">The fourth wave of the content management system</a></h4>
              <p>Drupal North Decoupled Summit 2019</p>
              <p>Montréal</p>
            </li>
            <li>
              <h4><a href="https://cluj2019.drupaldays.org/keynote-the-fourth-wave-of-the-content-management-system" target="_blank" rel="noopener noreferrer">The fourth wave of the content management system</a></h4>
              <p>Drupal Dev Days Cluj-Napoca 2019</p>
              <p>Cluj-Napoca</p>
            </li>
          </ul>
          <p><small>Photo credit: <a href="https://twitter.com/c_leverington" target="_blank" rel="noopener noreferrer">Charles Leverington</a></small></p>
        </>
      }
    />
    <Card
      type="open-source"
      orientation="right"
      title="I work on open source."
      body={<p>I wrote the initial version of <a href="https://github.com/acquia/waterwheel.js" target="_blank" rel="noopener noreferrer">Waterwheel.js</a>, led the release of <a href="https://github.com/acquia/reservoir" target="_blank" rel="noopener noreferrer">Reservoir</a>, and contributed to the <a href="https://www.drupal.org/project/spark" target="_blank" rel="noopener noreferrer">Spark</a> initiative. I also organize <a href="https://decoupleddays.com" target="_blank" rel="noopener noreferrer">Decoupled Days</a>, an annual conference in New York.</p>}
      listing={
        <>
          <h3>Authored</h3>
          <ul>
            <li><h4><a href="https://github.com/acquia/waterwheel.js" target="_blank" rel="noopener noreferrer">Waterwheel.js</a></h4><p>The JavaScript SDK for Drupal</p></li>
          </ul>
          <h3>Contributed</h3>
          <ul>
            <li><h4><a href="https://www.drupal.org/project/spark" target="_blank" rel="noopener noreferrer">Spark</a></h4><p>A Drupal distribution for editors</p></li>
          </ul>
          <h3>Organized</h3>
          <ul>
            <li><h4><a href="https://decoupleddays.com" target="_blank" rel="noopener noreferrer">Decoupled Days</a></h4><p>A conference on the future of CMS</p></li>
          </ul>
          <h3>Released</h3>
          <ul>
            <li><h4><a href="https://github.com/acquia/reservoir" target="_blank" rel="noopener noreferrer">Reservoir</a></h4><p>A back end for your front end</p></li>
            <li><h4><a href="https://github.com/acquia/ember-drupal-waterwheel" target="_blank" rel="noopener noreferrer">ember-drupal-waterwheel</a></h4><p>An Ember CLI plugin for Drupal</p></li>
            <li><h4><a href="https://github.com/acquia/ember-waterwheel-app" target="_blank" rel="noopener noreferrer">ember-waterwheel-app</a></h4><p>An Ember reference app for Drupal</p></li>
            <li><h4><a href="https://github.com/acquia/react-waterwheel-app" target="_blank" rel="noopener noreferrer">react-waterwheel-app</a></h4><p>A React reference app for Drupal</p></li>
          </ul>
        </>
      }
    />
  </Layout>
)

export default IndexPage
