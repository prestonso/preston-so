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
        <li><Link to="/press/" activeClassName="active">Press</Link></li>
        <li><Link to="/about/" activeClassName="active">About</Link></li>
        <li><Link to="/contact/" activeClassName="active">Contact</Link></li>
      </ul>
    </nav>
    <div className="header__language-selector">
      <p><Link to="/books/voice-content"><strong><em>Voice Content and Usability</em></strong></Link> is the first-ever, definitive book on voice content from A Book Apart, coming June 22nd.</p>
      <ul>
        <li><Link to="/newsletter">Sign up for preorders</Link></li>
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
