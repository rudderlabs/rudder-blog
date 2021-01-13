import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"
import BlogPostSubscriptionForm from "../components/blogPostSubscriptionForm"
import ExploreRudderStack from "../components/exploreRudderStack"
import styles from "../assets/css/blog-post.module.css"
import Img from "gatsby-image"
import { Link } from "gatsby"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const metaTitle = post.frontmatter?.siteMetaTitle || post.frontmatter.title
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const siteUrl = data.site.siteMetadata?.siteUrl || ``
  const currentUrl = siteUrl + location.pathname;
  const siteDescription = post.frontmatter?.siteMetadescription || post.excerpt;
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={metaTitle}
        description={siteDescription}
        meta={[{
          property: `og:type`,
          content: 'article',
        },{
          property: `og:url`,
          content: currentUrl,
        },{
          property: `og:image`,
          content: post.frontmatter.featureImg.childImageSharp.fluid?post.frontmatter.featureImg.childImageSharp.fluid.src:'',
        },{
          property: `og:image:secure_url`,
          content: post.frontmatter.featureImg.childImageSharp.fluid?post.frontmatter.featureImg.childImageSharp.fluid.src:'',
        },{
          property: `og:image:width`,
          content: post.frontmatter.featureImg.childImageSharp.sizes.presentationWidth
        },{
          property: `og:image:height`,
          content: post.frontmatter.featureImg.childImageSharp.sizes.presentationHeight
        }
        ]}
      />
      <div id="main-content">
        <div className={styles.innerPage}>
          <div className={styles.innerPageLeft}>
            <article className={styles.detail}>
              <figure className={styles.fullImg}>
                <Img fluid={post.frontmatter.featureImg.childImageSharp.fluid} className={styles.featuredImg} alt={post.frontmatter.title}
                     title={post.frontmatter.title}/>
              </figure>
              <h1 itemProp="headline" className={styles.fullTitle}>{post.frontmatter.title}</h1>
              <div className={styles.fullHeader}>
                <section className={styles.fullMeta}>
              <span className={styles.authorSection}>
                <span className={styles.author}>By <span
                  style={{ color: "#6A2F6C" }}>{post.frontmatter.author}</span></span>
                <span className={styles.divider}>/</span>
                <time>{post.frontmatter.date}</time>
              </span>
                  <span className={styles.socialLinkWidget}>
                <ul className={styles.socialLinkWidgetUL}>
                  <li className={styles.socialLinkWidgetLI}>
                    <a className={styles.socialLinkWidgetLink} target="_blank" rel="nofollow noreferrer noopener"
                       href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}>
                      <FontAwesomeIcon icon={faFacebookF} size="lg"/>
                    </a>
                  </li>
                  <li className={styles.socialLinkWidgetLI}>
                    <a className={styles.socialLinkWidgetLink} target="_blank" rel="nofollow noreferrer noopener"
                       href={`https://twitter.com/intent/tweet?text=${currentUrl}`}>
                      <FontAwesomeIcon icon={faTwitter} size="lg"/>
                    </a>
                  </li>
                  <li className={styles.socialLinkWidgetLI}>
                    <a className={styles.socialLinkWidgetLink} target="_blank" rel="nofollow noreferrer noopener"
                       href={`https://www.linkedin.com/shareArticle?mini=true&amp;url=${currentUrl}`}>
                      <FontAwesomeIcon icon={faLinkedin} size="lg"/>
                    </a>
                  </li>
                  <li className={styles.socialLinkWidgetLI}>
                    <a className={styles.socialLinkWidgetLink} target="_blank" rel="nofollow noreferrer noopener"
                       href={`https://www.instagram.com/?url=${currentUrl}`}>
                      <FontAwesomeIcon icon={faInstagram} size="lg"/>
                    </a>
                  </li>
                </ul>
              </span>
                </section>
              </div>
              <section className={styles.fullContent}>
                <div
                  className={styles.postContent}
                  dangerouslySetInnerHTML={{ __html: post.html }}
                  itemProp="articleBody"
                />
              </section>
            </article>
            <div className={styles.blogUserInfoArea}>
              <div className={styles.userInformationBox}>
                <div className={styles.userPicture}>
                  {post.frontmatter.authorPic.childImageSharp && <Img fluid={post.frontmatter.authorPic.childImageSharp.fluid} className={styles.userPictureImg} 
                  alt={post.frontmatter.author} title={post.frontmatter.author} />}
                </div>
                <div className={styles.userInfoArea}>
                  <span>{post.frontmatter.author}</span>
                  <div>{post.frontmatter.authorPosition}</div>
                </div>
              </div>
              <div className={styles.authorDescription}>
                {post.frontmatter.authorDescription}
              </div>
            </div>
            <div className={styles.relatedBlogSection}>
              <h2 className={styles.recentPostsHeading}>Recent Posts</h2>
              {
                data.recents.edges && data.recents.edges.map((item, index) => {
                  console.log(item);
                  return (
                    <div className={styles.relatedBlogColumn} key={index}>
                      <div className="related-blog-image">
                      <Link to={"/" + item.node.frontmatter.slug}>
                          <Img fluid={item.node.frontmatter.featureImg.childImageSharp.fluid} className="blog image"
                               alt={item.node.frontmatter.title} title={item.node.frontmatter.title} />
                        </Link>
                      </div>
                      <div className={styles.relatedBlogTitle}>{item.node.frontmatter.title}</div>
                      <div className="related-post-header">
                        <section className={styles.relatedBlogFullMeta}>
                          <span className={styles.author}>By <span style={{ color: "#6A2F6C" }}>{item.node.frontmatter.author}</span></span>
                          <span className={styles.divider}>/</span>
                          <time>{item.node.frontmatter.date}</time>
                        </section>
                      </div>
                      <div className={styles.relatedPostContent}>
                        {item.node.excerpt}
                      </div>
                      <Link to={"/" + item.node.frontmatter.slug}>
                        Read More <span>→</span>
                      </Link>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className={styles.innerPageRight}>
            <div className={styles.sidebarInner}>
              <div className={styles.sidebar}>
                <BlogPostSubscriptionForm htmlId="BlogPost-sidebar-Subscribe-form"/>
                <ExploreRudderStack/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
  ) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        siteMetaTitle
        siteMetadescription
        category
        author
        authorDescription
        authorPic {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        authorPosition
        featureImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
            sizes {
              presentationHeight,
              presentationWidth
            }
          }
        }
      }
    }
    recents : allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ){
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            featureImg {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            author
            category
            slug
          }
          excerpt(pruneLength: 130)
        }
      }
    }
  }
`
