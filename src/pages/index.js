import React from 'react';
import Link from 'gatsby-link';
import { Hero, Stats, CardsRow, CardsMap, NewsLetter, Tiles, Comments, Temperature, Globes, Dashboard } from 'Blocks';



const HomePage = () => (
  <div className="uk-section">
    <div className="uk-container">

      <div className="uk-panel uk-light uk-margin-medium" />
   <Hero />

    
    <div className="uk-panel uk-light uk-margin-medium" />
   <Dashboard />

    


    <div className="uk-panel uk-light uk-margin-medium" />
   <Temperature />
    <div className="uk-panel uk-light uk-margin-medium" />
    <Globes />
    <CardsMap />
   
    <Stats />
    <div className="uk-panel uk-light uk-margin-medium" />
    <hr className="uk-divider" />
    <Tiles />
    <div className="uk-panel uk-light uk-margin-medium" />
    <CardsRow />
    <div className="uk-panel uk-light uk-margin-medium" />
    <Comments />
    <div className="uk-panel uk-light uk-margin-medium" />
    <NewsLetter />
    <div className="uk-panel uk-light uk-margin-medium" />
 
  





      </div>
    </div>


  
);

export default HomePage;
