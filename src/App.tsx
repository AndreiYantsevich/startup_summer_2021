import React from 'react';

import './App.scss';

import {Main} from './components/main/Main';
import {Header} from './components/header/Header';

function App() {
    return (
        <div className="app">
            <Header/>
            <Main/>
        </div>
    );
}

export default App;
