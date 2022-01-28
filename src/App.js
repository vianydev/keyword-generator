import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import Logo from './components/Logo/Logo';
import SearchKeyword from './components/SearchKeyword/SearchKeyword';
import KeywordsBar from './components/KeywordsBar/KeywordsBar';
import Clarifai from 'clarifai';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';

const app = new Clarifai.App({
  apiKey: '094371494c56468d8e84701b443ae668'
 });

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      keywords: [],
      route: 'signin'
    };
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
    // API clarifai
    app.models
      .predict(
        Clarifai.GENERAL_MODEL,
        this.state.input)
      .then(response => {
        words = response.outputs[0].data.concepts;
        this.setState({
          keywords: this.state.keywords.concat(words)
        })
      })
      .catch(err => console.log(err));
  }

  handleRouteChange = (route) => {
    this.setState({route: route});
  }

  render() { 
    const { keywords, imageUrl, route } = this.state;
    return (
      <div>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>  
          <Logo />
          <Nav handleRouteChange={this.handleRouteChange} 
          route={route}
          />
        </div>
       { 
        route === "signin" 
        ? <SignIn handleRouteChange={this.handleRouteChange} />
        : route === "register"
        ? <Register handleRouteChange={this.handleRouteChange} />
        : <div>
            <SearchKeyword 
            inputChange={this.inputChange} 
            handleSubmit={this.handleSubmit} 
            />
            <KeywordsBar keywords={keywords} url={imageUrl} />
          </div>
        }
      </div>
    );
  }
}

export default App;
