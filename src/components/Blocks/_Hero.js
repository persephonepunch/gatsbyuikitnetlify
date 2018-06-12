import React, { Component } from 'react';
import styled from 'react-emotion';
import heroimage from "../../images/barometer_animation_170317.gif"

export class Hero extends Component {
  render() {
    return (
      <div
        className="uk-height-large uk-background-default uk-dark uk-flex"
        data-uk-parallax="bgy: -200"
      >
        <div className="uk-width-1-1@m uk-text-center uk-margin-large uk-margin-auto-vertical">
          <h1 className="uk-heading-hero uk-margin">introducing</h1>
          <img src={heroimage} alt="ysl150hero" />
          <h3 className="">we're starting something new!</h3>

          <div className="uk-grid-match uk-child-width-1-3@m" data-uk-grid>
            <div>
              <p>
               
              </p>
            </div>
            <div>
              <p>
               
              </p>
            </div>
            <div>
              <p>
             
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
