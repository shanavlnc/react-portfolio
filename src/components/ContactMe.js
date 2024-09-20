import React, { useState } from 'react';
import Modal from 'react-modal';
import '../App.css';

Modal.setAppElement('#root');

const ContactMe = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Sent! Please check your email. Thank you!');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      contactNumber: '',
    });
    setIsModalOpen(false);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="contact">
      <h2 style={{ color: 'white' }}>Contact Me</h2>
      <p style={{ color: '#ffffff' }}>
        Send me an email at{' '}
        <a href="mailto:shana_faith_valencia@dlsl.edu.ph" style={{ color: '#00ffcc' }}>
          shana_faith_valencia@dlsl.edu.ph
        </a>.
      </p>
      <button onClick={openModal}>Open Contact Form</button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Contact Form Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Contact Me 📧</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="contactNumber">Contact Number:</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <button onClick={closeModal} className="modal-close-btn">Close</button>
      </Modal>
    </section>
  );
};

export default ContactMe;
