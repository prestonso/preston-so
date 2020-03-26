import { Link } from "gatsby"
import React from "react"

let date = new Date();

const Footer = () => (
  <footer>
    <div className="footer__container">
      <h3>Thanks for stopping by.</h3>
      <p>&copy; 2007–{date.getFullYear()} <Link to="/">Preston So</Link>. <em>Designed entirely in the browser.</em></p>
      <p>Powered by <a href="https://gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>, <a href="https://www.drupal.org/" target="_blank" rel="noopener noreferrer">Drupal 8</a>, and <a href="https://www.oracle.com/marketingcloud/products/content-and-experience/" target="_blank" rel="noopener noreferrer">Oracle Content and Experience</a>.</p>
      <p>Find me on <a href="https://github.com/prestonso" target="_blank" rel="noopener noreferrer">GitHub</a>, <a href="https://twitter.com/prestonso" target="_blank" rel="noopener noreferrer">Twitter</a>, <a href="https://www.linkedin.com/in/prestonso" target="_blank" rel="noopener noreferrer">LinkedIn</a>, and <a href="https://www.drupal.org/u/prestonso" target="_blank" rel="noopener noreferrer">Drupal.org</a>.</p>
    </div>
  </footer>
)

export default Footer
