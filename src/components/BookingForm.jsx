import React, { useState } from 'react';

const BookingForm = ({ selectedSeats, onSubmitBooking }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Ім'я обов'язкове";
    if (!formData.phone.trim()) {
      newErrors.phone = "Телефон обов'язковий";
    } else if (!/^\+?[0-9]{10,12}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Некоректний формат телефону";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email обов'язковий";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Некоректний Email";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      onSubmitBooking(formData);
    }
  };

  if (selectedSeats.length === 0) return null;

  return (
    <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '20px', borderRadius: '12px', border: '1px solid #eee', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
      <h3 style={{ marginBottom: '15px', color: '#333' }}>Дані пасажира для бронювання:</h3>
      <p style={{ color: '#555', marginBottom: '15px' }}>Обрані місця: <strong>{selectedSeats.join(', ')}</strong></p>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Ім'я та Прізвище:</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={{ width: '100%', padding: '10px', borderRadius: '6px', border: errors.name ? '1px solid #dc3545' : '1px solid #ccc' }}
        />
        {errors.name && <span style={{ color: '#dc3545', fontSize: '0.85rem' }}>{errors.name}</span>}
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Телефон:</label>
        <input
          type="text"
          placeholder="+380XXXXXXXXX"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          style={{ width: '100%', padding: '10px', borderRadius: '6px', border: errors.phone ? '1px solid #dc3545' : '1px solid #ccc' }}
        />
        {errors.phone && <span style={{ color: '#dc3545', fontSize: '0.85rem' }}>{errors.phone}</span>}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          style={{ width: '100%', padding: '10px', borderRadius: '6px', border: errors.email ? '1px solid #dc3545' : '1px solid #ccc' }}
        />
        {errors.email && <span style={{ color: '#dc3545', fontSize: '0.85rem' }}>{errors.email}</span>}
      </div>

      <button type="submit" style={{ width: '100%', background: '#28a745', color: '#fff', padding: '12px', border: 'none', borderRadius: '6px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer' }}>
        Підтвердити бронювання
      </button>
    </form>
  );
};

export default BookingForm;