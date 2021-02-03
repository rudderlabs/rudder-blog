import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import logoImage from './../assets/images/logo.svg'
import styles from "../assets/css/header.module.css";

function Header() {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.innerWidth !== 'undefined') {
      if (window.innerWidth > 1080) {
      //  setLeftOffset(-window.innerWidth / 2);
      //  setWidth(Math.min(1124, window.innerWidth));
        setMenuDisplay("block");
      }
      else {
      //  setWidth(window.innerWidth);
        setHamburgerDisplay("block");
      }

      window.addEventListener("resize", (e) => {
        if (typeof document === "undefined") return;

        const w = e.target.innerWidth;
        if (w >= 950 || w <= 1080) {
          if (w > 1080) {
          //  const megaWidth = Math.min(1124, w);
          //  const offsetFromLeft = (w - megaWidth) / 2;
          //  const menuLeftOffset = document.getElementById("header-menu").getBoundingClientRect().x;
          //  setLeftOffset(offsetFromLeft - menuLeftOffset);
          //  setWidth(megaWidth);
            setHamburgerDisplay("none");
            setMenuDisplay("block");
          }
          else {
          //  setWidth(w);
            setMenuDisplay("none");
            setHamburgerDisplay("block");
          }
        }
      });

      window.addEventListener("scroll", (e) => {
        if (e.currentTarget.scrollY > 100 && e.currentTarget.scrollY < 500) {
          setStickyContainer(true);
        }
        else if (e.currentTarget.scrollY <= 100 && e.currentTarget.scrollY > 10) {
          setStickyContainer(false);
        }
      });
    }
  }, []);

  const [menuDisplay, setMenuDisplay] = useState("none");
  const [megaDisplay, setMegaDisplay] = useState("none");
  const [megaDisplayLearn, setMegaDisplayLearn] = useState("none");
  const [hamburgerDisplay, setHamburgerDisplay] = useState("none");
  const [hamburgerCloseDisplay, setHamburgerCloseDisplay] = useState("none");
  const [openValue, setOpenValue] = useState("");
  const [openLearnValue, setOpenLearnValue] = useState("");
  // const [leftOffset, setLeftOffset] = useState(0);
  // const [width, setWidth] = useState(1124);
  const [stickyContainer, setStickyContainer] = useState(false);

  let to;

  const hideMegaMenuIfDesktop = () => {
    if (typeof window !== 'undefined' && window.innerWidth > 1080) {
      to = window.setTimeout(function() {
        setMegaDisplay("none");setMegaDisplayLearn("none");
      }, 200);
    }
  };

  const showMegaMenuIfDesktop = () => {
    if (typeof window !== 'undefined' && window.innerWidth > 1080) {
      if (to) {
        window.clearTimeout(to);
      }
    //  const megaWidth = Math.min(1124, window.innerWidth);
    //  const offsetFromLeft = (window.innerWidth - megaWidth) / 2;
    //  const menuLeftOffset = document.getElementById("header-menu").getBoundingClientRect().x;
    //  setLeftOffset(offsetFromLeft - menuLeftOffset);
    //  setWidth(megaWidth);
      setMegaDisplayLearn("none");
      setMegaDisplay("block");
    }
  }
  const hideMegaMenuIfDesktopLearn = () => {
    if (typeof window !== 'undefined' && window.innerWidth > 1080) {
      to = window.setTimeout(function() {
        setMegaDisplayLearn("none")
      }, 300);
    }
  };

  const showMegaMenuIfDesktopLearn = () => {
    if (typeof window !== 'undefined' && window.innerWidth > 1080) {
      if (to) {
        window.clearTimeout(to);
      }
    //  const megaWidth = Math.min(1124, window.innerWidth);
    //  const offsetFromLeft = (window.innerWidth - megaWidth) / 2;
    //  const menuLeftOffset = document.getElementById("header-menu").getBoundingClientRect().x;
    //  setLeftOffset(offsetFromLeft - menuLeftOffset);
    //  setWidth(megaWidth);
      setMegaDisplay("none");
      setMegaDisplayLearn("block");
    }
  }

  const showMegaMenu = () => {
    if (typeof window !== 'undefined') {
      if (to) {
        window.clearTimeout(to);
      }
      if (window.innerWidth > 1080) {
      //  const megaWidth = Math.min(1124, window.innerWidth);
      //  const offsetFromLeft = (window.innerWidth - megaWidth) / 2;
      //  const menuLeftOffset = document.getElementById("header-menu").getBoundingClientRect().x;
      //  setLeftOffset(offsetFromLeft - menuLeftOffset);
      //  setWidth(megaWidth);
      }
      setMegaDisplay("block");
    }
  }

  const showMegaMenuLearn = () => {
  console.log("learn")
    if (typeof window !== 'undefined') {
      if (to) {
        window.clearTimeout(to);
      }
      if (window.innerWidth > 1080) {
      //  const megaWidth = Math.min(1124, window.innerWidth);
      //  const offsetFromLeft = (window.innerWidth - megaWidth) / 2;
      //  const menuLeftOffset = document.getElementById("header-menu").getBoundingClientRect().x;
      //  setLeftOffset(offsetFromLeft - menuLeftOffset);
      //  setWidth(megaWidth);
      }
      setMegaDisplayLearn("block");
    }
  }


  return (
    <header id="main-header-1" className={styles.mainHeader}>
      <div id="header-container-1" className={`${stickyContainer ? styles.stickyHeaderContainer : ''} ${styles.headerContainer}`}>
        <div id="logo-container-1" className={styles.logoContainer}>
          <span className={styles.logoHelper} />
          <a href="/">
            <img
              src={logoImage}
              alt="RudderStack Logo"
              id="logo"
              className={styles.logoImg}
            />
          </a>
        </div>
        <div id="top-navigation-1" className={styles.topNavigation}>
          <nav id="top-menu-nav" className={styles.topMenuNav}>
            <div id="mega-menu-wrap-primary-menu" className="mega-menu-wrap">
                <button
                  aria-label="Toggle Menu"
                  className={styles.hamburger}
                  type="button"
                  onClick={() => {
                    console.log('clicked');
                    setHamburgerCloseDisplay("block");
                    setHamburgerDisplay("none");
                    setMenuDisplay("block");
                  }}
                  style={{display: hamburgerDisplay}}
                >
                  <div
                    className="mega-toggle-block mega-menu-toggle-animated-block mega-toggle-block-1"
                    id="mega-toggle-block-1"
                  >
                  </div>
                </button>
              <div
                className={styles.hamburgerClose}
                onClick={() => {
                  setHamburgerDisplay("block");
                  setMenuDisplay("none");
                  setHamburgerCloseDisplay("none");
                }}
                style={{display: hamburgerCloseDisplay}}
              />
              <ul id="header-menu" className={styles.menu} style={{display: menuDisplay}}>
                <li className={styles.menuItem}
                    onMouseEnter={showMegaMenuIfDesktop}
                    onMouseLeave={hideMegaMenuIfDesktop}
                >
                  <a id="product-link"
                     className={`${styles.menuLink} ${(openValue == 'open')?styles.open:''}`}
                     href="/integration"
                     tabIndex={1}
                     onClick={(e) => {
                       e.preventDefault();
                       if (typeof window !== "undefined") {
                         if (megaDisplay === "block" && window.innerWidth <= 1080) {
                           setMegaDisplay("none");
                           setOpenValue("");
                         }
                         else if (megaDisplay === "none") {
                           showMegaMenu('block');
                           setOpenValue("open");
                         }
                       }
                     }}
                  >
                    Product
                    <span className={styles.dropdownIndicator} />
                  </a>
                  <ul id="product-sub-menu"
                      className={styles.productSubMenu}
                      style={{  display: megaDisplay }}
                  >
                    <li className={styles.subMenuItem}>
                      <a className={`${styles.rudderstackCloudLink} ${styles.subMenuLink}`}
                         href="https://resources.rudderstack.com/rudderstack-cloud"
                      >
                        RudderStack Cloud
                        <p>Fully managed, scalable and production ready customer data pipelines for your data infrastructure.</p>
                      </a>
                    </li>
                    <li className={styles.subMenuItem}>
                      <a className={`${styles.rudderstackOpenSourceLink} ${styles.subMenuLink}`}
                         href="https://github.com/rudderlabs/rudder-server"
                      >
                        RudderStack Open Source
                        <p>All the core features and integrations that make RudderStack the customer data pipeline of your data infrastructure.</p>
                      </a>
                    </li>
                    <li className={styles.subMenuItem}>
                      <a className={`${styles.normalLink} ${styles.subMenuLink}`}
                         href="https://rudderstack.com/#event_stream"
                      >
                        Event Stream
                      </a>
                    </li>
                    <li className={styles.subMenuItem}>
                      <a className={`${styles.normalLink} ${styles.subMenuLink}`}
                         href="https://rudderstack.com/#warehouse_actions"
                      >
                        Warehouse Actions
                      </a>
                    </li>
                    <li className={styles.subMenuItem}>
                      <a className={`${styles.normalLink} ${styles.subMenuLink}`}
                         href="https://rudderstack.com/#cloud_extract"
                      >
                        Cloud Extract
                      </a>
                    </li>
                  </ul>
                </li>
                <li className={styles.menuItem}
                onMouseEnter={showMegaMenuIfDesktopLearn}
                onMouseLeave={hideMegaMenuIfDesktopLearn}
                  >
                  <a id="product-link"
                className={`${styles.menuLink} ${(openLearnValue == 'open')?styles.open:''}`}
                href="/integration"
                tabIndex={1}
                onClick={(e) => {
                  e.preventDefault();
                  if (typeof window !== "undefined") {
                    if (megaDisplayLearn === "block" && window.innerWidth <= 1080) {
                      setMegaDisplayLearn("none");
                      setOpenLearnValue("");
                    }
                    else if (megaDisplayLearn === "none") {
                      showMegaMenuLearn();
                      setOpenLearnValue("open");
                    }
                  }
                }}
                >
                Learn
                <span className={styles.dropdownIndicator} />
                </a>
                <ul id="sub-menu"
                className={styles.subMenu}
                style={{  display: megaDisplayLearn }}
                >
                <li className={styles.subMenuItem}>
                <a className={`${styles.blogLink} ${styles.subMenuLink}`}
                href="/blog"
                  >
                  Blog
                    <p>Read articles, feature announcements, community highlights and everything around data.</p>
                </a>
                </li>
                <li className={styles.subMenuItem}>
                <a className={`${styles.videLibraryLink} ${styles.subMenuLink}`}
                href="/video-library"
                  >
                  Video Library
                  <p>Watch tutorials on how to get the most out of RudderStack and your Customer Data.</p>
                </a>
                </li>
                <li className={styles.subMenuItem}>
                <a className={`${styles.migrationLink} ${styles.subMenuLink}`}
                href="https://docs.rudderstack.com/migration-guides"
                  >
                  Migration Guides
                  <p>Howtos and best practises for migrating from platforms like Snowplow and Segment to RudderStack.</p>
                  </a>
                  </li>
                  <li className={styles.subMenuItem}>
                <a className={`${styles.normalLink} ${styles.subMenuLink}`}
                href="https://docs.rudderstack.com/"
                  >
                  Documentation
                </a>
                </li>
                  <li className={styles.subMenuItem}>
                  <a className={`${styles.normalLink} ${styles.subMenuLink}`}
                  href="https://resources.rudderstack.com/open-source-segment-alternative-free-trial"
                    >
                    Segment Comparison
                  </a>
                  </li>
                  <li className={styles.subMenuItem}>
                  <a className={`${styles.normalLink} ${styles.subMenuLink}`}
                  href="https://resources.rudderstack.com/rudderstack-vs-snowplow"
                    >
                    Snowplow Comparison
                  </a>
                  </li>
                  <li className={styles.subMenuItem}>
                  <a className={`${styles.normalLink} ${styles.subMenuLink}`}
                  href="https://rudderstack.com/case-studies"
                    >
                    Case Studies
                  </a>
                  </li>

                  </ul>
                </li>
<li className={styles.menuItem}>
<Link className={styles.menuLink}
to="/integration"
tabIndex={2}
  >
  Integrations
  </Link>
  </li>
  <li className={styles.menuItem}>
<Link className={styles.menuLink}
to="https://docs.rudderstack.com"
tabIndex={2}
  >
  Docs
  </Link>
  </li>
                <li className={styles.menuItem}>
                  <a className={styles.menuLink}
                     href="/pricing"
                     tabIndex={3}
                  >
                    Pricing
                  </a>
                </li>
                <li className={styles.menuItem}>
                  <a className={styles.menuLink}
                     href="https://app.rudderstack.com/login"
                     tabIndex={4}
                  >
                    Login
                  </a>
                </li>
                <li className={`${styles.freeSignUpItem} ${styles.menuItem}`}>
                  <a className={`${styles.freeSignUpLink} ${styles.menuLink}`}
                     href="https://app.rudderlabs.com/signup?type=freetrial"
                     tabIndex={5}>
                    Sign up free
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className={styles.freeTrialRegion}>
          <a href="https://app.rudderlabs.com/signup?type=freetrial" className={styles.freeTrialLink}>Sign up free</a>
        </div>
      </div>
    </header>
  );
}

export default Header
