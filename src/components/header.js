import React from 'react'
import Link from 'gatsby-link'
import hex2rgba from 'hex2rgba'

// Local Variables
const fontFamilyList = [
  'Cooper Std','cooper-black-std','BlinkMacSystemFont','avenir next','avenir','helvetica','helvetica neue','ubuntu','roboto','noto','segoe ui','arial', 'sans-serif',
];

// Component Definition
const Header = ({ siteTitle }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      background: `linear-gradient(135deg, ${hex2rgba('#663399', 0.4)}, ${hex2rgba('#663399', 0.7)})`,
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
            fontFamily: fontFamilyList.join(),
          }}
        >
          {siteTitle}
        </Link>
      </h3>
    </div>
    <div
      style={{
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h4 style={{ margin: 0 }}>
        <Link
          to="/about"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          About
        </Link>
      </h4>
    </div>
  </div>
)

export default Header
