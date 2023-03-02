import { Link } from "gatsby"
import React from "react"
import { Location } from "@reach/router"

import Card from "../components/card"

import generoLogo from "../images/partner-genero.png"
import srijanLogo from "../images/partner-srijan.png"
import tag1Logo from "../images/partner-tag1.png"

let date = new Date();

const Footer = (props) => (
  <>
    <Location>
      {({ location }) => {
        if (!location.pathname.match(/^(\/contact|\/newsletter)+?/)) {
          return <Card
            type="outro"
            orientation="no"
            title="Before you go ..."
            body={
              <>
                <p><strong>Subscribe to my occasional newsletter.</strong> No spam. Just resources and exclusive ideas about omnichannel content and more. Also, <strong>be the first to know</strong> when my book <Link to="/books/immersive-content"><em>Immersive Content and Usability</em></Link> is launched.</p>
                <form
                  name="newsletter"
                  method="post"
                  action="/newsletter-success"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="newsletter" />
                  <div className="card__field">
                    <label htmlFor="email">Preferred name</label>
                    <input type="text" name="preferredname" id="preferredname-newsletter" />
                  </div>
                  <div className="card__field">
                    <label htmlFor="email">E-mail</label>
                    <input type="text" name="email" id="email" />
                  </div>
                  <input type="submit" value="Subscribe" className="card__field--special" />
                </form>
              </>
            }
          />
        }
      }
    }
    </Location>
    <div className="prefooter">
      <div className="prefooter__container">
        <h3>Trusted by</h3>
        <ul>
          <li>
            <a href="https://genero.jp" target="_blank" rel="noopener noreferrer">
              <img src={generoLogo} alt="Genero" />
            </a>
          </li>
          <li>
            <a href="https://srijan.net" target="_blank" rel="noopener noreferrer">
              <img src={srijanLogo} alt="Srijan" />
            </a>
          </li>
          <li>
            <a href="https://tag1consulting.com" target="_blank" rel="noopener noreferrer">
              <img src={tag1Logo} alt="Tag1 Consulting" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <footer>
      <div className="footer__container">
        <h3>Thanks for stopping by.</h3>
        <p>&copy; 2007–{date.getFullYear()} <Link to="/">Preston So</Link>. <em>Designed entirely in the browser.</em></p>
        <p>Powered by <a href="https://gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>, <a href="https://www.drupal.org/" target="_blank" rel="noopener noreferrer">Drupal</a>, and <a href="https://www.oracle.com/marketingcloud/products/content-and-experience/" target="_blank" rel="noopener noreferrer">Oracle Content and Experience</a>.</p>
        <p>Find me on <a href="https://github.com/prestonso" target="_blank" rel="noopener noreferrer">GitHub</a>, <a href="https://twitter.com/prestonso" target="_blank" rel="noopener noreferrer">Twitter</a>, <a href="https://www.linkedin.com/in/prestonso" target="_blank" rel="noopener noreferrer">LinkedIn</a>, and <a href="https://www.drupal.org/u/prestonso" target="_blank" rel="noopener noreferrer">Drupal.org</a>.</p>
      </div>
    </footer>
  </>
)

export default Footer
