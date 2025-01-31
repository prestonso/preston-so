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
      body={<p>Preston is a <strong>product, design, engineering, and executive leader</strong>, <strong>digital architect and strategist</strong>, <strong>designer and developer advocate</strong>, and <strong>author</strong>.</p>}
    />
    <Card
      type="main"
      orientation="no"
      title="About Preston So"
      body={
        <>
          <blockquote>
            <p>“The smartest guy in the field.”</p>
            <cite>—<a href="https://karenmcgrane.com/" target="_blank" rel="noopener noreferrer">Karen McGrane</a> (2024), author of <em>Content Strategy for Mobile</em></cite>
          </blockquote>
          <blockquote>
            <p>“Probably the smartest person working in this industry right now.”</p>
            <cite>—<a href="https://deanebarker.net/" target="_blank" rel="noopener noreferrer">Deane Barker</a> (2020), author of <em>Web Content Management</em></cite>
          </blockquote>
          <p><strong>Preston So</strong> (he/they) is a product executive with over 21 years of experience in software, 18 years in B2B SaaS and content technologies, and 10 years overseeing product, design, engineering, and developer relations functions at organizations such as Oracle, Acquia, dotCMS, Time Inc., and Gatsby. He is Vice President, Product at dotCMS and the author of <Link to="/books/immersive-content"><em>Immersive Content and Usability</em></Link> (A Book Apart, 2023), <Link to="/books/gatsby"><em>Gatsby: The Definitive Guide</em></Link> (O'Reilly, 2021), <Link to="/books/voice-content"><em>Voice Content and Usability</em></Link> (A Book Apart, 2021), and <Link to="/books/decoupled-drupal"><em>Decoupled Drupal in Practice</em></Link> (Apress, 2018).</p>
          <p>Preston is a globally recognized authority on the intersections of content, design, and code. Named “the smartest guy in the field” by <em>Content Strategy for Mobile</em> author Karen McGrane, a top influencer in Onalytica’s <a href="https://onalytica.com/blog/posts/whos-who-in-digital-experience/" target="_blank" rel="noopener noreferrer">“Who’s Who in Digital Experience”</a>, and “probably the smartest person working in this industry right now” by <em>Web Content Management</em> author Deane Barker, Preston has been a programmer since 1999, a web developer and designer since 2001, a creative professional since 2004, a content architect since 2007, and a conversational and immersive designer since 2016. He is an editor at <a href="https://alistapart.com/author/preston-so/" target="_blank" rel="noopener noreferrer"><em>A List Apart</em></a>, a former top-read columnist at <a href="https://www.cmswire.com/author/preston-so/" target="_blank" rel="noopener noreferrer"><em>CMSWire</em></a>, and published in <a href="https://www.smashingmagazine.com/2020/10/using-webxr-with-babylonjs/" target="_blank" rel="noopener noreferrer"><em>Smashing Magazine</em></a>.</p>
          <p>Preston is a frequent presenter with 19 years of speaking engagements spanning over 50 conferences, including SXSW Interactive (<a href="http://schedule.sxsw.com/2017/events/PP61872" target="_blank" rel="noopener noreferrer">2017</a>, <a href="http://schedule.sxsw.com/2017/events/PP97035" target="_blank" rel="noopener noreferrer">2017 encore</a>, <a href="http://schedule.sxsw.com/2018/events/PP74569" target="_blank" rel="noopener noreferrer">2018</a>, <a href="https://schedule.sxsw.com/2022/events/PP115406" target="_blank" rel="noopener noreferrer">2022</a>) and <a href="https://aneventapart.com/speakers/preston-so" target="_blank" rel="noopener noreferrer"><em>An Event Apart</em></a> (2020–22) and <Link to="/speaking">keynotes in three languages</Link>. He has appeared in <em>ZDNet</em>, <em>VentureBeat</em>, <em>SDTimes</em>, and media outlets in Australia, Brazil, and Turkey. In 2017, he founded <a href="https://decoupleddays.com" target="_blank" rel="noopener noreferrer">Decoupled Days</a>, the first and only non-profit headless CMS and headless commerce conference, held in New York City and Albuquerque.</p>
          <p>As Senior Director, Product Strategy at Oracle, he oversaw developer products, developer experience, developer relations, developer marketing, headless CMS strategy, and open-source strategy as a product leader for Oracle Content Management.</p>
          <p>At Gatsby (now Netlify), Preston led the product and design teams for the general availability release of Gatsby Cloud, one of the most anticipated Jamstack product launches of 2019. As Director of Research and Innovation at Acquia, he launched and led the <a href="https://acquia.com/resources/acquia-labs" target="_blank" rel="noopener noreferrer">Acquia Labs</a> innovation center, directed groundbreaking voice-driven experiences for clients like the <a href="https://www.acquia.com/blog/ask-georgiagov-alexa-skill-citizens-georgia-acquia-labs/12/10/2017/3312516" target="_blank" rel="noopener noreferrer">State of Georgia</a> and <a href="https://www.acquia.com/blog/voice-enabled-search-action-nestle-purina-and-acquia-labs" target="_blank" rel="noopener noreferrer">Nestlé Purina</a>, and drove Acquia’s headless CMS and decoupled Drupal product strategy.</p>
          <p>Previously, Preston oversaw the <a href="https://www.ew.com" target="_blank" rel="noopener noreferrer"><em>Entertainment Weekly</em></a> website and its development team at Time Inc. (now Meredith), contributed to Drupal's open-source <a href="https://www.drupal.org/project/spark" target="_blank" rel="noopener noreferrer">Spark</a> initiative, operated a lauded freelance web and print design studio with a diverse clientèle across the United States and Brazil, and directed the 2012–13 redesign of <a href="https://thecrimson.com" target="_blank" rel="noopener noreferrer"><em>The Harvard Crimson</em></a>’s online edition, the first student-designed responsive newspaper site in the Ivy League.</p>
          <p>Preston’s blog <Link to="/">preston.so</Link> covers a diverse range of topics such as omnichannel content strategy and multimodal content design, conversational and immersive design, content management systems and architectures, modern digital experiences and full-stack development, and multimodal accessibility and inclusive design. Preston once gave free web development classes in public libraries and is based in New York City, where he can often be found immersing himself in languages that are endangered or underserved.</p>
          <h3>Short bio</h3>
          <p><strong>Preston So</strong> (he/they) is a product executive with over 21 years of experience in software, 18 years in B2B SaaS and content technologies, and 10 years leading product, design, engineering, and developer relations functions at organizations such as Oracle, Acquia, dotCMS, Time Inc., and Gatsby. He is Vice President, Product at dotCMS and the author of <Link to="/books/immersive-content"><em>Immersive Content and Usability</em></Link> (A Book Apart, 2023), <Link to="/books/gatsby"><em>Gatsby: The Definitive Guide</em></Link> (O'Reilly, 2021), <Link to="/books/voice-content"><em>Voice Content and Usability</em></Link> (A Book Apart, 2021), and <Link to="/books/decoupled-drupal"><em>Decoupled Drupal in Practice</em></Link> (Apress, 2018).</p>
          <p>Named “the smartest guy in the field” by <em>Content Strategy for Mobile</em> author Karen McGrane and “probably the smartest person working in this industry right now” by <em>Web Content Management</em> author Deane Barker, Preston is a globally recognized authority on the intersections of content, design, and code. He is an editor at <a href="https://alistapart.com/author/preston-so/" target="_blank" rel="noopener noreferrer"><em>A List Apart</em></a>, a former top-read columnist at <a href="https://www.cmswire.com/author/preston-so/" target="_blank" rel="noopener noreferrer"><em>CMSWire</em></a>, and published in <a href="https://www.smashingmagazine.com/2020/10/using-webxr-with-babylonjs/" target="_blank" rel="noopener noreferrer"><em>Smashing Magazine</em></a>. Preston is a frequent presenter with 19 years of speaking engagements spanning over 50 conferences, including SXSW Interactive (<a href="http://schedule.sxsw.com/2017/events/PP61872" target="_blank" rel="noopener noreferrer">2017</a>, <a href="http://schedule.sxsw.com/2017/events/PP97035" target="_blank" rel="noopener noreferrer">2017 encore</a>, <a href="http://schedule.sxsw.com/2018/events/PP74569" target="_blank" rel="noopener noreferrer">2018</a>) and <a href="https://aneventapart.com/speakers/preston-so" target="_blank" rel="noopener noreferrer"><em>An Event Apart</em></a> (2020–22) and <Link to="/speaking">keynotes in three languages</Link>. He is based in New York City, where he can often be found immersing himself in languages that are endangered or underserved.</p>
          <p class="call-to-action--block"><a href="/preston-so-headshot.jpg" className="call-to-action--link" target="_blank" rel="noopener noreferrer">Download hi-res headshot</a></p>
        </>
      }
    />
  </Layout>
)

export default AboutPage
