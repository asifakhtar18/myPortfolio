import React, { useState } from 'react';
import { db } from './firebase'
import './styles/contact.css'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, message };

    try {
      // Save the form data to Firestore
      
      await db.collection('contacts').add(formData);

      // Clear the form inputs
      setName('');
      setEmail('');
      setMessage('');

      // Display success message to the user
      alert('Thank you for contacting us!');
    } catch (error) {
      console.error('Error saving form data:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Contact Me</h2>
      <h4>I would love to hear from you </h4>


      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
        className='input'
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
            className='input'
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>


      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>


      <button
        disabled={!name}
        type="submit">
            Submit
        </button>
    </form>
  );
};

export default ContactForm;
