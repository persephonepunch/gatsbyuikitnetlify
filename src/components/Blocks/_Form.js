import React, { Component } from 'react';
import styled from 'react-emotion';





export class Form extends Component {
  render() {
    return (
        <div className="uk-section ">
        <div className="uk-container ">
      <div className="uk-height-large uk-background-default uk-dark " 
        
        data-uk-parallax="bgy: -200"
      >
       <div className="uk-card uk-card-default uk-card-body uk-card-hover " >
       <h1>Request Information</h1>
       <div className="uk-flex  uk-flex-center@m">
       <form name="contact-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
           
           <input className="uk-input uk-form-width-large" type ="text" placeholder="Email"/>
           <button className="uk-button uk-button-primary ">Send</button>
       </form>
       </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Form;
