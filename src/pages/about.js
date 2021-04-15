import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Card from "../components/card"

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`Preston So`, `prestonso`, `preston.so`, `about`, `bio`, `developer advocate`, `product manager`]} />
    <Card
      type="intro"
      orientation="no"
      title="About"
      body={<p>Preston is a <strong>product strategist</strong>, <strong>developer advocate</strong>, <strong>digital experience futurist</strong>, <strong>innovation lead</strong>, <strong>speaker</strong>, and <strong>book author</strong>.</p>}
    />
    <Card
      type="main"
      orientation="no"
      title="About Preston So"
      body={
        <>
          <p><strong>Preston So</strong> (he/him) is a product architect and strategist, digital experience futurist, innovation lead, developer advocate, three-time SXSW speaker, and author of <em>Voice Content and Usability</em> (A Book Apart, forthcoming 2021), <a href="https://www.oreilly.com/library/view/gatsby-the-definitive/9781492087502/" target="_blank" rel="noopener noreferrer"><em>Gatsby: The Definitive Guide</em></a> (O'Reilly, 2021), and <a href="https://www.apress.com/gp/book/9781484240717" target="_blank" rel="noopener noreferrer"><em>Decoupled Drupal in Practice</em></a> (Apress, 2018).</p>
          <p>Preston has been a programmer since 1999, a web developer and designer since 2001, a creative professional since 2004, and a CMS architect since 2007. Since 2015, he has led product, design, engineering, and innovation teams at organizations like Acquia, Time Inc., and Gatsby.</p>
          <p>A globally recognized subject matter expert on omnichannel content strategy, immersive digital experiences, conversational design, and the decentralized web, Preston is Senior Director, Product Strategy at Oracle, where he oversees developer experience, developer relations, headless CMS strategy, and open-source strategy for Oracle Content Management.</p>
          <p>Preston is an editor at <a href="https://alistapart.com/author/preston-so/" target="_blank" rel="noopener noreferrer"><em>A List Apart</em></a>, columnist at <a href="https://www.cmswire.com/author/preston-so/" target="_blank" rel="noopener noreferrer"><em>CMSWire</em></a>, and a contributor to <a href="https://www.smashingmagazine.com/author/preston-so/" target="_blank" rel="noopener noreferrer"><em>Smashing Magazine</em></a>. Named “probably the smartest person working in this industry right now” by <a href="https://www.amazon.com/_/dp/1491908122" target="_blank" rel="noopener noreferrer"><em>Web Content Management</em></a> author <a href="https://gadgetopia.com/" target="_blank" rel="noopener noreferrer">Deane Barker</a> in 2020 and a top influencer in Onalytica’s <a href="https://onalytica.com/blog/posts/whos-who-in-digital-experience/" target="_blank" rel="noopener noreferrer">“Who’s Who in Digital Experience”</a> in 2021, he is also Editor in Chief at Tag1 Consulting.</p>
          <p>Preston has spoken at <a href="https://aneventapart.com/speakers/preston-so" target="_blank" rel="noopener noreferrer"><em>An Event Apart</em></a> (2020) and three times at <em>SXSW Interactive</em> (<a href="http://schedule.sxsw.com/2017/events/PP61872" target="_blank" rel="noopener noreferrer">2017</a>, <a href="http://schedule.sxsw.com/2017/events/PP97035" target="_blank" rel="noopener noreferrer">2017 encore</a>, <a href="http://schedule.sxsw.com/2018/events/PP74569" target="_blank" rel="noopener noreferrer">2018</a>), in addition to <Link to="/speaking">dozens of conferences and keynotes</Link> around the world in three languages.</p>
          <p>At Gatsby, Preston led the product and design teams for the general availability release of Gatsby Cloud, one of the most anticipated Jamstack product launches of 2019. As Director of Research and Innovation at Acquia, he launched and led the <a href="https://acquia.com/resources/acquia-labs" target="_blank" rel="noopener noreferrer">Acquia Labs</a> innovation center, directed groundbreaking voice-driven experiences for clients like the <a href="https://www.acquia.com/blog/ask-georgiagov-alexa-skill-citizens-georgia-acquia-labs/12/10/2017/3312516" target="_blank" rel="noopener noreferrer">State of Georgia</a> and <a href="https://www.acquia.com/blog/voice-enabled-search-action-nestle-purina-and-acquia-labs" target="_blank" rel="noopener noreferrer">Nestlé Purina</a>, and drove Acquia’s headless CMS and decoupled Drupal strategy.</p>
          <p>Previously, Preston oversaw the <a href="https://www.ew.com" target="_blank" rel="noopener noreferrer"><em>Entertainment Weekly</em></a> website and its development team at Time Inc. (now Meredith), contributed to Drupal's open-source <a href="https://www.drupal.org/project/spark" target="_blank" rel="noopener noreferrer">Spark</a> initiative, operated a lauded freelance web and print design studio with a diverse clientèle across the United States, and directed the most recent redesign in 2013 of <a href="https://thecrimson.com" target="_blank" rel="noopener noreferrer"><em>The Harvard Crimson</em></a>’s online edition, the first student-designed responsive newspaper site in the Ivy League.</p>
          <p>Preston has given free web development classes in public libraries and in 2017 founded <a href="https://decoupleddays.com" target="_blank" rel="noopener noreferrer">Decoupled Days</a>, a non-profit conference about the future of content management systems, now in its fifth year. He is based in New York City.</p>
          <h3>Praise for <em>Decoupled Drupal in Practice</em></h3>
          <p>"A must-have guide to decoupling Drupal ... When you finish reading, I think you will agree that decoupled Drupal is an essential element of the bright future in front of Drupal."<br />
          —<em><a href="https://dri.es" target="_blank" rel="noopener noreferrer">Dries Buytaert</a>, Drupal project lead and Acquia founder</em></p>
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

export default AboutPage
