import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Blog from './components/Blog';
import './App.css'; // Global styles

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Home />
                <About />
                <Services />
                <Blog />
                <Contact />
            </main>
        </div>
    );
}

export default App;
