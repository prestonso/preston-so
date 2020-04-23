import React from "react"

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
          <p>Preston So is a product architect and strategist, digital experience futurist, innovation lead, developer advocate, three-time SXSW speaker, and author of <a href="https://www.amazon.com/Decoupled-Drupal-Practice-Architect-Architectures/dp/1484240715/ref=sr_1_1" target="_blank" rel="noopener noreferrer"><em>Decoupled Drupal in Practice</em></a> (Apress, 2018).</p>
          <p>A globally recognized voice on headless content management systems (CMS) and decoupled Drupal, and subject matter expert on conversational design and the decentralized web, Preston is Senior Director, Product Strategy at <a href="https://oracle.com" target="_blank" rel="noopener noreferrer">Oracle</a>, where he leads product strategy and developer relations for the Oracle Content and Experience (OCE) developer experience. He is also Editor in Chief at <a href="https://tag1consulting.com" target="_blank" rel="noopener noreferrer">Tag1 Consulting</a>, where he directs thought leadership and hosts <em>Tag1 Team Talks</em>, a webinar and podcast series about emerging web technologies.</p>
          <p>Preston has led product, design, engineering, and innovation teams at organizations like <a href="https://gatsbyjs.com" target="_blank" rel="noopener noreferrer">Gatsby</a>, <a href="https://acquia.com" target="_blank" rel="noopener noreferrer">Acquia</a>, and Time Inc. Preston has been a programmer since 1999, a web developer and designer since 2001, a creative professional since 2004, a Drupal developer since 2007, and a manager of local and distributed teams since 2015.</p>
          <p>A three-time speaker at SXSW Interactive (<a href="http://schedule.sxsw.com/2017/events/PP61872" target="_blank" rel="noopener noreferrer">2017</a>, <a href="http://schedule.sxsw.com/2017/events/PP97035" target="_blank" rel="noopener noreferrer">2017 encore</a>, <a href="http://schedule.sxsw.com/2018/events/PP74569" target="_blank" rel="noopener noreferrer">2018</a>), Preston is a sought-after presenter on topics such as user experience, web development, open-source innovation, and emerging technologies. The 50+ events where Preston has spoken include keynotes on five continents and in three languages.</p>
          <p>At Gatsby, Preston led the product and design teams for the general availability release of Gatsby Cloud, one of the most anticipated JAMstack product launches of 2019. As Director of Research and Innovation at Acquia, he launched and led the <a href="https://acquia.com/resources/acquia-labs" target="_blank" rel="noopener noreferrer">Acquia Labs</a> innovation center and directed groundbreaking voice-driven experiences for clients like the <a href="https://www.acquia.com/blog/ask-georgiagov-alexa-skill-citizens-georgia-acquia-labs/12/10/2017/3312516" target="_blank" rel="noopener noreferrer">State of Georgia</a> and <a href="https://www.acquia.com/blog/voice-enabled-search-action-nestle-purina-and-acquia-labs" target="_blank" rel="noopener noreferrer">Nestlé Purina</a>. Preston also drove Acquia’s strategy for headless CMS and decoupled Drupal and authored Experience Express, a column for designers and developers about the future of digital experiences.</p>
          <p>Previously, Preston oversaw the <a href="https://www.ew.com" target="_blank" rel="noopener noreferrer"><em>Entertainment Weekly</em></a> website and managed its development team at Time Inc. (now Meredith), contributed to the open-source <a href="https://www.drupal.org/project/spark" target="_blank" rel="noopener noreferrer">Spark</a> initiative in the Drupal project, and operated a lauded freelance web and print design studio with a diverse clientèle across the United States. He also directed the most recent redesign in 2013 of <a href="https://thecrimson.com" target="_blank" rel="noopener noreferrer"><em>The Harvard Crimson</em></a>’s online edition, the first student-designed responsive newspaper site in the Ivy League.</p>
          <p>Preston has given free web development classes in public libraries and in 2017 founded <a href="https://decoupleddays.com" target="_blank" rel="noopener noreferrer">Decoupled Days</a>, a conference about the future of content management systems and their architectures, now in its fourth year.</p>
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
