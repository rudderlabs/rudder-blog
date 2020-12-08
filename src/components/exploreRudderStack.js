import React from "react";
import styles from "../assets/css/explore-rudderstack.module.css";

const ExploreRudderStack = () => {
  return (
    <div className={styles.container}>
      <div>
        <h4 className={styles.title}>Explore RudderStack Today</h4>
        <br />
        <p className={styles.body}>
          <img className="emoji" alt="⚡" src="https://s.w.org/images/core/emoji/13.0.0/svg/26a1.svg" /> Our Free plan includes 500,000 events per month so you can explore and test the product.
        </p>
        <p className={styles.body}>Install an SDK, connect a destination, and see data start to flow.</p>
        <br />
        <center>
          <a href="https://app.rudderlabs.com/signup?type=freetrial" className={styles.link}>
            Sign up free
          </a>
        </center>
      </div>
    </div>
  );
};

export default ExploreRudderStack;