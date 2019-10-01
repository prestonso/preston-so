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
      body={<p>Preston is a <strong>product strategist</strong>, <strong>digital experience futurist</strong>, and <strong>developer advocate</strong>.</p>}
    />
    <Card
      type="main"
      orientation="no"
      title="About Preston So"
      body={
        <>
          <p>Preston So is a product strategist, innovation lead, developer advocate, researcher, speaker, and author of <a href="https://www.amazon.com/Decoupled-Drupal-Practice-Architect-Architectures/dp/1484240715/ref=sr_1_1" target="_blank" rel="noopener noreferrer"><em>Decoupled Drupal in Practice</em></a> (Apress, 2018).</p>
          <p>A globally recognized voice on decoupled Drupal and subject matter expert in areas including the decentralized web and conversational design, Preston is Principal Product Manager at <a href="https://gatsbyjs.com" target="_blank" rel="noopener noreferrer">Gatsby</a>, where he works on improving Gatsby’s developer experience, evangelizing its ecosystem, and enabling product development.</p>
          <p>Preston has been a programmer since 1999, a web developer and designer since 2001, a creative professional since 2004, a Drupal developer since 2007, and a manager of local and distributed teams since 2015.</p>
          <p>A three-time speaker at SXSW Interactive (<a href="http://schedule.sxsw.com/2017/events/PP61872" target="_blank" rel="noopener noreferrer">2017</a>, <a href="http://schedule.sxsw.com/2017/events/PP97035" target="_blank" rel="noopener noreferrer">2017 encore</a>, <a href="http://schedule.sxsw.com/2018/events/PP74569" target="_blank" rel="noopener noreferrer">2018</a>), Preston is a sought-after presenter on topics such as user experience, web development, open-source innovation, and emerging technologies. The 50+ events where Preston has spoken include keynotes on five continents and in three languages.</p>
          <p>Prior to Gatsby, Preston was Director of Research and Innovation at <a href="https://acquia.com" target="_blank" rel="noopener noreferrer">Acquia</a>, where he helmed <a href="https://acquia.com/resources/acquia-labs" target="_blank" rel="noopener noreferrer">Acquia Labs</a>, an innovation center architecting groundbreaking projects for clients like the <a href="https://www.acquia.com/blog/ask-georgiagov-alexa-skill-citizens-georgia-acquia-labs/12/10/2017/3312516" target="_blank" rel="noopener noreferrer">State of Georgia</a> and <a href="https://www.acquia.com/blog/voice-enabled-search-action-nestle-purina-and-acquia-labs" target="_blank" rel="noopener noreferrer">Nestlé Purina</a>, and created <em>Experience Express</em>, a travel-inspired column about building and designing digital experiences.</p>
          <p>Previously, Preston oversaw the <a href="https://www.ew.com" target="_blank" rel="noopener noreferrer"><em>Entertainment Weekly</em></a> website and managed its development team at Time Inc. (now Meredith), contributed to the <a href="https://www.drupal.org/project/spark" target="_blank" rel="noopener noreferrer">Spark</a> initiative in the Drupal project, and operated an award-winning freelance web and print design studio. Preston also directed the most recent redesign of <a href="https://thecrimson.com" target="_blank" rel="noopener noreferrer"><em>The Harvard Crimson</em></a>’s online edition, the first student-designed responsive newspaper site in the Ivy League.</p>
          <p>Preston has also given free web development classes in public libraries, co-founded the <a href="https://groups.drupal.org/southern-colorado-scug" target="_blank" rel="noopener noreferrer">Southern Colorado Drupal User Group</a> (est. 2008), and is lead organizer and co-founder of <a href="https://decoupleddays.com" target="_blank" rel="noopener noreferrer">Decoupled Days</a>, a conference about the future of content management systems and their architectures.</p>
        </>
      }
    />
  </Layout>
)

export default AboutPage
