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
      body={<p>I launched <a href="https://acquia.com/resources/acquia-labs" target="_blank" rel="noopener noreferrer">Acquia Labs</a>, an innovation lab at <a href="https://www.acquia.com/" target="_blank" rel="noopener noreferrer">Acquia</a>, the open-source digital experience company, where I also did product strategy and developer relations.</p>}
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
      body={<p>I wrote <a href="https://www.amazon.com/Decoupled-Drupal-Practice-Architect-Architectures/dp/1484240715/ref=sr_1_1" target="_blank" rel="noopener noreferrer">the book on decoupled Drupal</a>, with a foreword by <a href="https://dri.es/a-book-for-decoupled-drupal-practitioners" target="_blank" rel="noopener noreferrer">Dries Buytaert</a>, who called it a "must-have guide." I've also written for <a href="https://alistapart.com/author/preston-so/" target="_blank" rel="noopener noreferrer"><em>A List Apart</em></a>, <a href="https://www.smashingmagazine.com/author/preston-so/" target="_blank" rel="noopener noreferrer"><em>Smashing Magazine</em></a>, and <a href="https://www.cmswire.com/author/preston-so/" target="_blank" rel="noopener noreferrer"><em>CMSWire</em></a>.</p>}
      featureLink="https://www.amazon.com/Decoupled-Drupal-Practice-Architect-Architectures/dp/1484240715/ref=sr_1_1"
      featureTitle={<em>Decoupled Drupal in Practice</em>}
      featureBody={<p>The first and only comprehensive guide to decoupled Drupal across the stack.</p>}
    />
    <Card
      type="speaking"
      orientation="left"
      title="I talk shop worldwide."
      body={<p>I've been a speaker for more than a decade at over <Link to="/speaking/">fifty conferences</Link> on five continents. If you'd like me to speak at your event or your organization, <Link to="/contact/">I'd love to hear from you</Link>.</p>}
      listing={
        <>
          <h3>Upcoming</h3>
          <ul>
            <li>
              <h4><a href="https://omnichannelx.digital/session/how-to-make-the-move-to-headless-cms-and-true-omnichannel/" target="_blank" rel="noopener noreferrer">How to make the move to headless CMS and true omnichannel</a></h4>
              <p>OmnichannelX 2021</p>
              <p>Virtual</p>
            </li>
          </ul>
          <h3>Latest</h3>
          <ul>
            <li>
              <h4><a href="https://thedevconf.com/tdc/2020/recifeonline/trilha-stadium-quarta" target="_blank" rel="noopener noreferrer">O CMS distribuído e o futuro do gerenciamento de conteúdo</a></h4>
              <p>TDC Recife 2020</p>
              <p>Virtual</p>
            </li>
            <li>
              <h4><a href="https://www.laouc.org/equipo/aplicaciones-multiplataformas-con-cx-content-y-flutter/" target="_blank" rel="noopener noreferrer">Aplicaciones multiplataformas con CX Content y Flutter</a></h4>
              <p>Oracle Groundbreakers Latin America 2020</p>
              <p>Virtual</p>
            </li>
          </ul>
          <h3>Recent keynotes</h3>
          <ul>
            <li>
              <h4><a href="https://2020.drupalmanila.org/session/keynote" target="_blank" rel="noopener noreferrer">A new grand compromise in content management</a></h4>
              <p>DrupalCamp Manila 2020</p>
              <p>Virtual</p>
            </li>
            <li>
              <h4><a href="https://events.apifirstcms.org/sessions/opening-of-keynote" target="_blank" rel="noopener noreferrer">The new CMS paradox</a></h4>
              <p>API-first DrupalCamp Tokyo 2019</p>
              <p>Tokyo</p>
            </li>
            <li>
              <h4><a href="https://drupal-camp2019.den-japan.org/" target="_blank" rel="noopener noreferrer">The new CMS paradox</a></h4>
              <p>DENCamp Japan 2019</p>
              <p>Nagoya</p>
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
      body={<p>I wrote the initial version of <a href="https://github.com/acquia/waterwheel.js" target="_blank" rel="noopener noreferrer">Waterwheel.js</a>, led the release of <a href="https://github.com/acquia/reservoir" target="_blank" rel="noopener noreferrer">Reservoir</a>, and contributed to the <a href="https://www.drupal.org/project/spark" target="_blank" rel="noopener noreferrer">Spark</a> initiative. I also organize <a href="https://decoupleddays.com" target="_blank" rel="noopener noreferrer">Decoupled Days</a>, an annual non-profit conference in New York.</p>}
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
