import React from "react"
import { Link } from "gatsby"
import { Location } from "@reach/router"
import PropTypes from "prop-types"

import "./layout.css"

const Card = ({
  type,
  orientation,
  title,
  titleLink,
  body,
  featureLink,
  featureTitle,
  featureBody,
  listing,
}) => (
  <section className={`
    card
    card--${type}
    card--${orientation}-orientation`}>
    <div className="card__container">
      <div className="card__content">
        {type === "intro" &&
          <Location>
            {({ location }) => (
              location.pathname.match(/^(\/writing\/)[a-z0-9]+/) ? (<p><Link to="/writing">Writing</Link></p>) :
              (location.pathname.match(/^(\/books\/)[a-z0-9]+/) ? (<p><Link to="/books">Books</Link></p>) : "")
            )}
          </Location>
        }
        {title &&
          <h2>{titleLink ? (<Link to={titleLink}>{title}</Link>) : title}</h2>
        }
        {body}
      </div>
      {featureLink && featureTitle && featureBody &&
        <div className="card__feature">
          <div className={`card__feature__content has-image`}>
            <h3><a href={featureLink} target="_blank" rel="noopener noreferrer">{featureTitle}</a></h3>
            {featureBody}
          </div>
        </div>
      }
      {listing &&
        <div className="card__feature">
          <div className="card__feature__content">
            <div className="card__feature__listing">
              {listing}
            </div>
          </div>
        </div>
      }
    </div>
  </section>
)

Card.propTypes = {
  type: PropTypes.string,
  orientation: PropTypes.string,
  title: PropTypes.string,
  titleLink: PropTypes.string,
  body: PropTypes.string,
  featureLink: PropTypes.string,
  featureTitle: PropTypes.string,
  featureBody: PropTypes.string,
  listing: PropTypes.string,
}

export default Card
