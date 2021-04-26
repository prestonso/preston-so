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
      title="Hi! I’m Preston."
      body={<p>I write, speak, and work on <strong>omnichannel content</strong>, <strong>immersive experiences</strong>, <strong>voice content</strong>, <strong>content architectures</strong>, and the <strong>future of content strategy</strong>.</p>}
    />
    <Card
      type="dark-sienna"
      orientation="left"
      title="Does your content speak for itself?"
      titleLink="/books/voice-content"
      body={<p>Voice is fast becoming an urgent baseline for future-proof yet accessible content. Give your copy a voice and don’t get left behind with <Link to="/books/voice-content"><em>Voice Content and Usability</em></Link>, my new A Book Apart book. <Link to="/newsletter" className="call-to-action--link">Sign up for preorders</Link></p>}
      featureLink="https://preston.so/books/voice-content"
      featureTitle={<em>Voice Content and Usability</em>}
      featureBody={<p>The only book on voice content, and A Book Apart’s first voice title, coming <strong>June 22nd</strong>.</p>}
    />
    <Card
      type="light-teal"
      orientation="right"
      title="I write books & more."
      titleLink="/writing"
      body={<p>I’m an editor for <a href="https://alistapart.com/author/preston-so/" target="_blank" rel="noopener noreferrer"><em>A List Apart</em></a>, a columnist for <a href="https://www.cmswire.com/author/preston-so/" target="_blank" rel="noopener noreferrer"><em>CMSWire</em></a>, and a contributor to <a href="https://www.smashingmagazine.com/author/preston-so/" target="_blank" rel="noopener noreferrer"><em>Smashing Magazine</em></a>. I also wrote the definitive books about <Link to="/books/voice-content">voice content</Link>, <Link to="/books/gatsby">Gatsby</Link>, and <Link to="/books/decoupled-drupal">decoupled Drupal</Link>. <Link to="/writing" className="call-to-action--link">Read my articles</Link></p>}
      listing={
        <>
          <h3>On <Link to="/writing"><em>preston.so</em></Link></h3>
          <ul>
            <li>
              <h4><a href="https://preston.so/writing/no-persona-left-behind-the-emerging-schism-in-content-management-systems" target="_blank" rel="noopener noreferrer">No persona left behind: The emerging schism in content management systems</a></h4>
              <p>April 29, 2020</p>
            </li>
          </ul>
          <h3>For <a href="https://alistapart.com/author/preston-so/" target="_blank" rel="noopener noreferrer"><em>A List Apart</em></a></h3>
          <ul>
            <li>
              <h4><a href="https://alistapart.com/article/usability-testing-for-voice-content/">Usability testing for voice content</a></h4>
              <p>April 9, 2020</p>
            </li>
          </ul>
          <h3>For <a href="https://www.cmswire.com/author/preston-so/" target="_blank" rel="noopener noreferrer"><em>CMSWire</em></a></h3>
          <ul>
            <li>
              <h4><a href="https://www.cmswire.com/digital-experience/how-the-move-from-web-cms-to-dxp-is-fraying-key-social-contracts/">How the move from web CMS to DXP is fraying key social contracts</a></h4>
              <p>February 9, 2021</p>
            </li>
          </ul>
          <h3>For <a href="https://www.smashingmagazine.com/author/preston-so/" target="_blank" rel="noopener noreferrer"><em>Smashing Magazine</em></a></h3>
          <ul>
            <li>
              <h4><a href="https://www.smashingmagazine.com/2020/10/using-webxr-with-babylonjs/" target="_blank" rel="noopener noreferrer">Using WebXR with Babylon.js</a></h4>
              <p>October 9, 2020</p>
            </li>
          </ul>
        </>
      }
    />
    <Card
      type="dark-gold"
      orientation="left"
      title="I’m available for hire."
      titleLink="/work"
      body={<p>Since 2004, <Link to="/work">I’ve consulted</Link> on CMS architectures, digital experiences, and marketing for clients in India, Japan, and the U.S., with work in headless CMS, web and voice, and content strategy. <Link to="/work" className="call-to-action--link">See my work</Link></p>}
      featureLink="https://thecrimson.com/"
      featureTitle="The Harvard Crimson"
      featureBody={<p>The first student-designed responsive college newspaper site in the Ivy League.</p>}
    />
    <Card
      type="light-blue"
      orientation="right"
      title="I ran an innovation lab."
      titleLink="/work"
      body={<p>I led <a href="https://dri.es/think-beyond-with-acquia-labs" target="_blank" rel="noopener noreferrer">Acquia Labs</a>, which built groundbreaking voice projects for the <a href="https://www.acquia.com/blog/ask-georgiagov-alexa-skill-citizens-georgia-acquia-labs/12/10/2017/3312516" target="_blank" rel="noopener noreferrer">State of Georgia</a> and <a href="https://www.acquia.com/blog/voice-enabled-search-action-nestle-purina-and-acquia-labs" target="_blank" rel="noopener noreferrer">Nestlé Purina</a>, and product, design, and engineering teams at Time Inc., Acquia, and Gatsby. <Link to="/about" className="call-to-action--link">Read about me</Link></p>}
      featureLink="https://www.acquia.com/blog/ask-georgiagov-alexa-skill-citizens-georgia-acquia-labs/12/10/2017/3312516"
      featureTitle="Alexa, ask GeorgiaGov"
      featureBody={<p>Ask GeorgiaGov is the first-ever Alexa skill for citizens of the state of Georgia.</p>}
    />
    <Card
      type="dark-violet"
      orientation="left"
      title="I talk shop worldwide."
      titleLink="/speaking"
      body={<p>I’ve been a speaker since 2008 at <Link to="/speaking/">dozens of conferences</Link>, like SXSW and <a href="https://aneventapart.com/speakers/preston-so" target="_blank" rel="noopener noreferrer">An Event Apart</a>, in three languages. If you’d like me to speak at your event or your company, <Link to="/contact/">I’d love to hear from you</Link>. <Link to="/speaking" className="call-to-action--link">See my talks</Link></p>}
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
      title="I work on open source."
      titleLink="/work"
      body={<p>I wrote the first version of <a href="https://github.com/acquia/waterwheel.js" target="_blank" rel="noopener noreferrer">Waterwheel.js</a>, led the release of <a href="https://github.com/acquia/reservoir" target="_blank" rel="noopener noreferrer">Reservoir</a>, and contributed to Drupal's <a href="https://www.drupal.org/project/spark" target="_blank" rel="noopener noreferrer">Spark</a> initiative. I also organize <a href="https://decoupleddays.com" target="_blank" rel="noopener noreferrer">Decoupled Days</a>, an annual non-profit conference in New York. <Link to="/contact" className="call-to-action--link">Work with me</Link></p>}
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
