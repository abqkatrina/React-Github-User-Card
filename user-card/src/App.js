import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Follower from './components/Follower';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      query: '',
      user: [],
      followers: []
    };
  };

  componentDidMount(){
    axios.get('https://api.github.com/users/abqkatrina')
    .then(response => {
      console.log('cdm response', response.data);
      this.setState({user: response.data})
    })
    .catch(error => { console.log('cdm whoops', error)})

    axios.get('https://api.github.com/users/abqkatrina/followers')
    .then(response => {
      console.log('cdm follower response', response.data);
      this.setState({followers: response.data})
    })
    .catch(error => { console.log('cdm whoops', error)})
  };




  //  componentDidUpdate(prevProps, prevState) {
  //   if(prevState.user !== this.state.user){
  //     axios.get('https://api.github.com/users/${this.state.query}')
  //         .then(response => {
  //           console.log(response);
  //           this.setState({ user: response.data})
  //         })
  //         .catch(error => {console.log('update error', error)})
  //   }
  // };


  handleChanges = event => {
    this.setState({ query: event.target.value})
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className='App-main'>
          <form>
            <input type='text' name='search' value={this.state.query} onChange={this.handleChanges} placeholder='search users'/>
            <button type='submit' /*onClick={this.componentDidUpdate}*/>search</button>
          </form>
          <Card users={this.state.user}/>
          {this.state.followers.map(follower => {
          return (<Follower key={follower.login} follower={follower}/>)})}
        </div>
      </div>
    );
  }
}
export default App;
