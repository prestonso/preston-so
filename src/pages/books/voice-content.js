import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import Card from "../../components/card"

const VoiceContentPage = () => (
  <Layout>
    <SEO title="Voice Content and Usability" keywords={[`Preston So`, `preston.so`, `book`, `voice`, `voice content`, `VUI`, `voice interface`]} />
    <Card
      type="intro"
      orientation="no"
      title={<em>Voice Content and Usability</em>}
      body={<p>The definitive book on voice content and A Book Apart’s first voice title.</p>}
    />
    <Card
      type="dark-sienna"
      orientation="right"
      title="Give your content a voice of its own."
      body={<p>Voice content enriches interactions with content, but it also poses vexing questions. Get the answers from A Book Apart’s first voice title, <em>Voice Content and Usability</em>. <Link to="/newsletter">Sign up for preorders</Link>.</p>}
      featureLink="https://preston.so/books/voice-content"
      featureTitle={<em>Voice Content and Usability</em>}
      featureBody={<p>The only book on voice content, and A Book Apart’s first voice title, coming <strong>June 22nd</strong>.</p>}
    />
    <Card
      type="main"
      orientation="no"
      title={<>Why read <em>Voice Content and Usability</em>?</>}
      body={
        <>
          <p><strong>Picture this:</strong> You’ve spent years honing and perfecting your content, looking for stray siloes here and tamping down orphaned pages there. You’ve made it. The website you’ve carefully crafted is semantically rich, astutely architected, and eminently navigable. But then the overzealous executive team and ambitious product manager call a meeting and demand the ability to deliver the same content via voice, through Amazon Alexa, Google Home, and devices you might have at home but that have long felt impenetrable.</p>
          <p>What do you do? How do you build <em>voice content</em> where “picture this” becomes an impossibility? where leafing through becomes listening through? where navigating becomes negotiating?</p>
          <p>The ongoing technological “quickening” and accelerating demands for multichannel convenience are upending all the old paradigms we used to hold dear: links and sitemaps, navbars and breadcrumbs, calls to action and clicks to subscribe. When all your users have in front of them is a smart speaker without a screen, where do you even begin when it comes to design, content strategy, and accessibility?</p>
          <p>Voice content demands a completely different approach, and it forces us to play in the sandbox not of visual screens and handheld gadgets but rather in the ancient vernacular and instinctual habits of our most primordial practice: natural human conversation. Instead of us contorting our brains to type on keyboards and move cursors around, it’s machines that have to do the heavy lifting to chat with us. In some ways, it’s an advantage. In others, it just reveals how much our content strategy and design practices remain rooted in the visual and artificial rather than the verbal and organic.</p>
          <p><em>Voice Content and Usability</em> will give you the techniques and insights you need to make voice content a tangible—and talkable—reality. Learn from the real-world example of Ask GeorgiaGov, the first-ever Alexa skill for residents of the state of Georgia and one of the earliest content-driven voice interfaces. Whether you’ve never thought about voice interfaces before or you’re knee-deep in an ongoing voice project, join me as we move away from screens and scrollbars and into the realm of sound and speech.</p>
          <p>But don’t take my word for it. By the end, your content will speak for itself.</p>
          <p><Link to="/newsletter"><strong>Sign up for preorders</strong></Link></p>
        </>
      }
    />
    <Card
      type="light-navy"
      orientation="left"
      title="What's in the book?"
      body={<p>With a foreword by Erika Hall, <em>Voice Content and Usability</em> equips you to create compelling voice content, situate it in dialogues and flows, and prepare it to go live. <Link to="/newsletter">Sign up for preorders</Link>.</p>}
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
              <p>Deliver voice content in discoverable ways by leveragaing aural, not visual, approaches to wayfinding rooted in habitable and linear flows.</p>
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
    <Card
      type="main"
      orientation="no"
      title={<>Praise for <em>Voice Content and Usability</em></>}
      body={
        <>
          <blockquote>
            <p>“This approachable, practical guide breaks down the complexities of creating and delivering voice content with tremendous grace and clarity. A must for anyone writing, designing, or building voice interfaces today.”</p>
            <cite><a href="https://sarawb.com" target="_blank" rel="noopener noreferrer">Sara Wachter-Boettcher</a>, Founder, Active Voice and co-author, <em>Design for Real Life</em></cite>
          </blockquote>
          <blockquote>
            <p>“Preston So’s <em>Voice Content and Usability</em> is a fascinating and invaluable guide to the peculiarities and potential of a platform we’re only just beginning to understand. I, for one, would not want to work on a voice interface without it.”</p>
            <cite><a href="https://www.daviddylanthomas.com/" target="_blank" rel="noopener noreferrer">David Dylan Thomas</a>, Founder & CEO, David Dylan Thomas, LLC</cite>
          </blockquote>
          <blockquote>
            <p>“We’ve spent a millennium dreaming about communicating with our machines in human ways. For a while, the technology just wasn’t there to support conversing with inanimate objects, but now it is. Is your content ready? Don’t fret if it isn’t; Preston has your back in this indispensable guide, chock full of useful research and actionable advice for working with voice content.”</p>
            <cite><a href="https://aaron-gustafson.com" target="_blank" rel="noopener noreferrer">Aaron Gustafson</a>, Author, <em>Adaptive Web Design</em></cite>
          </blockquote>
          <blockquote>
            <p>“I've always admired Preston’s ability to fly high and when needed dive into the weeds. This book takes us through the high altitudes of understanding and planning for voice interfaces and a deep dive into the intricacies of content and technical implementation. An all-round view of the future of interactions and how we can design them to be fair and effective.”</p>
            <cite><a href="https://digitalservices.georgia.gov/nikhil-deshpande" target="_blank" rel="noopener noreferrer">Nikhil Deshpande</a>, Chief Digital Officer of the State of Georgia</cite>
          </blockquote>
          <blockquote>
            <p>“<em>Voice Content and Usability</em> by Preston So is a highly readable book packed with practical advice for designers of voice-based conversational systems. Voice systems are brought to life with copious examples from an actual implementation of an Alexa skill created to provide information for residents of Georgia. Among the topics discussed are how to transform web-based content into conversational voice-based content, the elements of dialogue, how to design conversational flow, and methods for testing before and after deployment. A final chapter speculates on how voice technology might develop in the future, addressing societal issues such as inclusion and democratization. The book is peppered with references to relevant readings and concludes with a comprehensive list of useful resources. Highly recommended!”</p>
            <cite><a href="https://www.ulster.ac.uk/staff/mf-mctear" target="_blank" rel="noopener noreferrer">Michael McTear</a>, Emeritus Professor, School of Computing, Ulster University, co-author of <em>The Conversational Interface</em> and author of <em>Conversational AI</em></cite>
          </blockquote>
          <p>Be the first to know when <em>Voice Content and Usability</em> is available. <Link to="/newsletter"><strong>Sign up for preorders</strong></Link></p>
        </>
      }
    />
  </Layout>
)

export default VoiceContentPage
