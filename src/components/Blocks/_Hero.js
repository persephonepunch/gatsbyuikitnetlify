import React, { Component } from 'react';
import styled from 'react-emotion';

export class Hero extends Component {
  render() {
    return (
      <div
        className="uk-height-large uk-background-default uk-dark uk-flex"
        data-uk-parallax="bgy: -200"
      >
       
        
        
        <div className="uk-width-2-3@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
          <h1 className="uk-heading-hero uk-margin">introducing</h1>
          <h3 className="">
          
          <div className="uk-text-center uk-margin-auto uk-margin-auto-vertical">
                          <img
                            className="uk-comment-avatar"
                            src="http://tempestbeta.com/revise/wp-content/uploads/1489968726894-2.gif"
                            width="1000"
                            height="231"
                            alt=""
                          />
            </div>
          
          
          </h3>

          <div className="uk-grid-match uk-child-width-1-3@m" data-uk-grid>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
