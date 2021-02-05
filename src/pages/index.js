import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pagination from "../components/pagination"
import algoliasearch from 'algoliasearch/lite';
import CustomSearchBox from "../components/customSearchBox";
import { InstantSearch, Configure, SortBy } from 'react-instantsearch-dom';
import CustomHits from "../components/customHits"
import styles from "../assets/css/blog-listing.module.css";
import BlogPostSubscriptionForm from "../components/blogPostSubscriptionForm"
import "./../style.css"

const BlogIndex = (props) => {

  const searchClient = algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY);
  const { data, location } = props
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const pageInfo = data.allMarkdownRemark.pageInfo
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={data.site.siteMetadata.title} description={data.site.siteMetadata.description} />
      <div className={styles.mainBlogWrapper}>
        <div className={styles.container}>
          <div id="content-area" className="clearfix">
            <InstantSearch
              searchClient={searchClient}
              indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
            >
              <Configure hitsPerPage={13} />
              <div className="blog-post-feed">
                <div className={`blog-algolia-search-box ${styles.algoliaSearchBox}`}>
                  <label className={styles.searchLabel} aria-label="Search">
                    Search
                  </label>
                  <CustomSearchBox />
                </div>
                <div className={styles.blogListWrapper}>
                  <div id="hits-container">
                    <div data-reactroot className={styles.blogList}>
                      <CustomHits />
                    </div>
                  </div>
                  <BlogPostSubscriptionForm onBlogListingPage={true} htmlId="Blog-header-Subscribe-form" />
                </div>
                <div className={styles.paginationContainer}>
                  <div data-reactroot>
                    <Pagination pageInfo={pageInfo} />
                  </div>
                </div>
              </div>

            </InstantSearch>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        logo
      }
    }
    allMarkdownRemark(
      limit: 19,
      sort: { fields: [frontmatter___weight], order: ASC }
    ) {
      pageInfo {
        currentPage
        itemCount
        hasPreviousPage
        hasNextPage
        pageCount
        perPage
        totalCount
      }
    }
  }
`
