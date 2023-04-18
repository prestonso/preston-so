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
      body={<p>Content everywhere doesn’t just mean on every device and on every screen. Is your content seamless across places both physical and digital? <a href="https://abookapart.com/products/immersive-content-and-usability" rel="noopener noreferrer" target="_blank"><em>Immersive Content and Usability</em></a> will get you there. <a href="https://abookapart.com/products/immersive-content-and-usability" rel="noopener noreferrer" target="_blank" className="call-to-action--link">Buy now</a></p>}
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
          <p><strong>Content everywhere.</strong> It’s a promise we’ve long heard breathlessly repeated on stakeholder calls and executive summits. The future of omnichannel content is on every device, every screen, every interface, every touchpoint. But is this <em>truly</em> content everywhere or simply an attempt to shroud an uncomfortable truth? The fact of the matter is that most organizations have yet to take into account the final frontier of content—the built environments, physical settings, and spaces for living and working that define our day-to-day routines.</p>
          <p>Content doesn’t have a true sense of place until it voyages beyond the bluelit screens in our pockets and melds seamlessly with the rooms, walls, and worlds around us. But how do you design <em>immersive content</em> where “content everywhere” becomes a reality and not a catchphrase?</p>
          <p>As it turns out, extending the two-dimensional canvases that have long defined our landscape of web design and interface design into the three-dimensional universe doesn’t require multivariate calculus, 3D graphics expertise, or physics courses. With a critical mass of knowledge about what makes immersive technologies tick and how spatial computing figures in user experiences, you too can build compelling immersive content that enriches your existing writing.</p>
          <p><em>Immersive Content and Usability</em> will give you the strategies and tactics you need to make immersive content a readable—and reachable—reality. Get insights from immersive case studies in realms as disparate as location-based content, low-energy beacons, digital signage, and extended reality. Regardless of your background in spatial computing, and especially if you’ve always found immersive headsets wonky and impenetrable, come with me as we jump away from the devices characterizing our blocky interfaces and into the universes realizing our wildest dreams.</p>
          <p>Don’t believe me? By the time you finish my book, your content will truly be everywhere.</p>
          <p className="call-to-action--block"><a href="https://abookapart.com/products/immersive-content-and-usability" rel="noreferrer noopener" target="_blank" className="call-to-action--link">Buy now</a></p>
        </>
      }
    />
    <Card
      type="light-navy"
      orientation="left"
      title="What's in the book?"
      body={<p><em>Immersive Content and Usability</em>, with a foreword by Reginé Gilbert, gives you the tools you need to think about immersive content, work with spatial tech, build design artifacts, and launch. <a href="https://abookapart.com/products/immersive-content-and-usability" rel="noreferrer noopener" target="_blank" className="call-to-action--link">Buy now</a></p>}
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
              <p>How can immersive content make user experiences more equitable right now and in the future? Spoiler: the metaverse as it stands now isn’t it.</p>
            </li>
          </ul>
        </>
      }
    />
    <Card
      type="main"
      orientation="no"
      title={<>Praise for <em>Immersive Content and Usability</em></>}
      body={
        <>
          <blockquote>
            <p>“Preston So guides design practitioners through an inspiring and actionable journey, traversing between digital rectangles and the physical world. An excellent primer to crafting contextually aware experiences of value, this book equips readers with the essentials needed for creating welcoming, useful, and empowering content.”</p>
            <cite><a href="https://jalehafshar.com" target="_blank" rel="noopener noreferrer">Jaleh Afshar</a>, Director of Design at Meta</cite>
          </blockquote>
          <blockquote>
            <p>“Preston So unpacks a complex and formidable topic and examines it in an engaging and inviting way. Throughout <em>Immersive Content and Usability</em>, So inspires us to use content to create better pathways of connection with information and each other—in real and virtual worlds, and in between.”</p>
            <cite><a href="https://www.erikaabrams.com/" target="_blank" rel="noopener noreferrer">Erika Abrams</a>, Executive creative director of the Los Angeles Design Festival</cite>
          </blockquote>
          <blockquote>
            <p>“Preston leads the way through a thorny thicket of immersive technologies and into the nutritious fruits of inclusive design and equitable experience creation. I yelled ‘Yes!’ out loud as I read this inspiring and accessible book. I think you will too.”</p>
            <cite><a href="https://shimmeringtrashpile.com" target="_blank" rel="noopener noreferrer">Rob Ray</a>, Senior technical experience designer at Electronic Arts and associate professor of design at CSU, San Bernardino</cite>
          </blockquote>
          <p className="call-to-action--block"><a href="https://abookapart.com/products/immersive-content-and-usability" rel="noopener noreferrer" target="_blank" className="call-to-action--link">Buy now</a></p>
        </>
      }
    />
  </Layout>
)

export default ImmersiveContentPage
