// External Dependencies
import React from 'react'
import Link from 'gatsby-link'
import hex2rgba from 'hex2rgba'

// Local Variables
const fontFamilyList = [
  'Cooper Std','cooper-black-std','BlinkMacSystemFont','avenir next','avenir','helvetica','helvetica neue','ubuntu','roboto','noto','segoe ui','arial', 'sans-serif',
];

const linkContainerStyles = {
  alignItems: 'center',
  display: 'flex',
  height: 80,
  overflow: 'hidden',
};

const activeLinkContainerStyles = {
  ...linkContainerStyles,
  borderBottom: '4px solid rebecccapurple',
};

const linkStyles = {
  color: 'white',
  fontWeight: 400,
  textDecoration: 'none',
};

// Component Definition
const Header = ({ siteTitle }) => {
  console.log('hey', activeLinkContainerStyles);
  return (
    <div
      style={{
        alignItems: 'center',
        background: `linear-gradient(135deg, ${hex2rgba('#663399', 0.4)}, ${hex2rgba('#663399', 0.7)})`,
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '1.45rem',
      }}
    >
      <div style={linkContainerStyles}>
        <h3 style={{ margin: 0 }}>
          <Link
            style={{
              color: 'black',
              fontFamily: fontFamilyList.join(),
              textDecoration: 'none',
            }}
            to="/"
          >
            {siteTitle}
          </Link>
        </h3>
      </div>
      <div style={activeLinkContainerStyles}>
        <h4 style={{ margin: 0 }}>
          <Link
            // activeStyle={activeLinkContainerStyles}
            style={linkStyles}
            to="/"
          >
            Home
          </Link>
        </h4>
      </div>
      <div style={linkContainerStyles}>
        <h4 style={{ margin: 0 }}>
          <Link
            // activeStyle={activeLinkContainerStyles}
            style={linkStyles}
            to="/about"
          >
            About
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Header
