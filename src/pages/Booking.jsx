import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { trainsData } from '../data/trains.js';
import { BookingService } from '../services/BookingService';
import WagonSelector from '../components/WagonSelector';
import SeatMap from '../components/SeatMap';
import BookingForm from '../components/BookingForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Booking = () => {
  const { trainId } = useParams();
  const navigate = useNavigate();
  const train = trainsData.find(t => t.id === trainId);

  const [selectedWagon, setSelectedWagon] = useState(null);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    if (train && train.wagons.length > 0) {
      setSelectedWagon(train.wagons[0]);
    }
  }, [train]);

  useEffect(() => {
    if (train && selectedWagon) {
      const booked = BookingService.getBookedSeats(train.id, selectedWagon.number);
      setBookedSeats(booked);
      setSelectedSeats([]); // Скидаємо вибрані місця при зміні вагона
    }
  }, [selectedWagon, train]);

  if (!train) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Потяг не знайдено. <Link to="/">Назад</Link></div>;
  }

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleBookingSubmit = (passengerData) => {
    const bookingPayload = {
      trainId: train.id,
      trainNumber: train.number,
      route: `${train.from} — ${train.to}`,
      wagonNumber: selectedWagon.number,
      seats: selectedSeats,
      passenger: passengerData
    };

    BookingService.saveBooking(bookingPayload);
    
    toast.success('🎉 Квитки успішно заброньовано! Запис збережено.', {
      position: "top-right",
      autoClose: 3000
    });

    setTimeout(() => {
      navigate('/');
    }, 3200);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <ToastContainer />
      <Link to="/" style={{ color: '#0056B3', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block', marginBottom: '20px' }}>
        ← Назад до пошуку
      </Link>

      <div style={{ background: '#e6f0fa', padding: '15px', borderRadius: '8px', marginBottom: '25px' }}>
        <h2>Рейс №{train.number} ({train.type})</h2>
        <p style={{ margin: '5px 0' }}>Маршрут: <strong>{train.from} — {train.to}</strong></p>
        <p style={{ margin: '5px 0' }}>Час: {train.departureTime} — {train.arrivalTime} (В дорозі: {train.duration})</p>
      </div>

      <WagonSelector 
        wagons={train.wagons} 
        selectedWagon={selectedWagon} 
        onSelectWagon={setSelectedWagon} 
      />

      {selectedWagon && (
        <SeatMap 
          totalSeats={selectedWagon.totalSeats}
          bookedSeats={bookedSeats}
          selectedSeats={selectedSeats}
          onSeatClick={handleSeatClick}
        />
      )}

      <BookingForm 
        selectedSeats={selectedSeats}
        onSubmitBooking={handleBookingSubmit}
      />
    </div>
  );
};

export default Booking;