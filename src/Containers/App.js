import React, { Component } from 'react';
import Nav from '../Components/Nav/Nav';
import Logo from '../Components/Logo/Logo';
import SearchKeyword from '../Components/SearchKeyword/SearchKeyword';
import KeywordsBar from '../Components/KeywordsBar/KeywordsBar';
import SignIn from '../Components/SignIn/SignIn';
import Register from '../Components/Register/Register';

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      keywords: [],
      route: 'signin',
      isSignIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      joined: data.joined
    }})
  }
  
  inputChange = (e) =>{
    this.setState({input: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.input.length === 0) {
      return;
    }
    this.setState({imageUrl: this.state.input});
    this.setState({keywords: []});
    let words;
    fetch('https://keyword-generator-2022.herokuapp.com/imageUrl', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          input: this.state.input
      })
    })
    .then(response => response.json())
    .then(response => {
      words = response.outputs[0].data.concepts;
      this.setState({
        keywords: this.state.keywords.concat(words)
      })
    })
    .catch(err => console.log(err));
  }

  handleRouteChange = (route) => {
    if (route === 'signin'){
      this.setState({
        input: '',
        imageUrl: '',
        keywords: [],
        route: 'signin',
        isSignIn: false,
        user: {
          id: '',
          name: '',
          email: '',
          joined: ''
        }
      });
    } else if (route === 'home'){
      this.setState({isSignIn: true});
    }
    this.setState({route: route})
  }

  render() { 
    const { keywords, imageUrl, route, user } = this.state;
    return (
      <div>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>  
          <Logo />
          <Nav 
            handleRouteChange={this.handleRouteChange} 
            route={route}
          />
        </div>
       { 
        route === "signin" 
        ? <SignIn 
            handleRouteChange={this.handleRouteChange}
            loadUser={this.loadUser} 
          />
        : route === "register"
        ? <Register 
            handleRouteChange={this.handleRouteChange}
            loadUser={this.loadUser} 
          />
        : <div>
            <SearchKeyword 
              inputChange={this.inputChange} 
              handleSubmit={this.handleSubmit}
              name={user.name}
            />
            <KeywordsBar 
              keywords={keywords} 
              url={imageUrl} 
            />
          </div>
        }
      </div>
    );
  }
}

export default App;
