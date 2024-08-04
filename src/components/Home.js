import React from 'react';
import './Section.css';

const Home = () => {
    return (
        <section id="home" className="home-section">
            <div className="home-content">
                <h1 className="home-title">Transforming the Future with Blockchain</h1>
                <p className="home-subtitle">Innovative Solutions for a Decentralized World</p>
                <p className="home-description">
                    Welcome to <strong>Ledger Shift</strong>. We are dedicated to driving digital transformation through advanced blockchain technology. Our mission is to deliver secure, scalable, and transparent solutions that redefine how businesses and individuals interact in the digital age.
                </p>
                <div className="cta-buttons">
                    <a href="#about" className="btn btn-primary">Explore Our Solutions</a>
                    <a href="#contact" className="btn btn-secondary"> Contact Us </a>
                </div>
            </div>
            <div className="blockchain-features">
                <h2 className="features-title">Blockchain Features</h2>
                <div className="features-container">
                    <div className="feature-box feature-box-1">
                        <h3>Decentralization</h3>
                        <p>Blockchain technology eliminates the need for a central authority by distributing data across a network of computers.</p>
                    </div>
                    <div className="feature-box feature-box-2">
                        <h3>Security</h3>
                        <p>Each transaction is encrypted and linked to the previous one, making it nearly impossible to alter or hack the data.</p>
                    </div>
                    <div className="feature-box feature-box-3">
                        <h3>Transparency</h3>
                        <p>All participants in the blockchain network have access to the same data, ensuring complete transparency.</p>
                    </div>
                    <div className="feature-box feature-box-4">
                        <h3>Immutability</h3>
                        <p>Once data is added to the blockchain, it cannot be changed or deleted, providing a permanent record of all transactions.</p>
                    </div>
                    <div className="feature-box feature-box-5">
                        <h3>Efficiency</h3>
                        <p>Blockchain can streamline and automate processes, reducing the need for intermediaries and speeding up transactions.</p>
                    </div>
                    <div className="feature-box feature-box-6">
                        <h3>Smart Contracts</h3>
                        <p>Self-executing contracts with the terms directly written into code, enabling automatic and trustworthy transactions.</p>
                    </div>
                    <div className="feature-box feature-box-7">
                        <h3>Scalability</h3>
                        <p>Our blockchain solutions are designed to handle a growing amount of work and can be scaled to meet increasing demands.</p>
                    </div>
                    <div className="feature-box feature-box-8">
                        <h3>Interoperability</h3>
                        <p>Blockchain technology can connect with different blockchain networks, ensuring seamless data exchange and integration.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
