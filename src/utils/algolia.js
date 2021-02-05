const indexName = process.env.GATSBY_ALGOLIA_INDEX_NAME;

const pageQuery = `{
  pages: allMarkdownRemark(
    sort: { fields: [frontmatter___weight,frontmatter___date], order: [ASC, DESC] }
  ) {
    edges {
      node {
        id
        frontmatter {
          date
          dateString: date(formatString: "MMMM DD, YYYY")
          title
          featureImg {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          author
          category
          slug
          weight
        }
        fields {
          slug
        }
        excerpt(pruneLength: 300)
      }
    }
  }
}`

function pageToAlgoliaRecord({ node: { id, frontmatter, fields, ...rest } }) {
  let featureImg = '';
  if(frontmatter.featureImg) {
    featureImg = frontmatter.featureImg.childImageSharp.fluid;
  }
  return {
    objectID: id,
    ...fields,
    ...rest,
    ...frontmatter,
    featureImg
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries