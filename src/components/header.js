import React from 'react'
import Link from 'gatsby-link'
import hex2rgba from 'hex2rgba'

// Component Definition
const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `linear-gradient(rebeccapurple, ${hex2rgba('#663399', 0.8)})`,
      borderBottom: `solid 4px #bbb`,
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
