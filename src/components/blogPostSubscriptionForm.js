import React, {useState} from "react"
import styles from "../assets/css/blog-post-subscription-form.module.css"

const BlogPostSubscriptionForm = (props) => {
  const onBlogListingPage = props.onBlogListingPage ? "onBlogListingPage" : ""
  const htmlId = props.htmlId

  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [formSubmittedSuccessfully, setFormSubmittedSuccessfully] = useState(false);

  const formSubmitted = (e) => {
    e.preventDefault();

    setFormSubmittedSuccessfully(false);

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      setError(true);
      return;
    }

    setError(false);

    if (!window.rudderanalytics) {
      return;
    }

    const params = new URLSearchParams(document.location.search.substring(1));

    window.rudderanalytics.identify('', {
        email: email,
        form_id: htmlId,
        utm_source: params.get('utm_source'),
        utm_medium: params.get('utm_medium'),
        utm_campaign: params.get('utm_campaign'),
        utm_content: params.get('utm_content'),
        utm_term: params.get('utm_term'),
        raid: params.get('raid'),
        test_user: params.get('test_user')
      },
      {
        'integrations': {
          'Salesforce': true
        }
      });

    window.rudderanalytics.track('form_submit', {
        page: document.title,
        page_URL: window.location.href,
        form_id: "Blog-header-Subscribe-form",
        utm_source: params.get('utm_source'),
        utm_medium: params.get('utm_medium'),
        utm_campaign: params.get('utm_campaign'),
        utm_content: params.get('utm_content'),
        utm_term: params.get('utm_term'),
        raid: params.get('raid'),
        test_user: params.get('test_user')
      },
      {
        traits: {
          email: email,
          form_id: htmlId,
        }
      });

    setFormSubmittedSuccessfully(true);
  }

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
                value={email}
                size={40}
                className={styles.subscriptionFormEmailInput}
                id="email"
                aria-required="true"
                aria-invalid="false"
                placeholder="you@company.com"
                onChange={(e) => {
                  setError(false);
                  setEmail(e.target.value);
                  setFormSubmittedSuccessfully(false);
                }}
              />
            </span>
            {error &&
              <span className={styles.error} role="alert" aria-hidden="true">The email address entered is invalid.</span>
            }
          </p>
          <p className={styles.subscriptionFormParaLast}>
            <input
              type="submit"
              defaultValue="Subscribe"
              className={styles.subscriptionFormSubmit}
              onClick={e => formSubmitted(e)}
            />
            <span className="ajax-loader"/>
          </p>
          {formSubmittedSuccessfully &&
          <div className={styles.subscriptionFormOutput} role="alert" aria-hidden="true">Thank you for subscribing to our blog.</div>
          }
        </form>
      </div>
    </div>
  )
}

export default BlogPostSubscriptionForm