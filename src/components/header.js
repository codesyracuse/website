import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, siteSubtitle }) => (
  <header
    style={{
      background: `#2c3557`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            lineHeight: `3.5rem`,
            fontWeight: `600`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h2 style={{ 
        color: `#d4d0ab`,
        fontWeight: `500`,
        fontSize: '1.6rem',
        }}>
        {siteSubtitle}
      </h2>
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
