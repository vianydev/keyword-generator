import React, { Component } from 'react';
import SearchKeyword from '../Components/SearchKeyword/SearchKeyword';
import KeywordsBar from '../Components/KeywordsBar/KeywordsBar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      keywords: [],
    }
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
    let words;

    const PAT = process.env.REACT_APP_PAT;
    const USER_ID = process.env.REACT_APP_USER_ID;
    const APP_ID = process.env.REACT_APP_APP_ID;
    const MODEL_ID = 'general-image-recognition';
    const MODEL_VERSION_ID = 'aa7f35c01e0642fda5cf400f543e7c40';
    // const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';
    const IMAGE_URL = this.state.input;

    const raw = JSON.stringify({
      "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
      },
      "inputs": [
        {
          "data": {
            "image": {
              "url": IMAGE_URL
            }
          }
        }
      ]
    });

    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
      },
      body: raw
    };

    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
      .then(response => response.json())
      .then(response => {
        words = response.outputs[0].data.concepts;
        this.setState({
          keywords: this.state.keywords.concat(words)
        })
      })
      .catch(error => console.log('error'));
  }

  

  render() { 
    const {
      keywords,
      imageUrl
    } = this.state;
    return (
      <main className='text-base w-full bg-slate-800'>
        <section className='flex flex-col justify-center content-center min-h-screen'>  
          <SearchKeyword 
            inputChange={this.inputChange} 
            handleSubmit={this.handleSubmit}
          />
          <KeywordsBar 
            keywords={keywords} 
            url={imageUrl} 
          />
        </section>
      </main>
    );
  }
}

export default App;
