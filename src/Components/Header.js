import React, { Component } from 'react';
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
  constructor() {
    super();
    this.top = React.createRef();

    this.state = {
      query: '',
      placeholder: 'Miscellaneous',
    }
  }

  handleScrollTop = () => {
    window.scrollTo(0, this.top.current.offsetTop);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { query } = this.state;
    this.props.handleSearch(query);

    this.setState({
      query: '',
      placeholder: query,
    })
  }

  handleChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  }

  render() {
    const { placeholder, query } = this.state;
    
    return (
      <header ref={this.top}>
        <div className="wrapper">
          <h1><FontAwesomeIcon icon={faNewspaper}/>The Specific Press</h1>
          <h2>Enter a Subject for the Latest News Headlines</h2>
          <form onSubmit={this.handleSubmit}>
            <h2>Showing results for: </h2>
            <div className="search-container">
              <input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={this.handleChange}
                required
              />
              <label className="sr-only" htmlFor="search">Miscellaneous</label>
            <button class="search-button" onSubmit={this.handleSubmit}><FontAwesomeIcon icon={faSearch} aria-hidden="true"/></button>
            </div>
          </form>
          <button class="up-arrow" onClick={this.handleScrollTop} aria-label="Back to the top">
            <FontAwesomeIcon icon={faArrowUp} aria-hidden="true" title="Back to the top"/>
          </button>
        </div>
      </header>
    )
  }
}

export default Header
