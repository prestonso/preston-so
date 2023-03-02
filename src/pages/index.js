import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Card from "../components/card"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Preston So" keywords={[`Preston So`, `preston.so`, `prestonso`, `developer`, `product manager`, `developer advocate`]} />
    <Card
      type="intro"
      orientation="no"
      title="Hi! I’m Preston."
      body={<p>I write, speak, and work on the intersections of <strong>content, design, and code</strong> and lead <strong>product, design, engineering, and innovation</strong> organizations.</p>}
    />
    <Card
      type="dark-magenta"
      orientation="left"
      title="Does your content have a sense of place?"
      titleLink="/books/immersive-content"
      body={<p>Today’s content needs to leap off devices and into the physical spaces we live and work in. Reach the final frontier of content design with my newest book <a href="https://abookapart.com/products/immersive-content-and-usability" rel="noopener noreferrer" target="_blank"><em>Immersive Content and Usability</em></a>. <a href="https://abookapart.com/products/voice-content-and-usability" rel="noopener noreferrer" target="_blank" className="call-to-action--link">Learn more</a></p>}
      featureLink="https://abookapart.com/products/immersive-content-and-usability"
      featureTitle={<em>Immersive Content and Usability</em>}
      featureBody={<p>The first-ever book on immersive content and spatial content, <strong>coming soon</strong>.</p>}
    />
    <Card
      type="light-blue book"
      orientation="right"
      title="Gatsby for everyone."
      titleLink="/books/gatsby"
      body={<p>Learn everything you need to know to build blazing-fast sites with the Gatsby framework and Jamstack architectures thanks to the new O’Reilly book, <a href="https://www.oreilly.com/library/view/gatsby-the-definitive/9781492087502/" rel="noopener noreferrer" target="_blank"><em>Gatsby: The Definitive Guide</em></a>. <a href="https://www.oreilly.com/library/view/gatsby-the-definitive/9781492087502/" rel="noopener noreferrer" target="_blank" className="call-to-action--link">Buy now</a></p>}
      featureLink="https://www.oreilly.com/library/view/gatsby-the-definitive/9781492087502/"
      featureTitle={<em>Gatsby: The Definitive Guide</em>}
      featureBody={<p>The first authoritative book on developing sites with Gatsby, <strong>available now</strong>.</p>}
    />
    <Card
      type="dark-sienna"
      orientation="left"
      title="Does your content speak for itself?"
      titleLink="/books/voice-content"
      body={<p>Voice is fast becoming an urgent baseline for future-proof yet accessible content. Give your copy a voice and don’t get left behind with my A Book Apart book <a href="https://abookapart.com/products/voice-content-and-usability" rel="noopener noreferrer" target="_blank"><em>Voice Content and Usability</em></a>. <a href="https://abookapart.com/products/voice-content-and-usability" rel="noopener noreferrer" target="_blank" className="call-to-action--link">Buy now</a></p>}
      featureLink="https://abookapart.com/products/voice-content-and-usability"
      featureTitle={<em>Voice Content and Usability</em>}
      featureBody={<p>The only book on voice content, and A Book Apart’s first voice title, <strong>available now</strong>.</p>}
    />
    <Card
      type="light-teal"
      orientation="right"
      title="I write books & more."
      titleLink="/books"
      body={<p>I’m an editor for <a href="https://alistapart.com/author/preston-so/" target="_blank" rel="noopener noreferrer"><em>A List Apart</em></a>, a columnist for <a href="https://www.cmswire.com/author/preston-so/" target="_blank" rel="noopener noreferrer"><em>CMSWire</em></a>, and a contributor to <a href="https://www.smashingmagazine.com/author/preston-so/" target="_blank" rel="noopener noreferrer"><em>Smashing Magazine</em></a>. I also wrote the definitive books about <Link to="/books/voice-content">voice content</Link>, <Link to="/books/gatsby">Gatsby</Link>, and <Link to="/books/decoupled-drupal">decoupled Drupal</Link>. <Link to="/writing" className="call-to-action--link">Read my articles</Link></p>}
      listing={
        <>
          <h3>On <Link to="/writing"><em>preston.so</em></Link></h3>
          <ul>
            {data.allContentfulArticle.edges.map(({ node }) => (
              <li>
                <h4><Link to={`/writing/${node.slug}`}>{node.title}</Link></h4>
                <p>{node.originalPublicationDate}</p>
              </li>
            ))}
          </ul>
          <h3>For <a href="https://alistapart.com/author/preston-so/" target="_blank" rel="noopener noreferrer"><em>A List Apart</em></a></h3>
          <ul>
            <li>
              <h4><a href="https://alistapart.com/article/immersive-content-strategy/">Immersive content strategy</a></h4>
              <p>April 29, 2021</p>
            </li>
          </ul>
          <h3>For <a href="https://www.cmswire.com/author/preston-so/" target="_blank" rel="noopener noreferrer"><em>CMSWire</em></a></h3>
          <ul>
            <li>
              <h4><a href="https://www.cmswire.com/digital-experience/why-the-future-lies-in-digital-experience-orchestration-not-management/">Why the future lies in digital experience orchestration, not management</a></h4>
              <p>May 18, 2021</p>
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
              <h4><a href="https://theeuropeanchatbot.com/wp-content/uploads/2023/02/Agenda-2023-33.pdf" target="_blank" rel="noopener noreferrer">Informational conversational interfaces and the role of voice content</a></h4>
              <p>European Chatbot and Conversational AI Summit 2023</p>
              <p>Edinburgh</p>
            </li>
          </ul>
          <h3>Latest</h3>
          <ul>
            <li>
              <h4><a href="https://aneventapart.com/event/denver-2022#s36937" target="_blank" rel="noopener noreferrer">Multilingual design for the web (and beyond)</a></h4>
              <p>An Event Apart San Francisco 2022</p>
              <p>San Francisco</p>
            </li>
            <li>
              <h4><a href="https://aneventapart.com/event/denver-2022#s36937" target="_blank" rel="noopener noreferrer">Multilingual design for the web (and beyond)</a></h4>
              <p>An Event Apart Denver 2022</p>
              <p>Denver</p>
            </li>
            <li>
              <h4><a href="https://www.telerik.com/devreach-2022/agenda?agendaPath=session/940351" target="_blank" rel="noopener noreferrer">Democratizing JavaScript, Jamstack, and beyond for more than just developers</a></h4>
              <p>DevReach Boston 2022</p>
              <p>Boston</p>
            </li>
          </ul>
          <h3>Recent keynotes</h3>
          <ul>
            <li>
              <h4><a href="https://drupaljam.nl/speakers/preston-so" target="_blank" rel="noopener noreferrer">Democratizing the headless CMS</a></h4>
              <p>DrupalJam Utrecht 2022</p>
              <p>Utrecht</p>
            </li>
            <li>
              <h4><a href="https://www.buttonconf.com/2021-program/giving-your-content-a-voice-of-its-own" target="_blank" rel="noopener noreferrer">Giving your content a voice of its own</a></h4>
              <p>Button 2021</p>
              <p>Virtual</p>
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

export const query = graphql`
  {
    allContentfulArticle(
      sort: {
        fields: [originalPublicationDate],
        order: DESC
      },
      limit: 1
    ) {
      edges {
        node {
          title
          slug
          originalPublicationDate(formatString: "MMMM D, YYYY")
        }
      }
    }
  }
`

export default IndexPage
