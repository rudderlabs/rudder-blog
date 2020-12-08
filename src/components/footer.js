import React, { useEffect } from "react"
import FooterWidget from "./footerWidget";
import styles from "../assets/css/footer.module.css"
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons"
import logoImage from './../assets/images/logo-white.svg'

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
          title: "RudderStack Open Source"
        },
        {
          href: "https://resources.rudderstack.com/open-source-segment-alternative-free-trial",
          title: "RudderStack vs. Segment"
        },
        {
          href: "https://resources.rudderstack.com/rudderstack-vs-snowplow",
          title: "RudderStack vs. Snowplow"
        },
        {
          href: "/pricing",
          title: "Pricing"
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
          href: "https://docs.rudderstack.com/",
          title: "Documentation"
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
          <div className={styles.footerWidget}>
            <div id="media_image-2" className="fwidget et_pb_widget widget_media_image">
              <img width={173}
                   height={20}
                   src={logoImage}
                   data-lazy-type="image"
                   className="image wp-image-28013  attachment-173x20 size-173x20 lazy-loaded" alt="RudderStack Logo"
                   alt="RudderStack Logo"
                   loading="lazy"
                   style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
          {widgets.map((w, index) => {
            return <FooterWidget key={index} title={w.title} links={w.links}/>
          })}
          <div style={{ clear: "both" }}/>
        </div>
      </div>
      <div id="footer-bottom" className={styles.footerBottom}>
        <div className={styles.footerContainer}>
          <div className="footer-bottom-area">
            <div id="copy-right-area" className={styles.copyRightArea} role="complementary">
              <div className="widget_text footer-copyright-widget">
                <div className="textwidget custom-html-widget">
                  <a href="https://www.iubenda.com/privacy-policy/49325816"
                     className="iubenda-white iubenda-embed"
                     title="Privacy Policy ">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
            <div id="social-link-widget-area" className={styles.socialLinksArea} role="complementary">
              <div className="social-link-widget"/>
              <div className="textwidget">
                <ul className={styles.socialLinksList}>
                  <li className={styles.socialLinksItem}>
                    <a className={styles.socialLinksLink} title="Follow on facebook"
                       href="https://www.facebook.com/company/rudderlabs/about/" target="_blank"
                       rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faFacebookF} size="2x" />
                    </a>
                  </li>
                  <li className={styles.socialLinksItem}>
                    <a className={styles.socialLinksLink} title="Follow on twitter"
                       href="https://twitter.com/rudderlabs" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
