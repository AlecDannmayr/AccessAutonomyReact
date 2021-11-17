import React, { Component } from 'react'
import NewSingle from './newsSingle'

class News extends Component {
   constructor(props) {
      super(props)
      this.state = {
         news: [],
      }
   }

   componentDidMount() {
      const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=86658496cda54d51b30511ee06e54eaf`

      fetch(url)
         .then((response) => {
            return response.json()
         })
         .then((data) => {
            this.setState({
               news: data.articles,
            })
         })
         .catch((error) => console.log(error))
   }

   renderItems() {
      return this.state.news.map((item) => <NewSingle key={item.url} item={item} />)
   }
   render() {
      return <div className="row">{this.renderItems()}</div>
   }
}

export default News
