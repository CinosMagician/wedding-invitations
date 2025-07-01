import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setErrors({ email: 'Invalid email address' });
      return;
    }

    setErrors({ email: '' });

    emailjs.send(
      'service_ibi5d5q',
      'template_ry1fhrv',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      '72iuHhNaIaZI3AnTa'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Email sent successfully!');
    }, (error) => {
      console.log('FAILED...', error);
      alert('Failed to send email. Please try again later.');
    });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mt-5">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        Contact Form:
      </motion.h2>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-danger mb-5">Send</button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
