import React from 'react'
import { Link } from 'gatsby'

export default ({ article }) => (
  <div>
    <h4>
      <Link to={`/writing/${article.slug}`}>{article.title}</Link>
    </h4>
    <small>{article.originalPublicationDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: article.body.childMarkdownRemark.html,
      }}
    />
  </div>
)
