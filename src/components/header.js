import React from 'react'
import Link from 'gatsby-link'
import hex2rgba from 'hex2rgba'

// Local Variables
const fontFamilyList = [
  'Cooper Std','cooper-black-std','BlinkMacSystemFont','avenir next','avenir','helvetica','helvetica neue','ubuntu','roboto','noto','segoe ui','arial', 'sans-serif',
];

const linkContainerStyles = {
  alignItems: 'center',
  borderBottom: '4px solid rebecccapurple',
  display: 'flex',
  height: 80,
  overflow: 'hidden',
};

const linkStyles = {
  color: 'white',
  fontWeight: 400,
  textDecoration: 'none',
};

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
    <div style={linkContainerStyles}>
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
    <div style={linkContainerStyles}>
      <h4 style={{ margin: 0 }}>
        <Link
          to="/"
          style={linkStyles}
        >
          Home
        </Link>
      </h4>
    </div>
    <div style={linkContainerStyles}>
      <h4 style={{ margin: 0 }}>
        <Link
          to="/about"
          style={linkStyles}
        >
          About
        </Link>
      </h4>
    </div>
  </div>
)

export default Header
