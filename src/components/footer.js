import React from "react"


const Footer = ({ siteTitle, siteSubtitle }) => (
  <footer
    style={{
      background: `#616161`,
    }}
  >
    <div>
        <p style={{ 
        letterSpacing: `5px`,
        }}>
            {new Date().getFullYear()} •
            {` `}
            {siteSubtitle}
        </p>
    </div>
  </footer>
)


export default Footer
