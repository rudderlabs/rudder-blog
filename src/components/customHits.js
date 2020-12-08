/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { connectHits } from 'react-instantsearch-dom';
import { Link } from "gatsby"
import styles from "../assets/css/hits.module.css"

const Hits = ({ hits }) => {
  if (!hits.length) {
    return (
      <div className={styles.emptyHits}>
        <div>No results found.</div>
      </div>
    );
  }

  return (
    <>
      {hits.map((hit,index) => <div key={index} className={styles.blogItem}>
        <article className={styles.card}>
          <div className={styles.cardImgWrapper}>
            <Link to={hit.slug} className={styles.cardLink}>
              <img src={hit.featureImg.src} className={styles.cardImg} alt={hit.title} loading="eager"/>
            </Link>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.dataStories}>{hit.category}</div>
            <div>
              <h2 className={styles.cardTitle}>
                <Link to={hit.slug} className={styles.cardTitleLink}>{hit.title}</Link>
              </h2>
            </div>
            <div className={styles.cardBottom}>
              <span>{hit.dateString}</span>
              <span> | </span>
              <span className={styles.blogAuthor}>By {hit.author}</span>
            </div>
          </div>
        </article>
      </div>)}
      </>
  )
}

const CustomHits = connectHits(Hits);

export default CustomHits
