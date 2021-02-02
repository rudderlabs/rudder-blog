import React, { useEffect, useState } from "react"
import styles from "../assets/css/footer-widget.module.css"

function FooterWidget(props) {
  const title = props.title;
  const links = props.links;

  const [linksDisplay, setLinksDisplay] = useState("block");

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setLinksDisplay("none");
    }
  }, []);

  const toggleLinksVisibility = () => {
    if (linksDisplay === "none") {
      setLinksDisplay("block");
    }
    else if (typeof window !== "undefined" && window.innerWidth < 768) {
      setLinksDisplay("none");
    }
  };

  return (
    <div className={styles.footerWidget}>
      <div>
        <h4 className={styles.widgetTitle} onClick={toggleLinksVisibility}>{title}</h4>
        <div className={styles.menuContainer} style={{display: linksDisplay}}>
          <ul className={styles.menu}>
            {links.map((l, index) => {
              return (
                <li key={index} className={styles.menuItem}>
                  <a href={l.href} className={`${styles.menuItemLink} ${(l.class)?styles.menuHighlight:''}`}>
                    {l.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterWidget