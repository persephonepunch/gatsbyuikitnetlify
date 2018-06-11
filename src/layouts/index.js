import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Img from "gatsby-image";
import styled from 'react-emotion';

import { Footer, Navigation, OffCanvas } from 'Layout';


import './styles.scss';

class TemplateWrapper extends Component {
  state = { ready: false };
  componentDidMount = () => {
    if (typeof window !== 'undefined') {
      const uikit = require('uikit');
      const icons = require('uikit/dist/js/uikit-icons.min');
      uikit.use(icons);
      this.setState({ ready: true });
    }
  };

  render() {
    return (
      <div>
        {this.state.ready && (
          <Wrapper>
            <Navigation />
            <Main>{this.props.children()}</Main>
            <Footer />
            <OffCanvas />
          </Wrapper>
        )}
      </div>
    );
  }
}

export default TemplateWrapper;

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  animation: appear 0.5s forwards;




  @font-face {
    font-family: 'Apercu';
    font-style: normal;
    font-weight: 400;
    src: local('Apercu'),
      local('Apercu-Regular'),
      url(http://yslprojects.com/tempestcdn/fonts/apercu-regular.woff)
        format('woff2');
    unicode-range: U+0100-024f, U+1-1eff,
      U+20a0-20ab, U+20ad-20cf, U+2c60-2c7f,
      U+A720-A7FF;
  }

  @font-face {
    font-family: 'barometer';
    font-style: normal;
    font-weight: 400;
    src: local('barometer'),
      local('Apercu-Regular'),
      url(http://yslprojects.com/tempestcdn/fonts/barometer1.woff)
        format('woff2');
    unicode-range: U+0100-024f, U+1-1eff,
      U+20a0-20ab, U+20ad-20cf, U+2c60-2c7f,
      U+A720-A7FF;
  }


  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;


const Main = styled.div`
  flex: 1;
  font-family: 'Apercu';
  h1, h2, h3, h4, h5 font-family: 'Apercu';
`;


