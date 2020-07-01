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
        <p>On GitHub: <a href="https://github.com/codesyracuse/mentor-ship">Mentor Ship</a> / <a href="https://github.com/codesyracuse/website">Website</a></p>
    </div>

  </footer>
)


export default Footer
