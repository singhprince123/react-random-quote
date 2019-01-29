import React, { Component } from 'react';
import './App.css';
import { quotes } from './quotes-data'
import Button from './components/Button';
import Quote from './components/Quote'
import Title from './components/Title'


class App extends Component {

  state = {
    quotes :  quotes,
     currentQuote: quotes[0],
     quoteIndex: null
    }

    getQuote=  ()=> {
      const quote = this.state.quotes.length - 1;
     
      let random = Math.floor(Math.random()* quote) + 1 ;
      console.log("random ", random)
      if(random === this.state.quoteIndex){
         if( random === quote){
           
           random = random - 1
         }else{
           random = random + 1
         }
      }
      this.setState({
        quoteIndex: random,
        currentQuote: this.state.quotes[random]
      })
   }
  
  render() {
    console.log("quote index" ,this.state.quoteIndex)
    
    return (
      <div className="container my-5">
          <Title />
          <div className="col-10 mx-auto col-md-6 my-3">
            <div className="card">
              <div className="card-body" id="quote-box">
              
              <Quote  quoteData={ this.state.currentQuote} />
              <div className="card-footer">

              <Button  random={this.getQuote} />
              </div>
              
         
              </div>
            </div>
          </div>
        
      </div>
    );
  }
}

export default App;
