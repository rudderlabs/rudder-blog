import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import styles from "../assets/css/custom-search-box.module.css"

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
  <>
    <div className={styles.searchBox}>
      <input
        type="text"
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        placeholder="Search for…"
        role="textbox"
        spellCheck="false"
        value={currentRefinement}
        className={styles.searchBoxInput}
        onChange={event => refine(event.currentTarget.value)}
      />
    </div>
    <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
  </>
)

const CustomSearchBox = connectSearchBox(SearchBox)

export default CustomSearchBox