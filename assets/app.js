/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// start the Stimulus application
//import '../bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import LayoutAllBooks from './components/LayoutAllBooks';
    
ReactDOM.render(
    <>
    {/* <Router><Home /></Router>
        <Prueba/> */}
        <LayoutAllBooks/>
    </>
    , document.getElementById('mainIndex')
);

