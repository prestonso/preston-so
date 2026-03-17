import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Card from "../components/card"

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`Preston So`, `prestonso`, `preston.so`, `about`, `bio`, `technology executive`, `subject matter expert`]} />
    <Card
      type="intro"
      orientation="no"
      title="About"
      body={<p>Preston is a <strong>globally recognized authority</strong> on the intersections of <strong>content, design, and code</strong>, <strong>technology executive leader</strong>, and <strong>author</strong>.</p>}
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
          <p><strong>Preston So</strong> (he/they) is a globally recognized authority on the intersections of content, design, and code and a technology executive leader, with over 22 years of experience building and selling software and 11 years overseeing multinationally distributed cross-functional organizations. He is Chief Commercial Officer at React Bricks and the author of <Link to="/books/immersive-content"><em>Immersive Content and Usability</em></Link> (2023), <Link to="/books/gatsby"><em>Gatsby: The Definitive Guide</em></Link> (021), <Link to="/books/voice-content"><em>Voice Content and Usability</em></Link> (2021), and <Link to="/books/decoupled-drupal"><em>Decoupled Drupal in Practice</em></Link> (2018), each considered the authoritative title in its subject area.</p>
          <p>Named “the smartest guy in the field” by <em>Content Strategy for Mobile</em> author Karen McGrane, a top influencer in Onalytica’s <a href="https://onalytica.com/blog/posts/whos-who-in-digital-experience/" target="_blank" rel="noopener noreferrer">“Who’s Who in Digital Experience”</a>, and “probably the smartest person working in this industry right now” by <em>Web Content Management</em> author Deane Barker, Preston is an editor at <a href="https://alistapart.com/author/preston-so/" target="_blank" rel="noopener noreferrer"><em>A List Apart</em></a>, was a top-read columnist at <a href="https://www.cmswire.com/author/preston-so/" target="_blank" rel="noopener noreferrer"><em>CMSWire</em></a>, and was published in <a href="https://www.smashingmagazine.com/2020/10/using-webxr-with-babylonjs/" target="_blank" rel="noopener noreferrer"><em>Smashing Magazine</em></a>.</p>
          <p>Preston is <Link to="/speaking">a frequent speaker</Link> with 19 years of multilingual keynotes and engagements spanning over 50 conferences, including SXSW Interactive, An Event Apart, and Button. He has appeared in <em>ZDNet</em>, <em>VentureBeat</em>, <em>SDTimes</em>, and media outlets in Australia, Brazil, and Turkey. In 2017, he founded <a href="https://decoupleddays.com" target="_blank" rel="noopener noreferrer">Decoupled Days</a>, the first and only non-profit headless CMS and headless commerce conference, held in New York City, Albuquerque, Montréal, and online.</p>
          <p>As Vice President, Product at dotCMS, Preston led the Product and Design organizations and originated the Universal CMS category and concept, deemed “the right idea” by a top-tier analyst and endorsed by industry CEOs, authors, and experts. As Senior Director, Product Strategy at Oracle, he oversaw developer products and experience, developer relations and marketing, and headless CMS and open-source strategy as a product leader for Oracle Content Management.</p>
          <p>At Gatsby (now Netlify), Preston led the product and design teams for the general availability release of Gatsby Cloud, one of the most anticipated Jamstack product launches of 2019. As Director of Research and Innovation at Acquia, he inaugurated the <a href="https://acquia.com/resources/acquia-labs" target="_blank" rel="noopener noreferrer">Acquia Labs</a> innovation center, directed groundbreaking voice-driven experiences for clients like the <a href="https://www.acquia.com/blog/ask-georgiagov-alexa-skill-citizens-georgia-acquia-labs/12/10/2017/3312516" target="_blank" rel="noopener noreferrer">State of Georgia</a> and <a href="https://www.acquia.com/blog/voice-enabled-search-action-nestle-purina-and-acquia-labs" target="_blank" rel="noopener noreferrer">Nestlé Purina</a>, and drove Acquia’s headless CMS strategy, roadmap, and enablement.</p>
          <p>Previously, Preston oversaw the <a href="https://www.ew.com" target="_blank" rel="noopener noreferrer"><em>Entertainment Weekly</em></a> website and its development team at Time Inc. (now Meredith), contributed to Drupal's open-source <a href="https://www.drupal.org/project/spark" target="_blank" rel="noopener noreferrer">Spark</a> initiative, operated an award-winning freelance web and print design studio with a diverse clientèle across the United States and Brazil, and directed the 2012–13 redesign of <a href="https://thecrimson.com" target="_blank" rel="noopener noreferrer"><em>The Harvard Crimson</em></a>’s online edition, the first student-designed responsive newspaper site in the Ivy League.</p>
          <p>Preston serves on the board of directors for Lambda Literary and the Midwest Open Source Alliance and is based in Chicago, where he can often be found immersing himself in endangered or underserved languages.</p>
          <h3>Short bio</h3>
          <p><strong>Preston So</strong> (he/they) is a globally recognized authority on the intersections of content, design, and code and a technology executive leader, with over 22 years building and selling software and 11 years overseeing multinationally distributed cross-functional organizations. He is Chief Commercial Officer at React Bricks and the author of <Link to="/books/immersive-content"><em>Immersive Content and Usability</em></Link> (2023), <Link to="/books/gatsby"><em>Gatsby: The Definitive Guide</em></Link> (2021), <Link to="/books/voice-content"><em>Voice Content and Usability</em></Link> (2021), and <Link to="/books/decoupled-drupal"><em>Decoupled Drupal in Practice</em></Link> (2018), each considered the authoritative title in its subject area.</p>
          <p>Named “the smartest guy in the field” by <em>Content Strategy for Mobile</em> author Karen McGrane and “probably the smartest person working in this industry right now” by <em>Web Content Management</em> author Deane Barker, Preston is an editor at <a href="https://alistapart.com/author/preston-so/" target="_blank" rel="noopener noreferrer"><em>A List Apart</em></a>, was a former top-read columnist at <a href="https://www.cmswire.com/author/preston-so/" target="_blank" rel="noopener noreferrer"><em>CMSWire</em></a>, and was published in <a href="https://www.smashingmagazine.com/2020/10/using-webxr-with-babylonjs/" target="_blank" rel="noopener noreferrer"><em>Smashing Magazine</em></a>. Preston is <Link to="/speaking">a frequent speaker</Link> with 19 years of keynotes and engagements spanning over 50 conferences, including SXSW Interactive, An Event Apart, and Button. He is based in Chicago, where he can often be found immersing himself in endangered or underserved languages.</p>
          <p class="call-to-action--block"><a href="/preston-so-headshot.jpg" className="call-to-action--link" target="_blank" rel="noopener noreferrer">Download hi-res headshot</a></p>
        </>
      }
    />
  </Layout>
)

export default AboutPage
