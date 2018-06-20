import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

// feed the state top the render (null)
// Fetch all beers from API
// Fetch data in the state
// feed the updated state to the render

// 1. set state - Done!
// 2. componentDidMount - fetch data when ready
// 3. fetch the data using fetch
function parseBeer(beer){
  const {name, description, image_url} = beer
return {
  name: beer.name,
  description: beer.description,
  image_url: beer.image_url
  }
}

class App extends Component {

  state = {
    beers: null
  }

  componentDidMount() {
    const beerURL = 'http://localhost:3000/beers'
    fetch(beerURL)
      .then(response => response.json())
      .then(beersData => {
        const beers = beersData.map(parseBeer)
        this.setState({
          beers: beers
        })
      })
      .catch(err => console.error(err))
      }

      // deleteBeer= (id) => {
      //   const beerURL = `http://localhost:3000/beers/${id}`
      //   fetch(beerURL, {method: 'DELETE'})
      //   .then(response => response.json())
      //   .then(() => {
      //     this.setState((prevState) => {

      //     }
      //   }
      // }
  

  render() {
    if(!this.state.beers) {
      return <div>Loading beers...</div>
    }
    const beers = this.state.beers.map((beer) => {
      return( 
        <div className="beer-card">
      <h2 className="animated infinite bounce">{beer.name}</h2>
     <img className="App-logo2" src={beer.image_url} width="90px" height="300px"/>
     <p className = "animated infinite tada">{beer.description}</p>
     <button>Delete</button>
     </div>
      )
    })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="animated infinite flash">
          <h1 className="App-title">Beer City</h1>
      
          </div>
        </header>
       <ul>{beers}</ul>
      </div>
    );
  }
}

export default App;
