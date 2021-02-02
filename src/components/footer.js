import React, { useEffect } from "react"
import FooterWidget from "./footerWidget";
import styles from "../assets/css/footer.module.css"
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookF, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faRssSquare } from "@fortawesome/free-solid-svg-icons"
import logoImage from './../assets/images/rudderstack-white.svg'


function Footer() {
  const widgets = [
    {
      title: "Company",
      links: [
        {
          title: "About",
          href: "/about"
        },
        {
          title: "Contact Us",
          href: "mailto:contact@rudderstack.com"
        },
        {
          title: "We're Hiring!",
          href: "https://www.linkedin.com/company/rudderlabs/jobs/",
          class: "menuHighlight"
        },
        {
          title: "Privacy Policy",
          href: "/privacy-policy"
        },
        {
          title: "Terms of Service",
          href: "/master-service-agreement"
        }
      ]
    },
    {
      title: "Product",
      links: [
        {
          href: "https://resources.rudderstack.com/rudderstack-cloud",
          title: "RudderStack Cloud"
        },
        {
          href: "https://github.com/rudderlabs/rudder-server",
          title: "Open Source"
        },
        {
          href: "https://resources.rudderstack.com/open-source-segment-alternative-free-trial",
          title: "Segment Comparison"
        },
        {
          href: "https://resources.rudderstack.com/rudderstack-vs-snowplow",
          title: "Snowplow Comparison"
        }
      ]
    },
    {
      title: "Resources",
      links: [
        {
          href: "/blog",
          title: "Blog"
        },
        {
          href: "/video-library",
          title: "Video Library"
        },
        {
          href: "https://docs.rudderstack.com/",
          title: "Documentation"
        },
        {
          href: "https://resources.rudderstack.com/join-rudderstack-slack",
          title: "Slack Community"
        },
        {
          href: "https://datastackshow.com/",
          title: "The DataStack Show Podcast"
        }
      ]
    }
  ];

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      var s = document.createElement("script"), tag = document.getElementsByTagName("script")[0];
      s.src="https://cdn.iubenda.com/iubenda.js";
      tag.parentNode.insertBefore(s,tag);
    }
  }, []);

  return (
    <footer id="main-footer" className={styles.mainFooter}>
      <div className={styles.footerContainer}>
        <div id="footer-widgets" className={styles.footerWidgets}>
          {widgets.map((w, index) => {
            return <FooterWidget key={index} title={w.title} links={w.links}/>
          })}
          <div className={styles.footerWidget}>
          <div id="media_image-2" className="fwidget et_pb_widget widget_media_image">
            <h4 className={styles.widgetTitle}>JOIN THE CONVERSATION</h4>
            <p className={styles.footerText}>Learn more about the product and how other engineers are building their customer data pipelines.</p>
            <a href="https://resources.rudderstack.com/join-rudderstack-slack" className={styles.slackButton}>Join our Slack Community</a>
          </div>
          </div>
          <div className={styles.footerWidgetLast}>
          <div>
            <h4 className={styles.widgetTitle}>READ OUR DOCUMENTATION</h4>
            <p className={styles.footerText}>Technical documentation on using RudderStack to collect, route and manage your event data securely.</p>
            <a href="https://docs.rudderstack.com/" className={styles.docButton}>Go to docs <i class="fa fa-arrow-right"></i></a>
          </div>
          </div>
          <div style={{ clear: "both" }}/>
        </div>
      </div>
      <div id="footer-bottom" className={styles.footerBottom}>
        <div className={styles.footerContainer}>
          <div className="footer-bottom-area">
            <div id="social-link-widget-area" className={styles.socialLinksArea} role="complementary">
              <div className="social-link-widget"/>
              <div className="textwidget">
                <ul className={styles.socialLinksList}>
                  <li className={styles.socialLinksItem}>
                    <a className={styles.socialLinksLink} title="Follow on twitter"
                    href="https://twitter.com/rudderlabs" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faTwitter} size="small" />
                    </a>
                  </li>
                  <li className={styles.socialLinksItem}>
                    <a className={styles.socialLinksLink} title="Follow on LinkedIn"
                    href="https://www.linkedin.com/company/rudderlabs" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} size="small" />
                    </a>
                  </li>
                  <li className={styles.socialLinksItem}>
                    <a className={styles.socialLinksLink} title="RSS Feed"
                    href="https://rudderstack.com/blog/rss.xml" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faRssSquare} size="small" />
                    </a>
                  </li>
                </ul>
                <div className={styles.footerLogo}>
                  <a href="/">
                  <img
                  src={logoImage}
                  alt="RudderStack Logo"
                  className={styles.logoImg}
                  />
                  </a>
                </div>
              </div>
            </div>
            <div id="copy-right-area" className={styles.copyRightArea} role="complementary">
              <div className="widget_text footer-copyright-widget">
                <div className={styles.customTextWidget}>
                  &copy; RudderLabs Inc.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
