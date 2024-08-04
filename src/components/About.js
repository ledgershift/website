import React from 'react';
import './Section.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-header">
                <h1 className="about-title">About Us</h1>
                <p className="about-intro">
                    Welcome to <strong>Ledger Shift</strong>. We are driven by a passion for harnessing the power of blockchain technology to create innovative solutions. Our mission is to lead the digital transformation with secure, scalable, and transparent blockchain solutions that meet the needs of today's dynamic business landscape.
                </p>
            </div>
            <div className="about-mission">
                <h2 className="section-heading">Our Mission</h2>
                <p>
                    Our mission is to deliver cutting-edge blockchain technology that enhances transparency, efficiency, and trust. We aim to be at the forefront of technological advancements, providing our clients with the tools they need to succeed in a rapidly evolving digital world.
                </p>
            </div>
            <div className="about-values">
                <h2 className="section-heading">Our Core Values</h2><br/><br/>
                <div className="values-list">
                    <div className="value-item value-item-1">
                        <h3>Innovation</h3>
                        <p>Continuously pushing the boundaries of blockchain technology to create groundbreaking solutions.</p>
                    </div>
                    <div className="value-item value-item-2">
                        <h3>Integrity</h3>
                        <p>Upholding the highest standards of transparency and ethics in all our interactions.</p>
                    </div>
                    <div className="value-item value-item-3">
                        <h3>Customer-Centricity</h3>
                        <p>Focusing on the needs and success of our clients, ensuring their satisfaction and success.</p>
                    </div>
                    <div className="value-item value-item-4">
                        <h3>Excellence</h3>
                        <p>Delivering high-quality solutions with precision, care, and dedication.</p>
                    </div>
                    <div className="value-item value-item-5">
                        <h3>Collaboration</h3>
                        <p>Working together with our clients and partners to achieve common goals.</p>
                    </div>
                    <div className="value-item value-item-6">
                        <h3>Adaptability</h3>
                        <p>Staying flexible and open to change in a rapidly evolving digital landscape.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
