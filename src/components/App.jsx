import React from 'react';
import 'bulma/css/bulma.css'

import { Header } from './header';
import { Game } from './game';

export const App = () => (
  <div>
      <Header title="How Many Camels for your boyfriend?"></Header>
      <Game></Game>
  </div>
)