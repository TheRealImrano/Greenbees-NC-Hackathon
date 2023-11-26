import React, { Component } from 'react';
import { Level } from './Level';
import { AboutPage } from './AboutPage';
import {Route, Routes} from 'react-router-dom'

function Content () { 
  return (
    <Routes>
      <Route path='/' element={<Level/>}/>
      <Route path='/about' element={<AboutPage/>}/>
    </Routes>
  )

export default Content;