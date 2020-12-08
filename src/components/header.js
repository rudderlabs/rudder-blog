import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import logoImage from './../assets/images/logo.svg'
import styles from "../assets/css/header.module.css";

function Header() {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.innerWidth !== 'undefined') {
      if (window.innerWidth > 980) {
        setLeftOffset(-window.innerWidth / 2);
        setWidth(Math.min(1124, window.innerWidth));
        setMenuDisplay("block");
      }
      else {
        setWidth(window.innerWidth);
        setHamburgerDisplay("block");
      }

      window.addEventListener("resize", (e) => {
        if (typeof document === "undefined") return;

        const w = e.target.innerWidth;
        if (w >= 950 || w <= 1010) {
          if (w > 980) {
            const megaWidth = Math.min(1124, w);
            const offsetFromLeft = (w - megaWidth) / 2;
            const menuLeftOffset = document.getElementById("header-menu").getBoundingClientRect().x;
            setLeftOffset(offsetFromLeft - menuLeftOffset);
            setWidth(megaWidth);
            setHamburgerDisplay("none");
            setMenuDisplay("block");
          }
          else {
            setWidth(w);
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
  const [hamburgerDisplay, setHamburgerDisplay] = useState("none");
  const [hamburgerCloseDisplay, setHamburgerCloseDisplay] = useState("none");
  const [leftOffset, setLeftOffset] = useState(0);
  const [width, setWidth] = useState(1124);
  const [stickyContainer, setStickyContainer] = useState(false);

  let to;

  const hideMegaMenuIfDesktop = () => {
    if (typeof window !== 'undefined' && window.innerWidth > 980) {
      to = window.setTimeout(function() {
        setMegaDisplay("none")
      }, 300);
    }
  };

  const showMegaMenuIfDesktop = () => {
    if (typeof window !== 'undefined' && window.innerWidth > 980) {
      if (to) {
        window.clearTimeout(to);
      }
      const megaWidth = Math.min(1124, window.innerWidth);
      const offsetFromLeft = (window.innerWidth - megaWidth) / 2;
      const menuLeftOffset = document.getElementById("header-menu").getBoundingClientRect().x;
      setLeftOffset(offsetFromLeft - menuLeftOffset);
      setWidth(megaWidth);
      setMegaDisplay("block");
    }
  }

  const showMegaMenu = () => {
    if (typeof window !== 'undefined') {
      if (to) {
        window.clearTimeout(to);
      }
      if (window.innerWidth > 980) {
        const megaWidth = Math.min(1124, window.innerWidth);
        const offsetFromLeft = (window.innerWidth - megaWidth) / 2;
        const menuLeftOffset = document.getElementById("header-menu").getBoundingClientRect().x;
        setLeftOffset(offsetFromLeft - menuLeftOffset);
        setWidth(megaWidth);
      }
      setMegaDisplay("block");
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
                <li className={styles.menuItem}>
                  <a className={styles.menuLink}
                    href="/integration/"
                    tabIndex={0}
                  >
                    Integrations
                  </a>
                </li>
                <li className={styles.menuItem}
                    onMouseEnter={showMegaMenuIfDesktop}
                    onMouseLeave={hideMegaMenuIfDesktop}
                >
                  <a id="product-link"
                     className={styles.menuLink}
                     href="/integration"
                     tabIndex={1}
                     onClick={(e) => {
                       e.preventDefault();
                       if (typeof window !== "undefined") {
                         if (megaDisplay === "block" && window.innerWidth <= 980) {
                           setMegaDisplay("none");
                         }
                         else if (megaDisplay === "none") {
                           showMegaMenu();
                         }
                       }
                     }}
                  >
                    Product
                    <span className={styles.dropdownIndicator} />
                  </a>
                  <ul id="sub-menu"
                      className={styles.subMenu}
                      style={{ left: leftOffset, width: width, display: megaDisplay }}
                  >
                    <li className={styles.subMenuItem}>
                      <a className={`${styles.rudderstackCloudLink} ${styles.subMenuLink}`}
                         href="https://resources.rudderstack.com/rudderstack-cloud"
                      >
                        RudderStack Cloud
                      </a>
                    </li>
                    <li className={styles.subMenuItem}>
                      <a className={`${styles.rudderstackOpenSourceLink} ${styles.subMenuLink}`}
                         href="https://resources.rudderstack.com/rudderstack-cloud"
                      >
                        RudderStack Open Source
                      </a>
                    </li>
                    <li className={styles.subMenuItem}>
                      <a className={`${styles.documentationLink} ${styles.subMenuLink}`}
                         href="https://resources.rudderstack.com/rudderstack-cloud"
                      >
                        Documentation
                      </a>
                    </li>
                    <li className={styles.subMenuItem}>
                      <a className={`${styles.rudderSegmentLink} ${styles.subMenuLink}`}
                         href="https://resources.rudderstack.com/rudderstack-cloud"
                      >
                        Rudder vs. Segment
                      </a>
                    </li>
                    <li className={styles.subMenuItem}>
                      <a className={`${styles.rudderSnowplowLink} ${styles.subMenuLink}`}
                         href="https://resources.rudderstack.com/rudderstack-cloud"
                      >
                        Rudder vs. Snowplow
                      </a>
                    </li>
                  </ul>
                </li>
                <li className={styles.menuItem}>
                  <Link className={styles.menuLink}
                     to="/"
                     tabIndex={2}
                  >
                    Blog
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
          <a href="#" className={styles.freeTrialLink}>Free Trial</a>
        </div>
      </div>
    </header>
  );
}

export default Header
