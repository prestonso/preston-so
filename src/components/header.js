import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <h1 style={{
      padding: `2rem 1.5rem`,
      fontFamily: `'basic-sans', 'Droid Sans', sans-serif`,
    }}>
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
    <nav className="header__nav">
      <ul>
        <li><Link to="/writing/" activeClassName="active">Writing</Link></li>
        <li><Link to="/speaking/" activeClassName="active">Speaking</Link></li>
        <li><Link to="/press/" activeClassName="active">Press</Link></li>
        <li><Link to="/about/" activeClassName="active">About</Link></li>
        <li><Link to="/contact/" activeClassName="active">Contact</Link></li>
      </ul>
    </nav>
    <div className="header__language-selector">
      <p><strong>Decoupled Drupal in Practice</strong>: The comprehensive guide to decoupled Drupal across the stack.</p>
      <ul>
        <li><a href="#">Available now on Amazon.com</a></li>
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
