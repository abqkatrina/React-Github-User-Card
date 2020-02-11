import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
// import Form from './components/Form';
import List from './components/List';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: []
    };
  };

componentDidMount() {
  axios.get('https://api.github.com/users/abqkatrina')
        .then(response => {
          console.log(response.data);
          this.setState({user: response.data})})
        .catch(error => {console.log('axios whoops', error)})
};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className='App-main'>
          {/* /<Form /> */}
          <List user={this.state.user}/>
        </div>
      </div>
    );
  }
}
export default App;
