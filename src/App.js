import React from 'react';
import {BrowserRouter} from "react-router-dom";

import './App.css';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <div className="container content-area mb-3">
                    <Main/>
                </div>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;
