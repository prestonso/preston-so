import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Card from "../components/card"

const WorkPage = () => (
  <Layout>
    <SEO title="Preston So" keywords={[`Preston So`, `preston.so`, `prestonso`, `developer`, `product manager`, `developer advocate`]} />
    <Card
      type="intro"
      orientation="no"
      title="Work"
      body={<p>I’ve worked with clients the world over on <strong>omnichannel content strategy</strong>, <strong>headless CMS architectures</strong>, and <strong>voice and immersive strategy</strong>. <Link to="/contact">Hire me!</Link></p>}
    />
    <Card
      type="light-blue"
      orientation="right"
      title="I do voice content & immersive content."
      body={<p>I provide <Link to="/contact">content strategy support and architectural consulting</Link> on content-driven voice and immersive experiences. Past voice work includes <a href="https://www.acquia.com/blog/ask-georgiagov-alexa-skill-citizens-georgia-acquia-labs/12/10/2017/3312516" target="_blank" rel="noopener noreferrer">State of Georgia</a> and <a href="https://www.acquia.com/blog/voice-enabled-search-action-nestle-purina-and-acquia-labs" target="_blank" rel="noopener noreferrer">Nestlé Purina</a>.</p>}
      featureLink="https://www.acquia.com/blog/ask-georgiagov-alexa-skill-citizens-georgia-acquia-labs/12/10/2017/3312516"
      featureTitle="Alexa, ask GeorgiaGov"
      featureBody={<p>Ask GeorgiaGov is the first-ever Alexa skill for citizens of the state of Georgia.</p>}
    />
    <Card
      type="dark-gold"
      orientation="left"
      title="I do headless CMS and web architecture."
      body={<p>I offer <Link to="/contact">expert guidance and architectural support</Link> for teams working on headless CMS, universal JavaScript, and Jamstack projects in an advisory and coaching capacity. Clients include <a href="https://genero.jp/" target="_blank" rel="noopener noreferrer">Genero</a>.</p>}
      featureLink="https://thecrimson.com/"
      featureTitle="The Harvard Crimson"
      featureBody={<p>The first student-designed responsive college newspaper site in the Ivy League.</p>}
    />
    <Card
      type="light-teal"
      orientation="right"
      title="I do written thought leadership."
      body={<p>I direct <Link to="/contact">content marketing and product positioning strategies</Link> with well-positioned articles and treatises that support your business. Clients include <a href="https://srijan.net" target="_blank" rel="noopener noreferrer">Srijan</a> and <a href="https://tag1consulting.com" target="_blank" rel="noopener noreferrer">Tag1 Consulting</a>.</p>}
      featureLink="https://preston.so/books/decoupled-drupal"
      featureTitle={<em>Decoupled Drupal in Practice</em>}
      featureBody={<p>The first and only comprehensive guide to decoupled Drupal across the stack.</p>}
    />
    <Card
      type="dark-violet"
      orientation="left"
      title="I do talks, workshops, trainings, & seminars."
      body={<p>In <Link to="/speaking/">dozens of events</Link> and keynotes in Portuguese, Spanish, and English, I’ve spoken to developer, executive, and youth audiences on stages like SXSW and <a href="https://aneventapart.com/speakers/preston-so" target="_blank" rel="noopener noreferrer">An Event Apart</a>. <Link to="/contact">Hire me to speak!</Link></p>}
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
              <h4><a href="https://events.drupal.org/northamerica2021/sessions/creating-systemic-change-digital-rights-all" target="_blank" rel="noopener noreferrer">Creating systemic change: Digital rights for all</a></h4>
              <p>(with Nani Jansen Reventlow)</p>
              <p>DrupalCon North America 2021</p>
              <p>Virtual</p>
            </li>
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
          </ul>
          <p><small>Photo credit: <a href="https://twitter.com/c_leverington" target="_blank" rel="noopener noreferrer">Charles Leverington</a></small></p>
        </>
      }
    />
    <Card
      type="light-navy"
      orientation="right"
      title="I do meaningful work."
      body={<p>I believe in doing good work that makes an impact and gives back. I contribute to non-profit and open-source efforts and advocate equity and accessibility in all projects. <Link to="/contact">Work with me!</Link></p>}
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

export default WorkPage
