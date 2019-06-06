import React from 'react'
import { Link } from 'gatsby'

export default ({ article }) => (
  <li key={article.id}>
    <h4>
      <Link to={`/writing/${article.slug}`}>{article.title}</Link>
    </h4>
    <p><small>{article.originalPublicationDate}</small></p>
  </li>
)
