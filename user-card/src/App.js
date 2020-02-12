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
      
      user: [],
     
      followers: [],
    };
  };
 //bca9297f4c26404e5baf081296d223644aee6f9a
  componentDidMount(){
    // axios.get('https://api.github.com/rate_limit')
    // .then(response => {console.log(response)})

    axios.get('https://api.github.com/users/abqkatrina', )
      .then(response => {
        // console.log('cdm response', response.data);
        this.setState({user: response.data})
      })
      .catch(error => { console.log('cdm katrina whoops', error)})

    axios.get('https://api.github.com/users/abqkatrina/followers')
      .then(response => {
        // console.log('cdm follower response', response.data);
        this.setState({followers: response.data})
        // console.log(this.state.followers)


      this.state.followers.map(follower => {
        let username = follower.login;
        axios.get(`https://api.github.com/users/${username}`)
             .then(response => { 
                console.log(response.data)
              })
        })
      })
     
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className='App-main'>
          <form>
            <input type='text' name='search' /*value={this.state.query} onChange={this.handleChanges}*/ placeholder='search users'/>
            <button type='submit' /*onClick={this.componentDidUpdate}*/>search</button>
          </form>
           <Card users={this.state.user}/>
           {this.state.followers.map(followers => {
           return( <Card key={followers.id} users={followers}/>)})}
        </div>
      </div>
    );
  }
}
export default App;
