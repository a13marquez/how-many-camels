import React from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import 'bulma/css/bulma.css'
import '../app.scss';

import { Game } from './game';
import { Result } from './result';

export const App = () => {
  const [result, setResult] = React.useState('');
  const onHandleCalculate = (result) => {
    setResult(result)
  }

  return (
    <Router>
      <Route exact path="/" 
             render={(props)=> ( 
             <Game {...props} 
                   handleCalculate={onHandleCalculate}>
            </Game>)}>        
      </Route>
      <Route path="/result" 
             render={(props) => (
               <Result {...props}
                       result={result}>          
               </Result>)
      }></Route>
    </Router>
  )
}