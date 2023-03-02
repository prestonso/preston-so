import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Card from "../../components/card"

const ImmersiveContentPage = () => (
  <Layout>
    <SEO title="Immersive Content and Usability" keywords={[`Preston So`, `preston.so`, `book`, `immersive`, `immersive content`, `spatial content`, `extended reality`, `digital signage`, `augmented reality`]} />
    <Card
      type="intro"
      orientation="no"
      title="Immersive Content and Usability"
      body={<p>The first-ever book on immersive content and spatial content design.</p>}
    />
    <Card
      type="dark-magenta"
      orientation="right"
      title="Does your content have a sense of place?"
      body={<p>Content everywhere doesn’t just mean on every device and on every screen. Is your content seamless across places both physical and digital? <a href="https://abookapart.com/products/immersive-content-and-usability" rel="noopener noreferrer" target="_blank"><em>Immersive Content and Usability</em></a> will get you there. <a href="https://abookapart.com/products/immersive-content-and-usability" rel="noopener noreferrer" target="_blank" className="call-to-action--link">Learn more</a></p>}
      featureLink="https://abookapart.com/products/immersive-content-and-usability"
      featureTitle={<em>Immersive Content and Usability</em>}
      featureBody={<p>The first-ever book on immersive content and spatial content, <strong>coming soon</strong>.</p>}
    />
    <Card
      type="main"
      orientation="no"
      title={<>Why read <em>Immersive Content and Usability</em>?</>}
      body={
        <>
          <p><strong>Picture this:</strong> You’ve spent years honing and perfecting your content, looking for stray siloes here and tamping down orphaned pages there. You’ve made it. The website you’ve carefully crafted is semantically rich, astutely architected, and eminently navigable. But then the overzealous executive team and ambitious product manager call a meeting and demand the ability to deliver the same content via voice, through Amazon Alexa, Google Home, and devices you might have at home but that have long felt impenetrable.</p>
          <p>What do you do? How do you build <em>voice content</em> where “picture this” becomes an impossibility? where leafing through becomes listening through? where navigating becomes negotiating?</p>
          <p>The ongoing technological “quickening” and accelerating demands for multichannel convenience are upending all the old paradigms we used to hold dear: links and sitemaps, navbars and breadcrumbs, calls to action and clicks to subscribe. When all your users have in front of them is a smart speaker without a screen, where do you even begin when it comes to design, content strategy, and accessibility?</p>
          <p><em>Voice Content and Usability</em> will give you the techniques and insights you need to make voice content a tangible—and talkable—reality. Learn from the real-world example of Ask GeorgiaGov, the first-ever Alexa skill for residents of the state of Georgia and one of the earliest content-driven voice interfaces. Whether you’ve never thought about voice interfaces before or you’re knee-deep in an ongoing voice project, join me as we move away from screens and scrollbars and into the realm of sound and speech.</p>
          <p>But don’t take my word for it. By the end, your content will speak for itself.</p>
          <p className="call-to-action--block"><a href="https://abookapart.com/products/immersive-content-and-usability" rel="noreferrer noopener" target="_blank" className="call-to-action--link">Learn more</a></p>
        </>
      }
    />
    <Card
      type="light-navy"
      orientation="left"
      title="What's in the book?"
      body={<p><em>Immersive Content and Usability</em>, with a foreword by Reginé Gilbert, gives you the tools you need to think about immersive content, work with spatial tech, build design artifacts, and launch. <a href="https://abookapart.com/products/immersive-content-and-usability" rel="noreferrer noopener" target="_blank" className="call-to-action--link">Learn more</a></p>}
      listing={
        <>
          <ul>
            <li>
              <h3>Chapter 1</h3>
              <h4>Content’s final frontier</h4>
              <p>Establish the right foundation for working with immersive and spatial content by understanding immersion and types of immersive content.</p>
            </li>
            <li>
              <h3>Chapter 2</h3>
              <h4>The tech of immersion</h4>
              <p>Get started with the underpinnings of immersive tech and learn the inner workings of geolocation, beacons, digital signage, and extended reality.</p>
            </li>
            <li>
              <h3>Chapter 3</h3>
              <h4>What makes content immersive?</h4>
              <p>Whether you’re working with new or existing copy, immersive content challenges us to think in terms of readability and reachability in space.</p>
            </li>
            <li>
              <h3>Chapter 4</h3>
              <h4>Making flow happen</h4>
              <p>Construct the core mechanics of your immersive content by leveraging design artifacts like storyboards, flow diagrams, and spatial maps.</p>
            </li>
            <li>
              <h3>Chapter 5</h3>
              <h4>Ready for liftoff</h4>
              <p>Plan your release and strengthen your implementation through usability and accessibility testing as well as quality assurance and deployment.</p>
            </li>
            <li>
              <h3>Chapter 6</h3>
              <h4>Beyond content’s final frontier</h4>
              <p>How can immersive content make user experiences more equitable right now and in the future? Hint: the metaverse as it stands now isn’t it.</p>
            </li>
          </ul>
        </>
      }
    />
  </Layout>
)

export default ImmersiveContentPage
