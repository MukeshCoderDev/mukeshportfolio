// src/components/ContactForm.tsx
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm: React.FC = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State for submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const form = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Error: Please fill out all fields.');
      return;
    }

    setIsSubmitting(true);
    setStatusMessage('Sending...');

    // IMPORTANT: Replace with your actual EmailJS IDs!
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(serviceID, templateID, form.current!, publicKey)
      .then((result) => {
          console.log(result.text);
          setStatusMessage('Success! Your message has been sent.');
          // Clear form on success
          setFormData({ name: '', email: '', message: '' });
      }, (error) => {
          console.log(error.text);
          setStatusMessage('Error: Failed to send message. Please try again later.');
      })
      .finally(() => {
        setIsSubmitting(false);
        // Optional: clear the status message after a few seconds
        setTimeout(() => setStatusMessage(''), 5000);
      });
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        name="name"
        placeholder="mukesh shah"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="mukeshcoder1984@gmail.com"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <textarea
        name="message"
        placeholder="hi"
        rows={4}
        value={formData.message}
        onChange={handleInputChange}
        required
      ></textarea>

      <button type="submit" className="send-button" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {statusMessage && (
        <div className={`status-message ${
          statusMessage.includes('Success')
            ? 'success'
            : statusMessage.includes('Error')
            ? 'error'
            : 'info'
        }`}>
          {statusMessage}
        </div>
      )}
    </form>
  );
};

export default ContactForm;