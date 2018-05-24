import React, { Component } from 'react';

export class Dashboard extends Component {
  render() {
    return (
      <div className="uk-section ">
        <div className="uk-container uk-container-medium">
          <div
            className="uk-child-width-1-1@s uk-grid-collapse uk-text-center uk-box-shadow-large "
            data-uk-grid
            data-uk-scrollspy="target: p; cls:uk-animation-fade; delay: 500"
          >
           








          
            <div>
              <div className="uk-tile uk-tile-secondary">
                <h4 className="uk-h4">Placeholder</h4>
                <p>
               Placeholder for the Widget
                </p>
              </div>
            </div>

            <div></div>


             


          </div>


          <div
            className="uk-child  uk-grid-collapse  uk-box-shadow-large"
            data-uk-grid
            data-uk-scrollspy="target: p; cls:uk-animation-fade; delay: 500"
          >
           
          
            <div  className="uk-child  uk-grid-collapse  uk-box-shadow-large">
              <div className="uk-tile uk-tile-default">
                <h4 className="uk-h4">Second Panel</h4>
                <p>
               Placeholder for the Hero App
                </p>
              </div>
            </div>


             


          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
