import React from 'react';
import ContactForm from './ContactForm';

const ContactFormDemo: React.FC = () => {
    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{ width: '100%', maxWidth: '600px' }}>
                <h1 style={{
                    textAlign: 'center',
                    color: 'white',
                    marginBottom: '2rem',
                    fontSize: '2.5rem',
                    fontWeight: 'bold'
                }}>
                    Contact Form Demo
                </h1>
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactFormDemo;