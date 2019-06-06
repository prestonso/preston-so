import React from 'react'
import { Link } from 'gatsby'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default ({ article }) => (
  <li key={article.id}>
    <h4>
      <Link to={`/writing/${article.slug}`}>{article.title}</Link>
    </h4>
    <p><small>{article.originalPublicationDate}</small></p>
  </li>
)
