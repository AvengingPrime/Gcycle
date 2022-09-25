import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Picture from './pages/Picture';
import Results from './pages/Results'
import Game from './pages/Game'

const Main = (props) => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path='/' element={<Game/>}/>
      <Route path='/picture' element={<Picture/>}/>
      <Route path='/results' element={<Results userHandle={props.userHandle} globalStatsHandle={props.globalStatsHandle}/>}/>
    </Routes>
  );
}

export default Main;