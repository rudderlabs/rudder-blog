import React from "react"
import styles from "../assets/css/blog-post-subscription-form.module.css"

const BlogPostSubscriptionForm = (props) => {
  const onBlogListingPage = props.onBlogListingPage ? "onBlogListingPage" : ""
  const htmlId = props.htmlId

  return (
    <div
      className={`${onBlogListingPage === "onBlogListingPage" ? styles.onBlogListingPage : ""} ${styles.subscrptionFormWidget}`}>
      <div role="form" lang="en-US" dir="ltr">
        <div className={styles.screenReaderResponse} role="alert" aria-live="polite"/>
        <form
          action="/"
          method="post"
          className={styles.subscriptionForm}
          noValidate="novalidate"
          id={htmlId}
        >
          <h2 className={styles.subscriptionFormTitle}>Subscribe</h2>
          <p className={styles.subscriptionFormBody}>We'll send you updates from the blog and monthly release notes.</p>
          <p className={styles.subscriptionFormPara}>
            <span style={{ position: "relative" }}>
              <input
                type="email"
                name="email"
                defaultValue
                size={40}
                className={styles.subscriptionFormEmailInput}
                id="email"
                aria-required="true"
                aria-invalid="false"
                placeholder="you@company.com"
              />
            </span>
          </p>
          <p className={styles.subscriptionFormParaLast}>
            <input type="submit" defaultValue="Subscribe" className={styles.subscriptionFormSubmit}/>
            <span className="ajax-loader"/>
          </p>
          <div className={styles.subscriptionFormOutput} role="alert" aria-hidden="true"/>
        </form>
      </div>
    </div>
  )
}

export default BlogPostSubscriptionForm