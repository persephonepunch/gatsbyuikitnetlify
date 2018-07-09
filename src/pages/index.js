import React from 'react';
import Link from 'gatsby-link';
import { Hero, Stats, CardsRow, NewsLetter, Tiles, Comments,  Temperature, Dashboard, Form } from 'Blocks';



const HomePage = () => (
  <div className="uk-section">
    <div className="uk-container">

      <div className="uk-panel uk-light uk-margin-medium" />
   <Hero />

    
    <div className="uk-panel uk-light uk-margin-medium" />
   <Dashboard />

       <div className="uk-panel uk-light uk-margin-medium" />
   <Form />

    


    <div className="uk-panel uk-light uk-margin-medium" />
   <Temperature />
 
 
   
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
