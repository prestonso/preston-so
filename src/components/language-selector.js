import React from "react"
import { IntlContextConsumer, Link } from "gatsby-plugin-intl"

const languageName = {
  en: "English",
  pt: "português",
  es: "español",
  cy: "Cymraeg",
}

const LanguageSelector = () => {
  return (
    <ul>
      <IntlContextConsumer>
        {({ languages, originalPath }) =>
          languages.map(language => (
            <li>
              <Link
                key={language}
                language={language}
                to={originalPath}
                style={{
                  color: `white`,
                  margin: 10,
                  textDecoration: `underline`,
                }}
              >
                {languageName[language]}
              </Link>
            </li>
          ))
        }
      </IntlContextConsumer>
    </ul>
  )
}

export default LanguageSelector
