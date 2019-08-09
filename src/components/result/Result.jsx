
import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../header';

export const Result = ({result}) => (

  <div class="section">
     <Header title="How Many Camels for your boyfriend?"></Header>
     <div className="level">
       <h1 className="level-item">
        {result} Camels
       </h1>
     </div>
    <button className="button is-facebook">
      <span className="icon">
        <i className="fab fa-facebook"></i>
      </span>
      <span> Share on Facebook </span>
    </button>
  </div>
)