import React from 'react';
import './Section.css'; // Updated CSS file

const Contact = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        // Construct the form data object
        const formData = new FormData();
        formData.append('entry.2005620554', name); // Ensure correct Google Form entry ID
        formData.append('entry.1045781291', email); // Ensure correct Google Form entry ID
        formData.append('entry.839337160', message); // Ensure correct Google Form entry ID

        try {
            // Send POST request to Google Forms
            const response = await fetch('https://docs.google.com/forms/d/e/1FAIpQLScp-ReDk6sREQVI6zVuhht0DB0BZ6vIQgbOxHzzoGiAQj0ydQ/formResponse', {
                method: 'POST',
                body: formData,
                mode: 'no-cors' // Required for Google Forms
            });
            console.log('Form submitted successfully');
            alert('Form submitted successfully.');
            e.target.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-content">
                <h1 className="contact-title">Get in Touch</h1>
                <p className="contact-intro">
                    We’d love to hear from you! Whether you have questions about our services or just want to say hello, feel free to reach out.
                </p>
                <div className="contact-form">
                    <h2 className="form-title">Send Us a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="entry.2005620554" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="entry.1045781291" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="entry.839337160" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="btn-primary">Send Message</button>
                    </form>
                </div>
                <div className="contact-info">
                    <h2 className="info-title">Contact Information</h2>
                    <p><strong>Email:</strong> contact@ledgershift.in</p>
                </div>
            </div>
        </section>
    );
}

export default Contact;
