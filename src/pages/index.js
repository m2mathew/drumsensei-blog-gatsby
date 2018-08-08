import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <h3
        style={{
          backgroundColor: 'white',
          display: 'inline-block',
          marginBottom: '4.35rem',
          mixBlendMode: 'screen',
          textRendering: 'optimizeLegibility',
        }}
      >
        Betwixt Code and Music
      </h3>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <section
          css={{
            marginBottom: '2rem',
          }}
          key={node.id}
        >
          <Link to={node.fields.slug}>
            <h3 css={{ marginBottom: '0.5rem' }}>{node.frontmatter.title}</h3>
          </Link>
          <div css={{ fontSize: '1.25rem' }}>
            {node.frontmatter.date} • {node.frontmatter.length}
          </div>
        </section>
      ))}
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            length
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
