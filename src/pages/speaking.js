import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Card from "../components/card"

const SpeakingPage = ({ data }) => (
  <Layout>
    <SEO title="Speaking" keywords={[`speaking`, `lectures`, `keynotes`, `webinars`, `sessions`, `conferences`, `talks`]} />
    <Card
      type="intro"
      orientation="no"
      title="Speaking"
      body={<p>Preston has spoken on a wide range of topics at <strong>over fifty conferences</strong>, on <strong>five continents</strong>, and in <strong>three languages</strong>.</p>}
    />
    <Card
      type="main"
      orientation="no"
      title="Talks"
      body={
        <div className="card__content__listing">
          <ul>
            {data.allNodeTalk.edges.map(({ node }) => (
              <li key={node.id}>
                <h4>
                  {node.link ? (
                    <a href={node.link.uri} target="_blank" rel="noopener noreferrer">{node.title}</a>
                  ) : (
                    <>{node.title}</>
                  )}
                </h4>
                {node.with && <p><small>with {node.with}</small></p>}
                <p>{node.event}</p>
                {node.location && <p>{node.location}</p>}
                <p>
                  <small>
                    {node.date} • {node.category}
                    {node.slides &&
                      <> • <a href={node.slides.uri} target="_blank" rel="noopener noreferrer">Slides</a></>
                    }
                    {node.video &&
                      <> • <a href={node.video.uri} target="_blank" rel="noopener noreferrer">Video</a></>
                    }
                  </small>
                </p>
              </li>
            ))}
          </ul>
        </div>
      }
    />
  </Layout>
)

export const query = graphql`
  query {
    allNodeTalk(
      sort: {
        fields: [field_date]
        order: DESC
      }
    ) {
      edges {
        node {
          id
        	date:field_date
          link:field_link {
            uri
          }
          event:field_event
          video:field_video {
            uri
          }
          slides:field_slides {
            uri
          }
          category:field_category
          location:field_location
          with:field_with
          title
        }
      }
    }
  }
`
export default SpeakingPage
