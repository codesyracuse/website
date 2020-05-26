import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, siteSubtitle }) => (
  <header
    style={{
      background: `#fff`,
      marginBottom: `.5rem`,
    }}
  >
    <div
      style={{
        margin: `6rem auto 0`,
        maxWidth: 960,
        padding: `0 1rem`,
        textAlign: `center`,
      }}
    >
      <h2 style={{ 
        color: `#1d2121`,
        fontWeight: `400`,
        fontSize: '1.6rem',
        marginBottom:`0`,
        letterSpacing: `5px`,
        }}>
        {siteSubtitle}
      </h2>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#1d2121`,
            textDecoration: `none`,
            lineHeight: `3.5rem`,
            fontWeight: `800`,
            fontFamily: `Helvetica, sans-serif`,
            fontSize: `3rem`,
            letterSpacing: `-3px`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
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
