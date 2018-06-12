import React, { Component } from 'react';


export class CardsMap extends Component {
  render() {
    return (
      <div className="uk-section ">
        <div className="uk-container uk-container-small">
          <h3 className="uk-heading-line uk-text-left">
            <span>Something with two columns</span>
          </h3>
          <div className="uk-panel uk-light uk-margin-medium" />

          <div
            className="uk-grid-match uk-child-width-expand@m"
            data-uk-grid-parallax="translate:50"
            data-uk-scrollspy="target: > div; cls:uk-animation-fade; delay: 500"
          >
          
          </div>
        </div>



        
      </div>
    );
  }
}

export default CardsMap;
