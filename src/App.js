import React, { Component } from 'react';
import Header from './Components/Header'
import axios from 'axios';
import Articles from './Components/Articles';
import Error from './Components/Error'
import Footer from './Components/Footer'
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      results: 1,
      query: '',
      isLoading: true,
      pageLoadCount: 1,
    }
  }

  loading = () => {
    return (
      <div className='loading-container'>
        <p>Loading...</p>
        <FontAwesomeIcon icon={faSpinner}/>
      </div>
    )
  }

  apiCall = (value='Miscellaneous') => {
    axios({
      url: `https://newsapi.org/v2/everything?q=${value}&language=en&pageSize=100&apiKey=eb43cb932e264320adfd1b7942970622`,
      method: 'GET',
      responseType: 'JSON',
    }).then(response => {

      let results = response.data.totalResults;
      let articles = response.data.articles;

      const filterArticleTitles = articles.filter((article, index, array) => {
        return array.findIndex(secondIndex => (secondIndex.title === article.title)) === index
      });

      this.setState({
        articles: filterArticleTitles,
        results,
        query: '',
        placeholder: value,
        isLoading: false,
      })
    })
    console.log('API Called');
  }

  onPageLoad = () => {
    console.log('Miscellaneous')
    this.apiCall();
    this.setState({
      pageLoadCount: 2
    })
  }

  handleSearch = value => {
    console.log(value);
    this.apiCall(value);
  }

  componentDidMount() {
    if (this.state.pageLoadCount === 1) {
      this.onPageLoad();
    } 
  }

  render() {
    const {articles, results} = this.state;
    return (
      <> 
        <Header handleSearch={this.handleSearch}/>
        <div className="wrapper">
          <main>
            {
              results > 0 ? articles.map((article, index) => {
                return (
                  <Articles
                    key={index}
                    url={article.url}
                    imgSrc={article.urlToImage}
                    title={article.title}
                    date={article.publishedAt}
                  />
                  )
                }) : <Error />
              }
          </main>
        </div>
        <Footer />
      </>
    )
  }
}

export default App
