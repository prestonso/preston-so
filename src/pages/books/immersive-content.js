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
      title="Content, in space."
      body={<p>Content everywhere doesn’t just mean on every device and on every screen. Is your content seamless across places both physical and digital? <a href="https://abookapart.com/products/immersive-content-and-usability" rel="noopener noreferrer" target="_blank"><em>Immersive Content and Usability</em></a> will get you there. <a href="https://abookapart.com/products/voice-content-and-usability" rel="noopener noreferrer" target="_blank" className="call-to-action--link">Learn more</a></p>}
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
              <h4>Conversations with computers</h4>
              <p>Understand how voice differs from the larger conversational landscape when it comes to content strategy and spoken versus written interfaces.</p>
            </li>
            <li>
              <h3>Chapter 2</h3>
              <h4>Getting content ready for voice</h4>
              <p>Author, design, and plan voice content that’s future-proof, by auditing your existing web content so it’s ready for prime time or conceiving new copy.</p>
            </li>
            <li>
              <h3>Chapter 3</h3>
              <h4>Crafting dialogues</h4>
              <p>Connect the dots between content items with the glue of onboarding, prompts, intents, and responses. Good design means good writing.</p>
            </li>
            <li>
              <h3>Chapter 4</h3>
              <h4>Diagramming flows</h4>
              <p>Deliver voice content in discoverable ways by leveraging aural, not visual, approaches to wayfinding rooted in habitable and linear flows.</p>
            </li>
            <li>
              <h3>Chapter 5</h3>
              <h4>Readying voice content for launch</h4>
              <p>Prepare for usability testing and release paradigms that challenge our foregoing web-based approaches in subtle and not-so-subtle ways.</p>
            </li>
            <li>
              <h3>Chapter 6</h3>
              <h4>The future of voice content</h4>
              <p>Learn what’s ahead in voice and how it’s confronting new possibilities—and risks—in accessibility, equity, and the very notion of what content is.</p>
            </li>
          </ul>
        </>
      }
    />
  </Layout>
)

export default ImmersiveContentPage
