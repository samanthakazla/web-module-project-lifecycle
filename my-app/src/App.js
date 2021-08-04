import React from "react"
import axios from "axios"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: []
    }
  }
  componentDidMount() {
    axios.get(`https://api.github.com/users/samanthakazla`)
    .then(res => {
      this.setState({user: res.data});
    })
    axios.get('https://api.github.com/users/samanthakazla/followers')
      .then(res => {
        console.log(res.data);
        this.setState({ followers: res.data });
    })
      .catch(err => {console.log(err);
    });
  }


  render() {
  

    return (
      <div className="App-header">
        <h1> My User </h1>
        <div> 
          <h2>{this.state.user.name}</h2>
          <h3>{this.state.user.bio}</h3>
        </div>
				<h3>Follower Count: {this.state.user.followers}</h3>
				<h3>Following: {this.state.user.following}</h3>
				<h3>Public Repos: {this.state.user.public_repos}</h3>
				<h3>Git Repo: {this.state.user.html_url}</h3>

      </div>
    )
  }
}


export default App;
