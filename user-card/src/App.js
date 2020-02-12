import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Follower from './components/Follower';

class App extends Component {
    
  state = {
      query: '',
      user: {},
      followers: [],
  };
  
  componentDidMount(){
    // axios.get('https://api.github.com/rate_limit')
    // .then(response => {console.log(response)})

    axios.all([
      axios.get('https://api.github.com/users/abqkatrina'), 
      axios.get('https://api.github.com/users/abqkatrina/followers'),
      ])

    .then(axios.spread((katrina, followers,) => {
      // console.log(followers.data);
      // console.log(katrina);
        this.setState({user: katrina.data})
        this.setState({followers: followers.data});
        
        // this.state.followers.map(follower => {
        //     console.log(follower)
        //     const username = follower.login
        //     axios.get(`https://api.github.com/users/${username}`)
        //     .then(response => {
        //       console.log('login', response.data)
        //       this.setState({followers : response.data})
        //     })
    // })
  }))
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if(prevState.query !== this.state.query) {
  //     
  //     .then (response => this.setState({ user: response.data}))
  //     .catch(error => console.log('query fetch', error))
  //   }
  // }

  handleChanges = event => {
    this.setState({query: event.target.value})
  };

  searchUsers = event => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.query}`)
      .then (response => this.setState({ user: response.data}))
      .catch(error => console.log('search user', error))
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
            <button type='submit' onClick={this.searchUsers}>search</button>
          </form>
          <div className='cardContainer'>
            <Card users={this.state.user} key={this.state.user.id} />
            {this.state.followers.map((fallower, index) => {return(<Follower key={index} follower={fallower}/>)})}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
