import React from 'react';
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NoResults = () => {
  return (
    <div className="noResults-container">
      <FontAwesomeIcon icon={faThumbsDown} aria-hidden="true"/>
      <h3>That subject must not be newsworthy, try again.</h3>
    </div>
  )
}

export default NoResults
