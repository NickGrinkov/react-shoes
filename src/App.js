import './App.scss';
import React from 'react';
import { Route } from 'react-router';

import Header from './Components/Header';
import Home from './Components/Home';



function App({shoesArr}) {
  return (
    <div className="wrapper">
        <Header/>
        <div className="content">
            <Route path='/' render={() => <Home shoesArr={shoesArr}/>} exact />
        </div>
    </div>
  );

}

export default App;
