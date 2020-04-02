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
        <li><Link to="/writing/" activeClassName="active">Writing</Link></li>
        <li><Link to="/speaking/" activeClassName="active">Speaking</Link></li>
        <li><Link to="/press/" activeClassName="active">Press</Link></li>
        <li><Link to="/about/" activeClassName="active">About</Link></li>
        <li><Link to="/contact/" activeClassName="active">Contact</Link></li>
        <li><Link to="/newsletter/" activeClassName="active">Newsletter</Link></li>
      </ul>
    </nav>
    <div className="header__language-selector">
      <p><strong>Decoupled Drupal in Practice</strong>: The comprehensive guide to decoupled Drupal across the stack.</p>
      <ul>
        <li><a href="https://www.amazon.com/Decoupled-Drupal-Practice-Architect-Architectures/dp/1484240715/ref=sr_1_1" target="_blank" rel="noopener noreferrer">Available now on Amazon.com</a></li>
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
