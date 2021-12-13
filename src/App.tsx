import React from 'react';

import './App.scss';

import {Profile} from './components/profile/Profile';
import {Header} from './components/header/Header';

function App() {
    return (
        <div className="app">
            <Header/>
            <Profile/>
        </div>
    );
}

export default App;
