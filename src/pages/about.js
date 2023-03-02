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
      body={<p>Preston is a <strong>product, design, engineering, and innovation leader</strong>, <strong>digital architect and strategist</strong>, <strong>designer and developer advocate</strong>, and <strong>author</strong>.</p>}
    />
    <Card
      type="main"
      orientation="no"
      title="About Preston So"
      body={
        <>
          <blockquote>
            <p>“Probably the smartest person working in this industry right now.”</p>
            <cite><a href="https://deanebarker.net/" target="_blank" rel="noopener noreferrer">Deane Barker</a> (2020), author of <em>Web Content Management</em></cite>
          </blockquote>
          <p><strong>Preston So</strong> (he/they) is a product, design, engineering, and innovation leader, digital architect and strategist, designer and developer advocate, polyglot educator and speaker, and author of <Link to="/books/immersive-content"><em>Immersive Content and Usability</em></Link> (A Book Apart, 2023), <Link to="/books/gatsby"><em>Gatsby: The Definitive Guide</em></Link> (O'Reilly, 2021), <Link to="/books/voice-content"><em>Voice Content and Usability</em></Link> (A Book Apart, 2021), and <Link to="/books/decoupled-drupal"><em>Decoupled Drupal in Practice</em></Link> (Apress, 2018).</p>
          <p>Preston has been a programmer since 1999, a web developer and designer since 2001, a creative professional since 2004, a content architect since 2007, and a conversational and immersive designer since 2016. Since 2015, he has led product, design, engineering, and innovation teams at organizations like Acquia, Time Inc., and Gatsby.</p>
          <p>A globally recognized authority on the intersections of content, design, and code, Preston is Senior Director, Product Strategy at Oracle, where he oversees developer experience, developer relations, headless CMS strategy, and open-source strategy as a product leader for Oracle Content Management.</p>
          <p>Preston is an editor at <a href="https://alistapart.com/author/preston-so/" target="_blank" rel="noopener noreferrer"><em>A List Apart</em></a>, a columnist at <a href="https://www.cmswire.com/author/preston-so/" target="_blank" rel="noopener noreferrer"><em>CMSWire</em></a>, and a contributor to <a href="https://www.smashingmagazine.com/author/preston-so/" target="_blank" rel="noopener noreferrer"><em>Smashing Magazine</em></a>. Named “probably the smartest person working in this industry right now” by <a href="https://www.amazon.com/_/dp/1491908122" target="_blank" rel="noopener noreferrer"><em>Web Content Management</em></a> author <a href="https://deanebarker.net/" target="_blank" rel="noopener noreferrer">Deane Barker</a> in 2020 and a top influencer in Onalytica’s <a href="https://onalytica.com/blog/posts/whos-who-in-digital-experience/" target="_blank" rel="noopener noreferrer">“Who’s Who in Digital Experience”</a> in 2021, he is also Editor in Chief at Tag1 Consulting.</p>
          <p>Preston has spoken twice at <a href="https://aneventapart.com/speakers/preston-so" target="_blank" rel="noopener noreferrer"><em>An Event Apart</em></a> (2020, 2021) and three times at <em>SXSW Interactive</em> (<a href="http://schedule.sxsw.com/2017/events/PP61872" target="_blank" rel="noopener noreferrer">2017</a>, <a href="http://schedule.sxsw.com/2017/events/PP97035" target="_blank" rel="noopener noreferrer">2017 encore</a>, <a href="http://schedule.sxsw.com/2018/events/PP74569" target="_blank" rel="noopener noreferrer">2018</a>), in addition to <Link to="/speaking">dozens of conferences and keynotes</Link> around the world in three languages.</p>
          <p>At Gatsby, Preston led the product and design teams for the general availability release of Gatsby Cloud, one of the most anticipated Jamstack product launches of 2019. As Director of Research and Innovation at Acquia, he launched and led the <a href="https://acquia.com/resources/acquia-labs" target="_blank" rel="noopener noreferrer">Acquia Labs</a> innovation center, directed groundbreaking voice-driven experiences for clients like the <a href="https://www.acquia.com/blog/ask-georgiagov-alexa-skill-citizens-georgia-acquia-labs/12/10/2017/3312516" target="_blank" rel="noopener noreferrer">State of Georgia</a> and <a href="https://www.acquia.com/blog/voice-enabled-search-action-nestle-purina-and-acquia-labs" target="_blank" rel="noopener noreferrer">Nestlé Purina</a>, and drove Acquia’s headless CMS and decoupled Drupal strategy.</p>
          <p>Previously, Preston oversaw the <a href="https://www.ew.com" target="_blank" rel="noopener noreferrer"><em>Entertainment Weekly</em></a> website and its development team at Time Inc. (now Meredith), contributed to Drupal's open-source <a href="https://www.drupal.org/project/spark" target="_blank" rel="noopener noreferrer">Spark</a> initiative, operated a lauded freelance web and print design studio with a diverse clientèle across the United States, and directed the most recent redesign in 2013 of <a href="https://thecrimson.com" target="_blank" rel="noopener noreferrer"><em>The Harvard Crimson</em></a>’s online edition, the first student-designed responsive newspaper site in the Ivy League.</p>
          <p>Preston has given free web development classes in public libraries and in 2017 founded <a href="https://decoupleddays.com" target="_blank" rel="noopener noreferrer">Decoupled Days</a>, a non-profit conference about the future of content management systems, now in its sixth year. He is based in New York City, where he can often be found immersing himself in languages that are endangered or underserved.</p>
          <h3>Short bio</h3>
          <p><strong>Preston So</strong> (he/they) is a product, design, engineering, and innovation leader, digital architect and strategist, designer and developer advocate, polyglot educator and speaker, and author of <Link to="/books/voice-content"><em>Voice Content and Usability</em></Link> (A Book Apart, 2021), <Link to="/books/gatsby"><em>Gatsby: The Definitive Guide</em></Link> (O'Reilly, 2021), and <Link to="/books/decoupled-drupal"><em>Decoupled Drupal in Practice</em></Link> (Apress, 2018). He has been a programmer since 1999, a web developer and designer since 2001, a creative professional since 2004, a content architect since 2007, and a conversational and immersive designer since 2016.</p>
          <p>A product leader at Oracle, Preston has led product, design, engineering, and innovation teams since 2015 at organizations like Acquia, Time Inc., and Gatsby. Preston is an editor at <a href="https://alistapart.com/author/preston-so/" target="_blank" rel="noopener noreferrer"><em>A List Apart</em></a>, a columnist at <a href="https://www.cmswire.com/author/preston-so/" target="_blank" rel="noopener noreferrer"><em>CMSWire</em></a>, and a contributor to <a href="https://www.smashingmagazine.com/author/preston-so/" target="_blank" rel="noopener noreferrer"><em>Smashing Magazine</em></a> and has <Link to="/speaking">delivered keynotes</Link> around the world in three languages. A globally recognized authority on the intersections of content, design, and code, he is based in New York City, where he can often be found immersing himself in languages that are endangered or underserved.</p>
          <p class="call-to-action--block"><a href="/preston-so-headshot.jpg" className="call-to-action--link" target="_blank" rel="noopener noreferrer">Download hi-res headshot</a></p>
        </>
      }
    />
  </Layout>
)

export default AboutPage
