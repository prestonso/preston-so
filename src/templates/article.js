import React from 'react'
import get from 'lodash/get'

import Layout from '../components/layout'
import SEO from "../components/seo"

import Card from "../components/card"

import { MARKS, BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Bold = ({ children }) => <strong>{children}</strong>
const Italic = ({ children }) => <em>{children}</em>
const Underline = ({ children }) => <span className="underline">{children}</span>
const Heading1 = ({ children }) => <h2>{children}</h2>
const Heading2 = ({ children }) => <h3>{children}</h3>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    [MARKS.ITALIC]: text => <Italic>{text}</Italic>,
    [MARKS.UNDERLINE]: text => <Underline>{text}</Underline>,
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => <Heading1>{children}</Heading1>,
    [BLOCKS.HEADING_2]: (node, children) => <Heading2>{children}</Heading2>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      console.log(node.data)
      const { title, description, file } = node.data.target.fields
      const mimeType = file['en-US'].contentType
      const mimeGroup = mimeType.split('/')[0]

      switch (mimeGroup) {
        case 'image':
          return <img
            title={ title ? title['en-US'] : null }
            alt={ description ?  description['en-US'] : null }
            src={ file['en-US'].url }
          />
        case 'application':
          return <a
            alt={ description ?  description['en-US'] : null }
            href={ file['en-US'].url }
            >{ title ? title['en-US'] : file['en-US'].details.fileName }
          </a>
        default:
          return <span style={{backgroundColor: 'red', color: 'white'}}> {mimeType} embedded asset </span>
      }
    },
  },
}

class ArticleTemplate extends React.Component {
  render() {
    const article = get(this.props, 'data.contentfulArticle')

    return (
      <Layout>
        <SEO title={article.title} keywords={[`blog`, `articles`, `writing`, `tutorials`]} />
        <Card
          type="intro"
          orientation="no"
          title={article.title}
          body={article.originalPublicationDate}
        />
        <Card
          type="main"
          orientation="no"
          body={documentToReactComponents(article.body.json, options)}
        />
      </Layout>
    )
  }
}

export default ArticleTemplate

export const pageQuery = graphql`
  query ArticleBySlug($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      title
      slug
      originalPublicationDate(formatString: "MMMM D, YYYY")
      body {
        json
      }
    }
  }
`
