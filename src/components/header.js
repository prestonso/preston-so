import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <h1>
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
    <nav className="header__nav">
      <ul>
        <li><Link to="/books/" activeClassName="active" partiallyActive={true}>Books</Link></li>
        <li><Link to="/writing/" activeClassName="active" partiallyActive={true}>Writing</Link></li>
        <li><Link to="/speaking/" activeClassName="active">Speaking</Link></li>
        <li><Link to="/work/" activeClassName="active">Work</Link></li>
        <li><Link to="/about/" activeClassName="active">About</Link></li>
        <li><Link to="/press/" activeClassName="active">Press</Link></li>
        <li><Link to="/contact/" activeClassName="active">Contact</Link></li>
      </ul>
    </nav>
    <div className="header__language-selector">
      <p><a href="https://www.oreilly.com/library/view/gatsby-the-definitive/9781492087502/" rel="noopener noreferrer" target="_blank"><strong><em>Gatsby: The Definitive Guide</em></strong></a> is the first authoritative guide to building with Gatsby, available now.</p>
      <ul>
        <li><a href="https://www.oreilly.com/library/view/gatsby-the-definitive/9781492087502/" rel="noopener noreferrer" target="_blank">Buy now</a></li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
