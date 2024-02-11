import logo from './logo.svg';
import './App.css';
import React from 'react'
import WebServiceOne from './Components/WebServiceOne';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        error: null,
        isLoaded: false,
        items: [],
        flag:0
    };
  }

  render() {
  return(
     <WebServiceOne name= 'Ali Masood' id = '1023' />
  );
}

componentDid() {
  console.log("abey yar");
}

}



export default App;
