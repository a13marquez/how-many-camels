import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ title }) => (
  <section className="hero">
    <div className="hero-body">
      <h1 className="title">{title}</h1>
    </div>
  </section>
)

Header.PropTypes = {
  title: PropTypes.string.isRequired
}