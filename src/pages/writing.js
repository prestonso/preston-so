import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Card from "../components/card"

const WritingPage = () => (
  <Layout>
    <SEO title="Writing" />
    <Card
      type="intro"
      orientation="no"
      title="Writing"
      body={<p>Tutorials, columns, and posts.</p>}
    />
    <Card
      type="main"
      orientation="no"
      title="About Preston So"
      body={
        <>
          <p>Preston So has been a web developer and designer since 2001, a creative professional since 2004, and a Drupal developer since 2007. As Director of Research and Innovation at Acquia, Preston leads new open-source and research initiatives and helms Acquia Labs, the innovation lab featured in international press.</p>
          <p>Previously, Preston managed the <em>Entertainment Weekly</em> website and led its development team at Time Inc. (now Meredith). He also contributed to the Spark initiative in the Drupal project, co-founded the Southern Colorado Drupal User Group (est. 2008), and operated an award-winning freelance web and print design studio. In addition, Preston directed the most recent redesign of <em>The Harvard Crimson</em>'s online edition, producing the first student-designed responsive college newspaper website in the Ivy League.</p>
          <p>Preston has presented keynotes at conferences on four continents in multiple languages and speaks around the world about diverse topics such as decoupled Drupal, front-end development, user experience, open-source innovation, and emerging technologies. Preston is also lead organizer and co-founder of Decoupled Drupal Days, a yearly conference in New York.</p>
          <p><a href="https://linkedin.com/in/prestonso" target="_blank" rel="noopener noreferrer">Find me on LinkedIn</a></p>
        </>
      }
    />
  </Layout>
)

export default WritingPage
