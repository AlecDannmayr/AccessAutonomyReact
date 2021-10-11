import React, { Component } from 'react'
import SingleSide from './SingleSide'
import axios from 'axios'

class Sidenews extends Component {
   constructor(props) {
      super(props)
      this.state = {
         sidenews: [],
      }
   }

   componentDidMount() {
      const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=86658496cda54d51b30511ee06e54eaf`

      axios
         .get(url)
         .then((response) => {
            this.setState({
               sidenews: response.data.articles,
            })
         })
         .catch((error) => CompositionEvent.log(error))
   }

   renderItems() {
      return this.state.sidenews.map((item) => <SingleSide key={item.url} item={item} />)
   }
   render() {
      return <div>{this.renderItems()}</div>
   }
}

export default Sidenews
