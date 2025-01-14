import React from 'react';
import {Footer, Blog, Possibility, Features, WhatGpt3, Header} from './containers';

import {CTA, Brand, Navber} from './components';
import './App.css' ;
const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navber/>
            <Header/>

        </div>
        <Brand/>
        <WhatGpt3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>

    </div>
  )
}

export default App
