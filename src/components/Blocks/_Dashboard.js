import React, { Component } from 'react';

export class Dashboard extends Component {
  render() {
    return (
      <div className="uk-section ">
        <div className="uk-container uk-container-medium">
          <div
            className="uk-child-width-1-3@s uk-grid-collapse uk-text-center uk-box-shadow-large"
            data-uk-grid
            data-uk-scrollspy="target: p; cls:uk-animation-fade; delay: 500"
          >
            <div>
              <div className="uk-tile uk-tile-primary ">
                <h4 className="uk-h4">Placeholderg</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  ornare massa felis, sit amet placerat nisi cursus a. Cras diam
                  turpis, sodales ac ullamcorper vel, lobortis ut tellus.
                  Curabitur ut iaculis dolor.
                </p>
              </div>
            </div>
            
            <div>
              <div className="uk-tile uk-tile-default">
                <h4 className="uk-h4"> </h4>
                <p>
                
                </p>
              </div>
            </div>
            <div>
              <div className="uk-tile uk-tile-default">
                <h4 className="uk-h4"> </h4>
                <p>
                  
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
